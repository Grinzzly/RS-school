import {state} from "./state";
import {loadResources} from "./imageLoader";

export class DOMDisplay {
  constructor(parent, level) {
    this.wrap = parent.appendChild(this.addElement("div", "game"));
    this.level = level;
    this.wrap.appendChild(this.createPlayerCanvas());
    this.wrap.appendChild(this.drawBackground());
    this.actorLayer = null;
    this.drawFrame();
    loadResources();
  }

  createPlayerCanvas() {
    state.canvasPlayer = document.createElement('canvas');
    state.canvasPlayer.setAttribute('width', 70);
    state.canvasPlayer.setAttribute('height', 90);
    state.canvasPlayer.setAttribute('id', 'canvasPlayer');
    state.contextPlayer = state.canvasPlayer.getContext("2d");

    return state.canvasPlayer;
  }

  drawBackground() {
    let table = this.addElement("table", "background");
    table.style.width = this.level.width * state.scale + "px";
    table.style.height = this.level.height * state.scale + "px";
    this.level.grid.forEach((row) => {
      let rowElement = table.appendChild(this.addElement("tr"));
      rowElement.style.height = state.scale + "px";
      row.forEach((type) => {
        rowElement.appendChild(this.addElement("td", type));
      })
    });
    return table;
  }

  drawActors() {
    let wrap = this.addElement("div");
    this.level.actors.forEach((actor) => {
      const rect = wrap.appendChild(this.addElement("div", "actor " + actor.type));
      rect.style.width = actor.size.x * state.scale + "px";
      rect.style.height = actor.size.y * state.scale + "px";
      rect.style.left = actor.position.x * state.scale + "px";
      rect.style.top = actor.position.y * state.scale + "px";
      if (actor.type === 'player') {
        rect.appendChild(state.canvasPlayer);
      }
      if (actor.type === 'lava') {
        let objVector = actor.speed;
        if (objVector.y === 3) {
          rect.classList.add("moving-down-lava");
        }
        if (objVector.y === 2) {
          rect.classList.add("moving-down-lava");
        }
        if (objVector.y === -2) {
          rect.classList.add("moving-up-lava");
        }
        if (objVector.x === 2) {
          rect.classList.add("moving-right-lava");
        }
        if (objVector.x === -2) {
          rect.classList.add("moving-left-lava");
        }
      }
    });
    return wrap;
  };

  drawFrame() {
    if (this.actorLayer) this.wrap.removeChild(this.actorLayer);
    this.actorLayer = this.wrap.appendChild(this.drawActors());
    this.wrap.className = "game " + (this.level.status || "");
    this.scrollPlayerIntoView();
  };

  scrollPlayerIntoView() {
    let width = this.wrap.clientWidth;
    let height = this.wrap.clientHeight;
    let marginHorizontal = width / 2;
    let marginVertical = (height < 500) ? height / 2 : height / 4;

    let left = this.wrap.scrollLeft, right = left + width;
    let top = this.wrap.scrollTop, bottom = top + height;

    let player = this.level.player;
    let center = player.position.plus(player.size.times(0.5))
      .times(state.scale);

    if (center.x < left + marginHorizontal)
      this.wrap.scrollLeft = center.x - marginHorizontal;
    else if (center.x > right - marginHorizontal)
      this.wrap.scrollLeft = center.x + marginHorizontal - width;
    if (center.y < top + marginVertical)
      this.wrap.scrollTop = center.y - marginVertical;
    else if (center.y > bottom - marginVertical)
      this.wrap.scrollTop = center.y + marginVertical - height;
  }

  addElement(name, className) {
    let elem = document.createElement(name);
    if (className) elem.className = className;

    return elem;
  }

  clear() {
    this.wrap.parentNode.removeChild(this.wrap);
  }
}