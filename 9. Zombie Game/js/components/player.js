import {state} from "./state";
import {Vector} from "./vector";

export class Player {
  constructor(position) {
    this.position = position.plus(new Vector(0, -1));
    this.size = new Vector(1.1, 2);
    this.speed = new Vector(0, 0);
  }

  moveX(step, level, keys) {
    this.speed.x = 0;
    if (keys.left) {
      this.speed.x -= state.playerXSpeed;
      state.turnRight = 0;
    }
    if (keys.right) {
      this.speed.x += state.playerXSpeed;
      state.turnRight = 1;
    }

    let motion = new Vector(this.speed.x * step, 0);
    let newPosition = this.position.plus(motion);
    let obstacle = level.obstacleAt(newPosition, this.size);
    if (obstacle)
      level.playerTouched(obstacle);
    else
      this.position = newPosition;
  }

  moveY(step, level, keys) {
    this.speed.y += step * state.gravity;
    let motion = new Vector(0, this.speed.y * step);
    let newPosition = this.position.plus(motion);
    let obstacle = level.obstacleAt(newPosition, this.size);
    if (obstacle) {
      level.playerTouched(obstacle);
      if (keys.up && this.speed.y > 0) {
        this.speed.y = -state.jumpSpeed;
        state.jumpingStatus = 1;
      }
      else if (keys.up) {
        this.speed.y = 0;
        state.jumpingStatus = 1;
      }
      else {
        this.speed.y = 0;
        state.jumpingStatus = 0;
      }
    } 
    else {
      this.position = newPosition;
    }
  }

  act(step, level, keys) {
    this.moveX(step, level, keys);
    this.moveY(step, level, keys);

    let otherActor = level.actorAt(this);
    if (otherActor)
      level.playerTouched(otherActor.type, otherActor);

    // Losing animation
    if (level.status === "lost") {
      state.playerLost = 1;
      state.playerXSpeed = 0;
      state.jumpSpeed = 0;
      this.position.y += 0.3 * step;
      this.size.y -= 0.3 * step;
    }
  }
}

Player.prototype.type = "player";