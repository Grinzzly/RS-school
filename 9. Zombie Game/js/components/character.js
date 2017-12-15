import {state} from "./state";

export class Character {
  constructor() {
    if (state.intervalBlink || state.intervalBreath || state.intervalMelt) {
      clearInterval(state.intervalBlink);
      clearInterval(state.intervalBreath);
      clearInterval(state.intervalMelt);
    }
    state.intervalBlink = setInterval(this.updateBlink, state.blinkUpdateTime);
    state.intervalBreath = setInterval(this.updateBreath, 1000 / state.fps);
    state.intervalMelt = setInterval(this.updateMelt, 1000 / state.fps);
  }

  redrawPlayer() {
    const playerTurnLeft = () => {
      state.contextPlayer.clearRect(0, 0, state.canvasPlayer.width, state.canvasPlayer.height);
      state.contextPlayer.drawImage(state.images["torsoTurnLeft"], state.x - 18, state.y - 88);
      state.contextPlayer.drawImage(state.images["headTurnLeft"], state.x - 32, state.y - 128 - state.breathAmt);
      if (state.jumpingStatus === 1) {
        state.contextPlayer.drawImage(state.images["legsTurnLeftJumping"], state.x - 35, state.y - 67);
        state.contextPlayer.drawImage(state.images["leftArmTurnLeft"], state.x - 35, state.y - 84 - state.breathAmt);
        state.contextPlayer.drawImage(state.images["rightArmTurnLeft"], state.x - 12, state.y - 84 - state.breathAmt);
      }
      else {
        drawEllipse(state.x - 9, state.y - 49, 65 - (state.breathAmt * 3), 6, "black"); // Shadow
        state.contextPlayer.drawImage(state.images["legsTurnLeft"], state.x - 31, state.y - 65);
        state.contextPlayer.drawImage(state.images["leftArmTurnLeft"], state.x - 32, state.y - 84 - state.breathAmt);
        state.contextPlayer.drawImage(state.images["rightArmTurnLeft"], state.x - 15, state.y - 84 - state.breathAmt);
      }

      drawEllipse(state.x - 22, state.y - 98 - state.breathAmt, 5, state.curEyeHeight, "black"); // Right Eye
      drawEllipse(state.x - 14, state.y - 98 - state.breathAmt, 5, state.curEyeHeight, "black"); // Left Eye
    };

    const playerTurnRight = () => {
      state.contextPlayer.clearRect(0, 0, state.canvasPlayer.width, state.canvasPlayer.height);
      state.contextPlayer.drawImage(state.images["torso"], state.x - 31, state.y - 88);
      state.contextPlayer.drawImage(state.images["head"], state.x - 32, state.y - 128 - state.breathAmt);
      if (state.jumpingStatus === 1) {
        state.contextPlayer.drawImage(state.images["legsJumping"], state.x - 33, state.y - 67);
        state.contextPlayer.drawImage(state.images["leftArm"], state.x - 8, state.y - 84 - state.breathAmt);
        state.contextPlayer.drawImage(state.images["rightArm"], state.x - 34, state.y - 84 - state.breathAmt);
      }
      else {
        drawEllipse(state.x - 7, state.y - 49, 65 - (state.breathAmt * 3), 6, "black"); // Shadow
        state.contextPlayer.drawImage(state.images["legs"], state.x - 31, state.y - 65);
        state.contextPlayer.drawImage(state.images["leftArm"], state.x - 10, state.y - 84 - state.breathAmt);
        state.contextPlayer.drawImage(state.images["rightArm"], state.x - 31, state.y - 84 - state.breathAmt);
      }

      drawEllipse(state.x + 4, state.y - 98 - state.breathAmt, 5, state.curEyeHeight, "black"); // Left Eye
      drawEllipse(state.x - 4, state.y - 98 - state.breathAmt, 5, state.curEyeHeight, "black"); // Right Eye
    };

    const playerTurnLeftLost = () => {
      state.contextPlayer.clearRect(0, 0, state.canvasPlayer.width, state.canvasPlayer.height);
      state.contextPlayer.drawImage(state.images["torsoTurnLeft"], state.x - 18, state.y - 88 - state.meltStep);

      drawEllipse(state.x - 9, state.y - 49 - state.meltStep, 65 + state.meltStep, 6, "red"); // Blood
      state.contextPlayer.drawImage(state.images["legsTurnLeft"], state.x - 31, state.y - 65 - state.meltStep);
      state.contextPlayer.drawImage(state.images["leftArmTurnLeft"], state.x - 32, state.y - 84 + state.meltStep / 2);
      state.contextPlayer.drawImage(state.images["rightArmTurnLeft"], state.x - 15, state.y - 84 + state.meltStep / 2);
      state.contextPlayer.drawImage(state.images["characterBrainTurnLeft"], state.x - 7 + state.meltStep / 4, state.y - 116 - state.meltStep / 4);
      state.contextPlayer.drawImage(state.images["headTurnLeft"], state.x - 32, state.y - 128 + state.meltStep);

      drawEllipse(state.x - 22, state.y - 98 + state.meltStep, 5, state.curEyeHeight, "red"); // Right Eye
      drawEllipse(state.x - 14, state.y - 98 + state.meltStep, 5 + state.meltStep / 2, state.curEyeHeight + state.meltStep / 2, "red"); // Left Eye
    };

    const playerTurnRightLost = () => {
      state.contextPlayer.clearRect(0, 0, state.canvasPlayer.width, state.canvasPlayer.height);
      state.contextPlayer.drawImage(state.images["torso"], state.x - 31, state.y - 88 - state.meltStep);

      drawEllipse(state.x - 7, state.y - 49 - state.meltStep, 65 + state.meltStep, 6, "red"); // Blood
      state.contextPlayer.drawImage(state.images["legs"], state.x - 31, state.y - 65 - state.meltStep);
      state.contextPlayer.drawImage(state.images["leftArm"], state.x - 10, state.y - 84 + state.meltStep / 2);
      state.contextPlayer.drawImage(state.images["rightArm"], state.x - 31, state.y - 84 + state.meltStep / 2);
      state.contextPlayer.drawImage(state.images["characterBrain"], state.x - 27 - state.meltStep / 4, state.y - 116 - state.meltStep / 4);
      state.contextPlayer.drawImage(state.images["head"], state.x - 32, state.y - 128 + state.meltStep);

      drawEllipse(state.x + 4, state.y - 98 + state.meltStep, 5, state.curEyeHeight, "red"); // Left Eye
      drawEllipse(state.x - 4, state.y - 98 + state.meltStep, 5 + state.meltStep / 2, state.curEyeHeight + state.meltStep / 2, "red"); // Right Eye
    };

    if (state.turnRight !== 1) {
      if (state.playerLost === 1) {
        playerTurnLeftLost();
      }
      else playerTurnLeft();
    }
    else {
      if (state.playerLost === 1) {
        playerTurnRightLost();
      }
      else playerTurnRight();
    }
  }

  updateMelt() {
    if (state.playerLost === 1 && state.meltStep < 8) {
      state.meltStep += 0.3;
    }
    else if (state.playerLost !== 1) {
      state.meltStep = 0;
    }
  }

  updateBreath() {
    if (state.breathDir === 1) {
      state.breathAmt -= state.breathInc;
      if (state.breathAmt < -state.breathMax) {
        state.breathDir = -1;
      }
    }
    else {
      state.breathAmt += state.breathInc;
      if (state.breathAmt > state.breathMax) {
        state.breathDir = 1;
      }
    }
  }

  updateBlink() {
    const blink = () => {
      state.curEyeHeight -= 1;
      if (state.curEyeHeight <= 0) {
        state.eyeOpenTime = 0;
        state.curEyeHeight = state.maxEyeHeight;
      }
      else {
        setTimeout(blink, 10);
      }
    };

    state.eyeOpenTime += state.blinkUpdateTime;
    if (state.eyeOpenTime >= state.timeBtwBlinks) {
      blink();
    }
  }
}

const drawEllipse = (centerX, centerY, width, height, color) => {
  state.contextPlayer.beginPath();
  state.contextPlayer.moveTo(centerX, centerY - height / 2);
  state.contextPlayer.bezierCurveTo(
    centerX + width / 2, centerY - height / 2,
    centerX + width / 2, centerY + height / 2,
    centerX, centerY + height / 2);

  state.contextPlayer.bezierCurveTo(
    centerX - width / 2, centerY + height / 2,
    centerX - width / 2, centerY - height / 2,
    centerX, centerY - height / 2);

  state.contextPlayer.fillStyle = color;
  state.contextPlayer.fill();
  state.contextPlayer.closePath();
};