import {state} from "./state";
import {Vector} from "./vector";

export class Level {
  constructor(plan) {
    this.width = plan[0].length;
    this.height = plan.length;
    this.grid = [];
    this.actors = [];

    for (let y = 0; y < this.height; y++) {
      let line = plan[y], gridLine = [];
      for (let x = 0; x < this.width; x++) {
        let ch = line[x], fieldType = null;
        let Actor = state.actorChars[ch];
        if (Actor)
          this.actors.push(new Actor(new Vector(x, y), ch));
        else {
          switch (ch) {
            case 'x':
              fieldType = "wall";
              break;
            case '!':
            case '|':
            case '=':
            case 'v':
              fieldType = "lava";
              break;
            default:
              null;
          }
        }
        gridLine.push(fieldType)
      }
      this.grid.push(gridLine);
    }
    this.player = this.actors.filter((actor) => {
      return actor.type === "player"
    })[0];
    this.status = null;
    this.finishDelay = null;
    this.finishLevel = null;
  }

  isFinished() {
    return this.status != null && this.finishDelay < 0;
  }

  obstacleAt(position, size) {
    let xStart = Math.floor(position.x);
    let xEnd = Math.ceil(position.x + size.x);
    let yStart = Math.floor(position.y);
    let yEnd = Math.ceil(position.y + size.y);

    if (xStart < 0 || xEnd > this.width || yStart < 0)
      return "wall";
    if (yEnd > this.height)
      return "lava";
    for (let y = yStart; y < yEnd; y++) {
      for (let x = xStart; x < xEnd; x++) {
        let fieldType = this.grid[y][x];
        if (fieldType) return fieldType;
      }
    }
  };

  actorAt(actor) {
    for (let i = 0; i < this.actors.length; i++) {
      let other = this.actors[i];
      if (other !== actor &&
        actor.position.x + actor.size.x > other.position.x &&
        actor.position.x < other.position.x + other.size.x &&
        actor.position.y + actor.size.y > other.position.y &&
        actor.position.y < other.position.y + other.size.y)
        return other;
    }
  }

  animate(step, keys) {
    if (this.status != null)
      this.finishDelay -= step;

    while (step > 0) {
      let thisStep = Math.min(step, state.maxStep);
      this.actors.forEach(function (actor) {
        actor.act(thisStep, this, keys);
      }, this);
      step -= thisStep;
    }
  }

  playerTouched(type, actor) {
    const currentBrainsEaten = document.getElementById('brains');
    if (currentBrainsEaten) {
      currentBrainsEaten.style.display = "inline";
      currentBrainsEaten.innerHTML = state.orbsAbsorbed;
    }
    if (type === "lava" && !this.status) {
      console.debug('Player managed to collect ' + state.orbsAbsorbed + ' orbs');
      this.status = "lost";
      this.finishDelay = 1;
    } else if (type === "brain") {
      state.orbsAbsorbed++;
      this.actors = this.actors.filter((other) => {
        return other !== actor;
      });
      if (!this.actors.some((actor) => {
          return actor.type === "brain";
        })) {
        this.status = "won";
        this.finishDelay = 1;
        this.finishLevel = 1;
      }
    }
  }
}