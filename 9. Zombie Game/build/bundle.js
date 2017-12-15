/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brain__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lava__ = __webpack_require__(7);




const state = {
  maxStep: 0.05,
  wobbleSpeed: 8,
  wobbleDist: 0.07,
  playerXSpeed: 10,
  gravity: 30,
  jumpSpeed: 17,
  scale: 40,
  fps: 30,
  x: 34,
  y: 130,
  meltStep: 0,
  breathInc: 0.1,
  breathMax: 1,
  maxEyeHeight: 10,
  timeBtwBlinks: 4000,
  blinkUpdateTime: 200,
  intervalBlink: null,
  intervalBreath: null,
  intervalMelt: null,
  turnRight: 1,
  jumpingStatus: 0,
  breathDir: 1,
  breathAmt: 0,
  curEyeHeight: 10,
  eyeOpenTime: 0,
  totalResources: 14,
  orbsAbsorbed: 0,
  memoryOrbsAbsorbed: 0,
  numResourcesLoaded: 0,
  canvasPlayer: null,
  contextPlayer: null,
  playerLost: null,
  images: {},
  actorChars: {
    "@": __WEBPACK_IMPORTED_MODULE_0__player__["a" /* Player */],
    "o": __WEBPACK_IMPORTED_MODULE_1__brain__["a" /* Brain */],
    "=": __WEBPACK_IMPORTED_MODULE_2__lava__["a" /* Lava */],
    "|": __WEBPACK_IMPORTED_MODULE_2__lava__["a" /* Lava */],
    "v": __WEBPACK_IMPORTED_MODULE_2__lava__["a" /* Lava */]
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = state;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  times(scale) {
    return new Vector(this.x * scale, this.y * scale);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_levels__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_domDisplay__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_game__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_state__ = __webpack_require__(0);





const startButton = document.getElementsByClassName('start-button')[0];
startButton.onclick = () => {
  const welcomeScreen = document.getElementsByClassName('intro')[0];
  if (welcomeScreen) welcomeScreen.style.display = 'none';

  document.getElementsByTagName('body')[0].style.cursor = 'none';
  new __WEBPACK_IMPORTED_MODULE_2__components_game__["a" /* Game */](__WEBPACK_IMPORTED_MODULE_0__components_levels__["a" /* LEVELS */], __WEBPACK_IMPORTED_MODULE_1__components_domDisplay__["a" /* DOMDisplay */]);
};

const restartGameButton = document.getElementById('restart-game-button-id');
restartGameButton.onclick = () => {
  new __WEBPACK_IMPORTED_MODULE_2__components_game__["a" /* Game */](__WEBPACK_IMPORTED_MODULE_0__components_levels__["a" /* LEVELS */], __WEBPACK_IMPORTED_MODULE_1__components_domDisplay__["a" /* DOMDisplay */]);
  __WEBPACK_IMPORTED_MODULE_3__components_state__["a" /* state */].playerXSpeed = 10;
  __WEBPACK_IMPORTED_MODULE_3__components_state__["a" /* state */].jumpSpeed = 17;
  __WEBPACK_IMPORTED_MODULE_3__components_state__["a" /* state */].memoryOrbsAbsorbed = 0;
  __WEBPACK_IMPORTED_MODULE_3__components_state__["a" /* state */].orbsAbsorbed = 0;
  __WEBPACK_IMPORTED_MODULE_3__components_state__["a" /* state */].playerLost = null;
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LEVELS; });
const LEVELS = [["                                                                                ", "                                                                                ", "                                                                                ", "                                                o                               ", "                                                                                ", "                                    o o                           x!!!!!!!!!!x  ", "                                                                  x!xxxxxxxxxx  ", "                                                   xx      xx    xx!xx       x  ", "                                             xx                  x!!!x       x  ", "                                   xxxxx  o o                    xx!xx       x  ", "                                                                  xvx        x  ", "  xx                                                                         x  ", "  x                                                                      o   x  ", "  x                     o                xxxxx                               x  ", "  x                                                                          x  ", "  x          xxxx       o                                                    x  ", "  x  @       x  x                                                xxxxx       x  ", "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ", "                              x   x                  x     x                    ", "                              x!!!x                  x!!!!!x                    ", "                              x!!!x                  x!!!!!x                    ", "                              xxxxx                  xxxxxxx                    ", "                                                                                ", "                                                                                "], ["                                                                                                             x!x  ", "                                      x!!x                        xxxxxxx                                    x!x  ", "                                      x!!x                     xxxx     xxxx                                 x!x  ", "                                      x!!xxxxxxxxxx           xx           xx                o   o   o   o   x!x  ", "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ", "                                       xxxxxxxxxx!!x         x                                               x!x  ", "                                                xx!x         x     o   o                                    xx!x  ", "                                                 x!x         x                          xxxxxxxxxxxxxxxxxxxxx!!x  ", "                                                 xvx         x     x   x                x!!!!!!!!!!!!!!!!!!!!!xx  ", "                                                             xx  |   |   |  xx         xx!xxxxxxxxxxxxxxxxxxxxx   ", "                                                              xx!!!!!!!!!!!xx            v                        ", "                                                               xxxx!!!!!xxxx                                      ", "                                               x     x            xxxxxxx        xxx         xxx                  ", "                                               x     x                           x x         x x                  ", "                                               x     x                             x         x                    ", "                                               x     x                        o    xx        x                    ", "                                               xx    x       o                     x         x                    ", "                                               x     x                   x         x         x                    ", "               xxxxxxx        xxx   xxx        x     x                   x         x         x                    ", "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ", "             xx       xx        x o x          x    xx               x   x   x               x                    ", "     @       x         x        x   x          x     x              ox   xxxxx               x                    ", "    xxx      x         x        x   x          x     x             xxx                       x                    ", "    x x      x         x       xx o xx         x     x               x     o     xxxxxx      x                    ", "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!!!!!!x           x x     o   x                    ", "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xxxxxxxxx     =     x xx       xx                    ", "!!!!x x!!!!!!x         x!!!!!x                       xx!!!!!!xx      xxxxxxxxxxxxx  xx     xx                     ", "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx                       xxxxxxx                      ", "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx                                                     ", "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx                                                      ", "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx                                                       ", "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx                                                        "], ["                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                        o                                                                     ", "                                                                                                              ", "                                        x                                                                     ", "                                        x                                                                     ", "                                        x                                                                     ", "                                        x                                                                     ", "                                       xxx                                 xxx                                ", "                                       x x                 !!!    =   !!!                                     ", "                                       x x                 !x! o oo o !x!                                     ", "                                     xxx xxx                x          x                                      ", "                                      x   x                 x          x       xxx                            ", "                                      x   x                 x          x      x!!!x                           ", "                                      x   x                 xxxxxxxxxxxx       xxx                            ", "                                     xx   xx          x      x                                                ", "                                      x   x      x    xxxxxxxx              x  x                              ", "                                      x   xxxxxxxx    x                    x!!!!x                             ", "                                      x   x           x                     xxxx                              ", "                                     xx   xxx         x                                                       ", "                                      x   x= = = =    x            xxx                   o                    ", "                                      x   x           x           x!!!x                                       ", "                                      x   x    = = = =x     o      xxx       xxx                              ", "                              o   o  xx   xxx         x                     x!!!x                             ", "                                      x   x  o        x     x                xxv         xx                   ", "                                      x   x        o  x              x                  x!!x                  ", "                             xxx xx   xxxxx           x!!!!!!!!!!!!!!x                   vx              xxx  ", "                             x xxx   xxxxxx           x!!!!!!!!!!!!!!x                                   x x  ", "                             x            x    xxxxxxxxxxxxxxxxxxxxxxx                                     x  ", "                             xx           xx                                         xxx                   x  ", "  xxx                         x           x       |                                 x!!!x                  x  ", "  x x                         x     x     x                    o |                   xxx                   x  ", "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ", "  x                           x    xxx    x                              x   x                             x  ", "  x                           xx          x o                            x x x                             x  ", "  x                                       x        xxxx|     xxxx      xxx xxx                             x  ", "  x                xxx             o o    x                              x         xxx                     x  ", "  x               xxxxx                   x     o         o         o   xxx       x!!!x          x         x  ", "  x               oxxxo       xx   xxx    x                 |           x x        xxx          xxx        x  ", "  x                xxx        xxxxxxxxxxxxx  x    x    x    x    x     xx xx                    xxx        x  ", "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ", "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ", "                                                                                                              ", "                                                                                                              "], ["                                                                                                  x           ", "                                                                                                  xxxxx       ", "                                                                                                      x       ", "                                                                                                  xxxxx       ", "                                                                      o       o       o           x           ", "                          o                                                                       xxxxx       ", "                                                                                                      x       ", "                   xxx                                            xxxxxx xxxxxx  xxxxx   x   x o x xxxx       ", "       !  o  !                                                    x    x x       x      x x  xx xx x          ", "       x     x                                                    x    x x       x     x   x x x x x          ", "       x= o  x            x                                o  xxx xxxxxx xxxxxx  x  xx xxxxx x x x xxxx       ", "       x     x                                                    x  x        x  x   x x   x x   x x          ", "       !  o  !            o                                       x   x       x  x   x x   x x   x x          ", "       |                                                          x    x xxxxxx  xxxxx x   x x   x xxxx       ", "          o              xxx                              xx                                                  ", "                                                                                   o                          ", "                          o                                                                                   ", "                                                      xx                                                      ", "  x                xxx    |    xxx                                                                            ", "  x                                                                                                           ", "  x                       o                                                     x      x                      ", "  x                                                       xx     xx                                           ", "  x         xxxx         xxx         xxx                                 x                  x                 ", "  x     x   x o                                                                                               ", "  x!!!!!xx  x                                                    ||                                           ", "  xxxxxxx   x                                                                                                 ", "  x         xx  xxxxxxxxx o xxxxxxxxx o xx                                                x                   ", "  x          x  x       x   x       x   x                 ||                  x     x                         ", "  x  @       xxxx   o   xxxxx   o   xxxxx                                                                     ", "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ", "        x                                     x   x                     xxx                                   ", "        x=                   =               =x   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "                                                                                                              "]];



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageLoader__ = __webpack_require__(8);



class DOMDisplay {
  constructor(parent, level) {
    this.wrap = parent.appendChild(this.addElement("div", "game"));
    this.level = level;
    this.wrap.appendChild(this.createPlayerCanvas());
    this.wrap.appendChild(this.drawBackground());
    this.actorLayer = null;
    this.drawFrame();
    Object(__WEBPACK_IMPORTED_MODULE_1__imageLoader__["a" /* loadResources */])();
  }

  createPlayerCanvas() {
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer = document.createElement('canvas');
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.setAttribute('width', 70);
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.setAttribute('height', 90);
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.setAttribute('id', 'canvasPlayer');
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.getContext("2d");

    return __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer;
  }

  drawBackground() {
    let table = this.addElement("table", "background");
    table.style.width = this.level.width * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale + "px";
    table.style.height = this.level.height * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale + "px";
    this.level.grid.forEach(row => {
      let rowElement = table.appendChild(this.addElement("tr"));
      rowElement.style.height = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale + "px";
      row.forEach(type => {
        rowElement.appendChild(this.addElement("td", type));
      });
    });
    return table;
  }

  drawActors() {
    let wrap = this.addElement("div");
    this.level.actors.forEach(actor => {
      const rect = wrap.appendChild(this.addElement("div", "actor " + actor.type));
      rect.style.width = actor.size.x * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale + "px";
      rect.style.height = actor.size.y * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale + "px";
      rect.style.left = actor.position.x * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale + "px";
      rect.style.top = actor.position.y * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale + "px";
      if (actor.type === 'player') {
        rect.appendChild(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer);
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
  }

  drawFrame() {
    if (this.actorLayer) this.wrap.removeChild(this.actorLayer);
    this.actorLayer = this.wrap.appendChild(this.drawActors());
    this.wrap.className = "game " + (this.level.status || "");
    this.scrollPlayerIntoView();
  }

  scrollPlayerIntoView() {
    let width = this.wrap.clientWidth;
    let height = this.wrap.clientHeight;
    let marginHorizontal = width / 2;
    let marginVertical = height < 500 ? height / 2 : height / 4;

    let left = this.wrap.scrollLeft,
        right = left + width;
    let top = this.wrap.scrollTop,
        bottom = top + height;

    let player = this.level.player;
    let center = player.position.plus(player.size.times(0.5)).times(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale);

    if (center.x < left + marginHorizontal) this.wrap.scrollLeft = center.x - marginHorizontal;else if (center.x > right - marginHorizontal) this.wrap.scrollLeft = center.x + marginHorizontal - width;
    if (center.y < top + marginVertical) this.wrap.scrollTop = center.y - marginVertical;else if (center.y > bottom - marginVertical) this.wrap.scrollTop = center.y + marginVertical - height;
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
/* harmony export (immutable) */ __webpack_exports__["a"] = DOMDisplay;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector__ = __webpack_require__(1);



class Player {
  constructor(position) {
    this.position = position.plus(new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](0, -1));
    this.size = new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](1.1, 2);
    this.speed = new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](0, 0);
  }

  moveX(step, level, keys) {
    this.speed.x = 0;
    if (keys.left) {
      this.speed.x -= __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerXSpeed;
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].turnRight = 0;
    }
    if (keys.right) {
      this.speed.x += __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerXSpeed;
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].turnRight = 1;
    }

    let motion = new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](this.speed.x * step, 0);
    let newPosition = this.position.plus(motion);
    let obstacle = level.obstacleAt(newPosition, this.size);
    if (obstacle) level.playerTouched(obstacle);else this.position = newPosition;
  }

  moveY(step, level, keys) {
    this.speed.y += step * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].gravity;
    let motion = new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](0, this.speed.y * step);
    let newPosition = this.position.plus(motion);
    let obstacle = level.obstacleAt(newPosition, this.size);
    if (obstacle) {
      level.playerTouched(obstacle);
      if (keys.up && this.speed.y > 0) {
        this.speed.y = -__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpSpeed;
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpingStatus = 1;
      } else {
        this.speed.y = 0;
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpingStatus = 0;
      }
    } else {
      this.position = newPosition;
    }
  }

  act(step, level, keys) {
    this.moveX(step, level, keys);
    this.moveY(step, level, keys);

    let otherActor = level.actorAt(this);
    if (otherActor) level.playerTouched(otherActor.type, otherActor);

    // Losing animation
    if (level.status === "lost") {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerLost = 1;
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerXSpeed = 0;
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpSpeed = 0;
      this.position.y += 0.3 * step;
      this.size.y -= 0.3 * step;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;


Player.prototype.type = "player";

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector__ = __webpack_require__(1);



class Brain {
  constructor(position) {
    this.baseposition = this.position = position;
    this.size = new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](1, 1);
    this.wobble = Math.random() * Math.PI * 2;
  }

  act(step) {
    this.wobble += step * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].wobbleSpeed;
    let wobblePosition = Math.sin(this.wobble) * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].wobbleDist;
    this.position = this.baseposition.plus(new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](0, wobblePosition));
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Brain;


Brain.prototype.type = "brain";

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector__ = __webpack_require__(1);


class Lava {
  act(step, level) {
    let newPosition = this.position.plus(this.speed.times(step));
    if (!level.obstacleAt(newPosition, this.size)) this.position = newPosition;else if (this.repeatposition) this.position = this.repeatposition;else this.speed = this.speed.times(-1);
  }

  constructor(position, interactWith) {
    this.position = position;
    this.size = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](0.8, 0.8);
    if (interactWith === "=") this.speed = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](2, 0);else if (interactWith === '|') this.speed = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](0, 2);else if (interactWith === 'v') {
      this.speed = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](0, 3);
      this.repeatposition = position;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Lava;


Lava.prototype.type = "lava";

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character__ = __webpack_require__(9);



const loadResources = () => {
  const Zombie = new __WEBPACK_IMPORTED_MODULE_1__character__["a" /* Character */]();

  const loadImage = name => {

    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images[name] = new Image();
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images[name].onload = () => {
      resourceLoaded();
    };
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images[name].src = "images/" + name + ".png";
  };

  const resourceLoaded = () => {
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].numResourcesLoaded += 1;
    if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].numResourcesLoaded === __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].totalResources) {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].numResourcesLoaded = 0;
      setInterval(Zombie.redrawPlayer, 1000 / __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].fps);
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
/* harmony export (immutable) */ __webpack_exports__["a"] = loadResources;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);


class Character {
  constructor() {
    if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalBlink || __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalBreath || __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalMelt) {
      clearInterval(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalBlink);
      clearInterval(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalBreath);
      clearInterval(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalMelt);
    }
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalBlink = setInterval(this.updateBlink, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].blinkUpdateTime);
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalBreath = setInterval(this.updateBreath, 1000 / __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].fps);
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalMelt = setInterval(this.updateMelt, 1000 / __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].fps);
  }

  redrawPlayer() {
    const playerTurnLeft = () => {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.width, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.height);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["torsoTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 18, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 88);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["headTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 32, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 128 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
      if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpingStatus === 1) {
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["legsTurnLeftJumping"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 35, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 67);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["leftArmTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 35, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["rightArmTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 12, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
      } else {
        drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 9, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 49, 65 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt * 3, 6, "black"); // Shadow
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["legsTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 65);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["leftArmTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 32, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["rightArmTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 15, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
      }

      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 22, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 98 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt, 5, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight, "black"); // Right Eye
      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 14, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 98 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt, 5, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight, "black"); // Left Eye
    };

    const playerTurnRight = () => {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.width, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.height);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["torso"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 88);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["head"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 32, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 128 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
      if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpingStatus === 1) {
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["legsJumping"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 33, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 67);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["leftArm"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 8, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["rightArm"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 34, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
      } else {
        drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 7, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 49, 65 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt * 3, 6, "black"); // Shadow
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["legs"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 65);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["leftArm"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 10, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["rightArm"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
      }

      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x + 4, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 98 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt, 5, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight, "black"); // Left Eye
      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 4, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 98 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt, 5, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight, "black"); // Right Eye
    };

    const playerTurnLeftLost = () => {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.width, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.height);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["torsoTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 18, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 88 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep);

      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 9, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 49 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 65 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 6, "red"); // Blood
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["legsTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 65 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["leftArmTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 32, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 84 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["rightArmTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 15, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 84 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["characterBrainTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 7 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 4, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 116 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 4);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["headTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 32, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 128 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep);

      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 22, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 98 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 5, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight, "red"); // Right Eye
      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 14, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 98 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 5 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2, "red"); // Left Eye
    };

    const playerTurnRightLost = () => {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.width, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.height);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["torso"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 88 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep);

      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 7, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 49 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 65 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 6, "red"); // Blood
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["legs"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 65 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["leftArm"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 10, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 84 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["rightArm"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 84 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["characterBrain"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 27 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 4, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 116 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 4);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["head"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 32, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 128 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep);

      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x + 4, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 98 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 5, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight, "red"); // Left Eye
      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].x - 4, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].y - 98 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 5 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2, "red"); // Right Eye
    };

    if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].turnRight !== 1) {
      if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerLost === 1) {
        playerTurnLeftLost();
      } else playerTurnLeft();
    } else {
      if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerLost === 1) {
        playerTurnRightLost();
      } else playerTurnRight();
    }
  }

  updateMelt() {
    if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerLost === 1 && __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep < 8) {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep += 0.3;
    } else if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerLost !== 1) {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep = 0;
    }
  }

  updateBreath() {
    if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathDir === 1) {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt -= __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathInc;
      if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt < -__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathMax) {
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathDir = -1;
      }
    } else {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt += __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathInc;
      if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt > __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathMax) {
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathDir = 1;
      }
    }
  }

  updateBlink() {
    const blink = () => {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight -= 1;
      if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight <= 0) {
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].eyeOpenTime = 0;
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].maxEyeHeight;
      } else {
        setTimeout(blink, 10);
      }
    };

    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].eyeOpenTime += __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].blinkUpdateTime;
    if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].eyeOpenTime >= __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].timeBtwBlinks) {
      blink();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Character;


const drawEllipse = (centerX, centerY, width, height, color) => {
  __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.beginPath();
  __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.moveTo(centerX, centerY - height / 2);
  __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.bezierCurveTo(centerX + width / 2, centerY - height / 2, centerX + width / 2, centerY + height / 2, centerX, centerY + height / 2);

  __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.bezierCurveTo(centerX - width / 2, centerY + height / 2, centerX - width / 2, centerY - height / 2, centerX, centerY - height / 2);

  __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.fillStyle = color;
  __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.fill();
  __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.closePath();
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__level__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popups__ = __webpack_require__(12);




class Game {
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

    const handler = event => {
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
    this.implementAnimation(step => {
      level.animate(step, this.arrows);
      display.drawFrame(step);
      if (level.isFinished()) {
        display.clear();
        document.body.className = document.body.className ? '' : 'fade';
        setTimeout(() => {
          document.body.className = '';
        }, 500);
        if (andThen) andThen(level.status);
        return false;
      }
    });
  }

  implementAnimation(frameFunc) {
    let lastTime = null;
    const frame = time => {
      let stop = false;
      if (lastTime != null) {
        let timeStep = Math.min(time - lastTime, 100) / 1000;
        stop = frameFunc(timeStep) === false;
      }
      lastTime = time;
      if (!stop) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }

  renderLevel(n) {
    const currentLevel = document.getElementById('level');
    if (currentLevel) {
      currentLevel.style.display = "inline";
      currentLevel.innerHTML = 'Level ' + (n + 1);
    }
    this.initiateLevel(new __WEBPACK_IMPORTED_MODULE_1__level__["a" /* Level */](this.plans[n]), this.Display, status => {
      if (status === 'lost') {
        new __WEBPACK_IMPORTED_MODULE_2__popups__["a" /* PopUp */]().showLosePopup();

        let triggerRenderLevel = 0;

        const launchNewLevel = () => {
          if (triggerRenderLevel === 1) {
            this.renderLevel(n);
            triggerRenderLevel = null;
            __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerLost = null;
            __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerXSpeed = 10;
            __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpSpeed = 17;
          } else if (triggerRenderLevel === 0) {
            let buttonRerenderLevel = document.getElementById('restart-level-button-id');
            buttonRerenderLevel.addEventListener('click', launchNewLevel);
            triggerRenderLevel = 1;
          }
        };

        setTimeout(launchNewLevel, 0);

        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].orbsAbsorbed = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].memoryOrbsAbsorbed;
      } else if (n < this.plans.length - 1) {
        const renderDelay = () => {
          this.renderLevel(n + 1);
          __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].memoryOrbsAbsorbed = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].orbsAbsorbed;
          __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerLost = null;
        };

        setTimeout(renderDelay, 500);
      } else {
        new __WEBPACK_IMPORTED_MODULE_2__popups__["a" /* PopUp */]().showWinPopup();
      }
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector__ = __webpack_require__(1);



class Level {
  constructor(plan) {
    this.width = plan[0].length;
    this.height = plan.length;
    this.grid = [];
    this.actors = [];

    for (let y = 0; y < this.height; y++) {
      let line = plan[y],
          gridLine = [];
      for (let x = 0; x < this.width; x++) {
        let ch = line[x],
            fieldType = null;
        let Actor = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].actorChars[ch];
        if (Actor) this.actors.push(new Actor(new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](x, y), ch));else {
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
        gridLine.push(fieldType);
      }
      this.grid.push(gridLine);
    }
    this.player = this.actors.filter(actor => {
      return actor.type === "player";
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

    if (xStart < 0 || xEnd > this.width || yStart < 0) return "wall";
    if (yEnd > this.height) return "lava";
    for (let y = yStart; y < yEnd; y++) {
      for (let x = xStart; x < xEnd; x++) {
        let fieldType = this.grid[y][x];
        if (fieldType) return fieldType;
      }
    }
  }

  actorAt(actor) {
    for (let i = 0; i < this.actors.length; i++) {
      let other = this.actors[i];
      if (other !== actor && actor.position.x + actor.size.x > other.position.x && actor.position.x < other.position.x + other.size.x && actor.position.y + actor.size.y > other.position.y && actor.position.y < other.position.y + other.size.y) return other;
    }
  }

  animate(step, keys) {
    if (this.status != null) this.finishDelay -= step;

    while (step > 0) {
      let thisStep = Math.min(step, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].maxStep);
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
      currentBrainsEaten.innerHTML = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].orbsAbsorbed;
    }
    if (type === "lava" && !this.status) {
      console.debug('Player managed to collect ' + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].orbsAbsorbed + ' orbs');
      this.status = "lost";
      this.finishDelay = 1;
    } else if (type === "brain") {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].orbsAbsorbed++;
      this.actors = this.actors.filter(other => {
        return other !== actor;
      });
      if (!this.actors.some(actor => {
        return actor.type === "brain";
      })) {
        this.status = "won";
        this.finishDelay = 1;
        this.finishLevel = 1;
      }
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Level;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);


class PopUp {
  showLosePopup() {
    const showing = () => {
      document.getElementById('lose-popup-container-id').classList.add("show-popup");
    };
    setTimeout(showing, 500);

    document.getElementsByTagName('body')[0].style.cursor = 'auto';
    document.getElementById('lose-popup-score').innerHTML = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].orbsAbsorbed;

    const buttonRestartLevel = document.getElementById('restart-level-button-id');
    buttonRestartLevel.addEventListener('click', this.hideLosePopUp);
  }

  showWinPopup() {
    document.getElementById('win-popup-container-id').classList.add("show-popup");

    document.getElementsByTagName('body')[0].style.cursor = 'auto';
    document.getElementById('win-popup-score').innerHTML = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].orbsAbsorbed;

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
/* harmony export (immutable) */ __webpack_exports__["a"] = PopUp;


/***/ })
/******/ ]);