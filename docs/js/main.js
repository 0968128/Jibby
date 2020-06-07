"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = (function () {
    function Game() {
        var container = document.getElementById("container");
        this.jibby = new Jibby(container);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.jibby.behavior.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString();
        document.getElementsByTagName("happiness")[0].innerHTML = Math.round(this.jibby.happiness).toString();
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
    };
    return Game;
}());
window.addEventListener("load", function () { new Game(); });
var Jibby = (function () {
    function Jibby(parent) {
        var _this = this;
        this._div = document.createElement("jibby");
        parent.appendChild(this.div);
        this._x = 0;
        this._y = 220;
        this._hygiene = this._food = this._happiness = 50;
        this._behavior = new Idle(this);
        this.div.addEventListener("click", function () { return _this._behavior.onPet(); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this._behavior.onEat(); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this._behavior.onWash(); });
    }
    Object.defineProperty(Jibby.prototype, "hygiene", {
        get: function () { return this._hygiene; },
        set: function (value) { this._hygiene = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jibby.prototype, "food", {
        get: function () { return this._food; },
        set: function (value) { this._food = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jibby.prototype, "happiness", {
        get: function () { return this._happiness; },
        set: function (value) { this._happiness = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jibby.prototype, "div", {
        get: function () { return this._div; },
        set: function (value) { this._div = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jibby.prototype, "x", {
        get: function () { return this._x; },
        set: function (value) { this._x = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jibby.prototype, "y", {
        get: function () { return this._y; },
        set: function (value) { this._y = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jibby.prototype, "behavior", {
        get: function () { return this._behavior; },
        set: function (value) { this._behavior = value; },
        enumerable: true,
        configurable: true
    });
    return Jibby;
}());
var Behavior = (function () {
    function Behavior(jibby) {
        this.jibby = jibby;
        this.timer = 120;
    }
    Behavior.prototype.update = function () {
        this.jibby.food -= 0.02;
        this.jibby.happiness -= 0.015;
        this.jibby.hygiene -= 0.01;
        this.timer--;
        if (this.timer <= 0) {
            this.jibby.behavior = new Sleep(this.jibby);
        }
        if (this.timer <= 60) {
            if (this.jibby.food <= 10 && this.jibby.food > 0) {
                this.jibby.behavior = new Hungry(this.jibby);
            }
            else if (this.jibby.happiness <= 10 && this.jibby.happiness > 0) {
                this.jibby.behavior = new Sad(this.jibby);
            }
            else if (this.jibby.hygiene <= 10 && this.jibby.hygiene > 0) {
                this.jibby.behavior = new Dirty(this.jibby);
            }
            else {
                return;
            }
        }
        if (this.jibby.food <= 0 || this.jibby.happiness <= 0 || this.jibby.hygiene <= 0) {
            this.jibby.behavior = new Dead(this.jibby);
        }
    };
    Behavior.prototype.onWash = function () {
        this.jibby.behavior = new Wash(this.jibby);
    };
    Behavior.prototype.onEat = function () {
        this.jibby.behavior = new Eat(this.jibby);
    };
    Behavior.prototype.onPet = function () {
        this.jibby.behavior = new Pet(this.jibby);
    };
    return Behavior;
}());
var Angry = (function (_super) {
    __extends(Angry, _super);
    function Angry(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby = jibby;
        _this.jibby.happiness -= 12;
        _this.jibby.div.style.backgroundImage = "url('images/angry.png')";
        return _this;
    }
    Angry.prototype.update = function () {
        this.timer--;
        if (this.timer <= 30) {
            this.jibby.behavior = new Idle(this.jibby);
        }
    };
    Angry.prototype.onWash = function () {
        return;
    };
    Angry.prototype.onEat = function () {
        return;
    };
    Angry.prototype.onPet = function () {
        return;
    };
    return Angry;
}(Behavior));
var Dead = (function (_super) {
    __extends(Dead, _super);
    function Dead(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby = jibby;
        _this.jibby.div.style.backgroundImage = "url('images/dead.png')";
        return _this;
    }
    Dead.prototype.update = function () {
        console.log("The dead don't need updates. They won't show any sign of life ever again! Or will they?");
    };
    Dead.prototype.onWash = function () {
        console.log("The dead don't need cleaning!");
    };
    Dead.prototype.onEat = function () {
        console.log("The dead don't need food!");
    };
    Dead.prototype.onPet = function () {
        this.jibby.behavior = new Undead(this.jibby);
    };
    return Dead;
}(Behavior));
var Dirty = (function (_super) {
    __extends(Dirty, _super);
    function Dirty(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby = jibby;
        _this.jibby.div.style.backgroundImage = "url('images/dirty.png')";
        return _this;
    }
    Dirty.prototype.update = function () {
        this.jibby.food -= 0.02;
        this.jibby.happiness -= 0.015;
        this.jibby.hygiene -= 0.01;
        this.timer--;
        if (this.timer <= 60) {
            if (this.jibby.food <= 10 && this.jibby.food > 0) {
                this.jibby.behavior = new Hungry(this.jibby);
            }
            else if (this.jibby.happiness <= 10 && this.jibby.happiness > 0) {
                this.jibby.behavior = new Sad(this.jibby);
            }
            else {
                this.jibby.behavior = new Idle(this.jibby);
            }
        }
        if (this.jibby.food <= 0 || this.jibby.happiness <= 0 || this.jibby.hygiene <= 0) {
            this.jibby.behavior = new Dead(this.jibby);
        }
    };
    return Dirty;
}(Behavior));
var Eat = (function (_super) {
    __extends(Eat, _super);
    function Eat(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby = jibby;
        _this.jibby.food += 8;
        _this.jibby.div.style.backgroundImage = "url('images/eating.gif')";
        return _this;
    }
    Eat.prototype.update = function () {
        this.timer--;
        if (this.timer <= 0) {
            this.jibby.behavior = new Idle(this.jibby);
        }
    };
    Eat.prototype.onWash = function () {
        this.jibby.behavior = new Angry(this.jibby);
    };
    Eat.prototype.onEat = function () {
        return;
    };
    Eat.prototype.onPet = function () {
        return;
    };
    return Eat;
}(Behavior));
var Hungry = (function (_super) {
    __extends(Hungry, _super);
    function Hungry(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby = jibby;
        _this.jibby.div.style.backgroundImage = "url('images/hungry.png')";
        return _this;
    }
    Hungry.prototype.update = function () {
        this.jibby.food -= 0.02;
        this.jibby.happiness -= 0.015;
        this.jibby.hygiene -= 0.01;
        this.timer--;
        if (this.timer <= 60) {
            if (this.jibby.happiness <= 10 && this.jibby.happiness > 0) {
                this.jibby.behavior = new Sad(this.jibby);
            }
            else if (this.jibby.hygiene <= 10 && this.jibby.hygiene > 0) {
                this.jibby.behavior = new Dirty(this.jibby);
            }
            else {
                this.jibby.behavior = new Idle(this.jibby);
            }
        }
        if (this.jibby.food <= 0 || this.jibby.happiness <= 0 || this.jibby.hygiene <= 0) {
            this.jibby.behavior = new Dead(this.jibby);
        }
    };
    return Hungry;
}(Behavior));
var Idle = (function (_super) {
    __extends(Idle, _super);
    function Idle(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby = jibby;
        _this.jibby.div.style.backgroundImage = "url('images/idle.png')";
        return _this;
    }
    return Idle;
}(Behavior));
var Pet = (function (_super) {
    __extends(Pet, _super);
    function Pet(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby = jibby;
        _this.jibby.happiness += 6;
        _this.jibby.div.style.backgroundImage = "url('images/happy.png')";
        return _this;
    }
    Pet.prototype.update = function () {
        this.timer--;
        if (this.timer <= 0) {
            this.jibby.behavior = new Idle(this.jibby);
        }
    };
    Pet.prototype.onWash = function () {
        return;
    };
    Pet.prototype.onEat = function () {
        return;
    };
    Pet.prototype.onPet = function () {
        return;
    };
    return Pet;
}(Behavior));
var Sad = (function (_super) {
    __extends(Sad, _super);
    function Sad(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby = jibby;
        _this.jibby.div.style.backgroundImage = "url('images/sad.png')";
        return _this;
    }
    Sad.prototype.update = function () {
        this.jibby.food -= 0.02;
        this.jibby.happiness -= 0.015;
        this.jibby.hygiene -= 0.01;
        this.timer--;
        if (this.timer <= 60) {
            if (this.jibby.hygiene <= 10 && this.jibby.hygiene > 0) {
                this.jibby.behavior = new Dirty(this.jibby);
            }
            else if (this.jibby.food <= 10 && this.jibby.food > 0) {
                this.jibby.behavior = new Hungry(this.jibby);
            }
            else {
                this.jibby.behavior = new Idle(this.jibby);
            }
        }
        if (this.jibby.food <= 0 || this.jibby.happiness <= 0 || this.jibby.hygiene <= 0) {
            this.jibby.behavior = new Dead(this.jibby);
        }
    };
    return Sad;
}(Behavior));
var Sleep = (function (_super) {
    __extends(Sleep, _super);
    function Sleep(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby = jibby;
        _this.jibby.div.style.backgroundImage = "url('images/sleeping.png')";
        return _this;
    }
    Sleep.prototype.update = function () {
        this.jibby.food -= 0.01;
        this.jibby.happiness -= 0.0075;
        this.jibby.hygiene -= 0.005;
        this.timer--;
        if (this.timer <= 0) {
            this.jibby.behavior = new Idle(this.jibby);
        }
    };
    Sleep.prototype.onWash = function () {
        this.jibby.behavior = new Angry(this.jibby);
    };
    Sleep.prototype.onEat = function () {
        return;
    };
    Sleep.prototype.onPet = function () {
        return;
    };
    return Sleep;
}(Behavior));
var Undead = (function (_super) {
    __extends(Undead, _super);
    function Undead(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby = jibby;
        _this.jibby.div.style.backgroundImage = "url('images/zombie.png')";
        return _this;
    }
    Undead.prototype.update = function () {
        console.log("Zombies don't need updates. They're timeless!");
    };
    Undead.prototype.onWash = function () {
        console.log("Zombies don't need cleaning!");
    };
    Undead.prototype.onEat = function () {
        console.log("Zombies don't need food!");
    };
    Undead.prototype.onPet = function () {
        console.log("Zombies don't need petting!");
    };
    return Undead;
}(Behavior));
var Wash = (function (_super) {
    __extends(Wash, _super);
    function Wash(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby = jibby;
        _this.jibby.hygiene += 6;
        _this.jibby.happiness += 2;
        _this.jibby.div.style.backgroundImage = "url('images/washing.png')";
        return _this;
    }
    Wash.prototype.update = function () {
        this.timer--;
        if (this.timer <= 0) {
            this.jibby.behavior = new Idle(this.jibby);
        }
    };
    Wash.prototype.onWash = function () {
        return;
    };
    Wash.prototype.onEat = function () {
        return;
    };
    Wash.prototype.onPet = function () {
        this.jibby.behavior = new Angry(this.jibby);
    };
    return Wash;
}(Behavior));
//# sourceMappingURL=main.js.map