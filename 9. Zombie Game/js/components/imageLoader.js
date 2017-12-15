import {state} from "./state";
import {Character} from "./character";

export const loadResources = () => {
  const Zombie = new Character();

  const loadImage = (name) => {

    state.images[name] = new Image();
    state.images[name].onload = () => {
      resourceLoaded();
    };
    state.images[name].src = "images/" + name + ".png";
  };

  const resourceLoaded = () => {
    state.numResourcesLoaded += 1;
    if (state.numResourcesLoaded === state.totalResources) {
      state.numResourcesLoaded = 0;
      setInterval(Zombie.redrawPlayer, 1000 / state.fps);
    }
  };

  loadImage("leftArm");
  loadImage("legs");
  loadImage("legsJumping");
  loadImage("torso");
  loadImage("rightArm");
  loadImage("characterBrain");
  loadImage("head");
  loadImage("leftArmTurnLeft");
  loadImage("legsTurnLeft");
  loadImage("legsTurnLeftJumping");
  loadImage("torsoTurnLeft");
  loadImage("rightArmTurnLeft");
  loadImage("headTurnLeft");
  loadImage("characterBrainTurnLeft");
};

