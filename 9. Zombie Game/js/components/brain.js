import {state} from "./state";
import {Vector} from "./vector";

export class Brain {
  constructor(position) {
    this.baseposition = this.position = position;
    this.size = new Vector(1, 1);
    this.wobble = Math.random() * Math.PI * 2;
  }

  act(step) {
    this.wobble += step * state.wobbleSpeed;
    let wobblePosition = Math.sin(this.wobble) * state.wobbleDist;
    this.position = this.baseposition.plus(new Vector(0, wobblePosition));
  }
}

Brain.prototype.type = "brain";