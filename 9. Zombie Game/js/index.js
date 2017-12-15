import { LEVELS } from "./components/levels";
import { DOMDisplay } from "./components/domDisplay";
import { Game } from "./components/game";
import { state } from "./components/state";

const startButton = document.getElementsByClassName('start-button')[0];
startButton.onclick = () => {
  const welcomeScreen = document.getElementsByClassName('intro')[0];
  if (welcomeScreen) welcomeScreen.style.display = 'none';
  
  document.getElementsByTagName('body')[0].style.cursor = 'none';
  new Game(LEVELS, DOMDisplay);
};

const restartGameButton = document.getElementById('restart-game-button-id');
restartGameButton.onclick = () => {
  new Game(LEVELS, DOMDisplay);
  state.playerXSpeed = 10;
  state.jumpSpeed = 17;
  state.memoryOrbsAbsorbed = 0;
  state.orbsAbsorbed = 0;
  state.playerLost = null;
};