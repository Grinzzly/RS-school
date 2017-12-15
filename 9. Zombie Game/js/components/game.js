import {state} from "./state";
import {Level} from "./level";
import {PopUp} from "./popups";

export class Game {
  constructor(plans, Display) {
    this.plans = plans;
    this.Display = Display;
    this.arrows = this.trackKeys({
      37: 'left',
      38: 'up',
      39: 'right'
    });
    this.renderLevel(0);
  }

  trackKeys(codes) {
    let pressed = Object.create(null);

    const handler = (event) => {
      if (codes.hasOwnProperty(event.keyCode)) {
        let down = event.type === "keydown";
        pressed[codes[event.keyCode]] = down;
        event.preventDefault();
      }
    };
    addEventListener("keydown", handler);
    addEventListener("keyup", handler);

    return pressed;
  }

  initiateLevel(level, Display, andThen) {
    let display = new Display(document.body, level);
    this.implementAnimation((step) => {
      level.animate(step, this.arrows);
      display.drawFrame(step);
      if (level.isFinished()) {
        display.clear();
        document.body.className = document.body.className ? '' : 'fade';
        setTimeout(() => {document.body.className = ''}, 500);
        if (andThen)
          andThen(level.status);
        return false;
      }
    })
  }

  implementAnimation(frameFunc) {
    let lastTime = null;
    const frame = (time) => {
      let stop = false;
      if (lastTime != null) {
        let timeStep = Math.min(time - lastTime, 100) / 1000;
        stop = frameFunc(timeStep) === false;
      }
      lastTime = time;
      if (!stop)
        requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }

  renderLevel(n) {
    const currentLevel = document.getElementById('level');
    if (currentLevel) {
      currentLevel.style.display = "inline";
      currentLevel.innerHTML = 'Level ' + (n + 1);
    }
    this.initiateLevel(new Level(this.plans[n]), this.Display, (status) => {
      if (status === 'lost') {
        (new PopUp).showLosePopUp();

        let triggerRenderLevel = 0;

        const launchNewLevel = () => {
          if (triggerRenderLevel === 1) {
            this.renderLevel(n);
            triggerRenderLevel = null;
            state.playerLost = null;
            state.playerXSpeed = 10;
            state.jumpSpeed = 17;
          }
          else if (triggerRenderLevel === 0) {
            let buttonRerenderLevel = document.getElementById('restart-level-button-id');
            buttonRerenderLevel.addEventListener('click', launchNewLevel);
            triggerRenderLevel = 1;
          }
        };

        setTimeout(launchNewLevel, 0);

        state.orbsAbsorbed = state.memoryOrbsAbsorbed;
      }
      else if (n < this.plans.length - 1) {
        const renderDelay = () => {
          this.renderLevel(n + 1);
          state.memoryOrbsAbsorbed = state.orbsAbsorbed;
          state.playerLost = null;
        };

        setTimeout(renderDelay, 500);
      }
      else {
        (new PopUp).showWinPopUp();
      }
    });
  };
}