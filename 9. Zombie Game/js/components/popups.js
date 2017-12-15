import {state} from "./state";

export class PopUp {
  showLosePopUp() {
    const showingLosePopUp = () => {
      document.getElementById('lose-popup-container-id').classList.add("show-popup");
    };
    setTimeout(showingLosePopUp, 500);

    document.getElementsByTagName('body')[0].style.cursor = 'auto';
    document.getElementById('lose-popup-score').innerHTML = state.orbsAbsorbed;

    const buttonRestartLevel = document.getElementById('restart-level-button-id');
    buttonRestartLevel.addEventListener('click', this.hideLosePopUp);
  }

  showWinPopUp() {
    const showingWinPopUp = () => {
      document.getElementById('win-popup-container-id').classList.add("show-popup");
    }
    setTimeout(showingWinPopUp, 500);

    document.getElementsByTagName('body')[0].style.cursor = 'auto';
    document.getElementById('win-popup-score').innerHTML = state.orbsAbsorbed;

    const buttonRestartGame = document.getElementById('restart-game-button-id');
    buttonRestartGame.addEventListener('click', this.hideWinPopUp);
  }

  hideLosePopUp() {
    document.getElementById('lose-popup-container-id').classList.remove("show-popup");
    document.getElementsByTagName('body')[0].style.cursor = 'none';
  }

  hideWinPopUp() {
    document.getElementById('win-popup-container-id').classList.remove("show-popup");
    document.getElementsByTagName('body')[0].style.cursor = 'none';
  }
}