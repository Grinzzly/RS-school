import {Vector} from "./vector";

export class Lava {
  act(step, level) {
    let newPosition = this.position.plus(this.speed.times(step));
    if (!level.obstacleAt(newPosition, this.size))
      this.position = newPosition;
    else if (this.repeatposition)
      this.position = this.repeatposition;
    else
      this.speed = this.speed.times(-1);
  }

  constructor(position, interactWith) {
    this.position = position;
    this.size = new Vector(0.8, 0.8);
    if (interactWith === "=")
      this.speed = new Vector(2, 0);
    else if (interactWith === '|')
      this.speed = new Vector(0, 2);
    else if (interactWith === 'v') {
      this.speed = new Vector(0, 3);
      this.repeatposition = position;
    }
  }
}

Lava.prototype.type = "lava";