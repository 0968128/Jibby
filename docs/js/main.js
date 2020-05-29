"use strict";
var Jibby = (function () {
    function Jibby(parent, behavior) {
        var _this = this;
        this._div = document.createElement("jibby");
        parent.appendChild(this.div);
        this._x = 0;
        this._y = 220;
        this._hygiene = this._food = this._happiness = 50;
        this._behavior = behavior;
        this.div.addEventListener("click", function () { return _this.setBehavior(new Pet(_this)); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.setBehavior(new Eat(_this)); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.setBehavior(new Wash(_this)); });
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
    Jibby.prototype.update = function () {
        if (this._food <= 0 || this._happiness <= 0 || this._hygiene <= 0) {
            this.setBehavior(new Dead(this));
        }
        else {
            if (this._food < 10) {
                this.setBehavior(new Hungry(this));
            }
            if (this._happiness < 10) {
                this.setBehavior(new Sad(this));
            }
            if (this._hygiene < 10) {
                this.setBehavior(new Dirty(this));
            }
        }
        this._behavior.performBehavior(this);
    };
    Jibby.prototype.setBehavior = function (behavior) {
        this._behavior = behavior;
    };
    return Jibby;
}());
var Game = (function () {
    function Game() {
        var container = document.getElementById("container");
        this.jibby = new Jibby(container, new Idle());
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.jibby.update();
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
var Angry = (function () {
    function Angry(jibby) {
        this.jibby = jibby;
        this.jibby.food -= 0.04;
        this.jibby.happiness -= 0.075;
        this.jibby.hygiene -= 0.01;
    }
    Angry.prototype.performBehavior = function () {
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
    };
    Angry.prototype.getNextBehvior = function () {
        return new Undead(this.jibby);
    };
    Angry.prototype.onWash = function () {
        throw new Error("Method not implemented.");
    };
    Angry.prototype.onEat = function () {
        throw new Error("Method not implemented.");
    };
    Angry.prototype.onPet = function () {
        throw new Error("Method not implemented.");
    };
    return Angry;
}());
var Dead = (function () {
    function Dead(jibby) {
        this.jibby = jibby;
    }
    Dead.prototype.performBehavior = function () {
        var _this = this;
        console.log("Ik ben dood.");
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
        this.jibby.div.addEventListener("click", function () { return _this.jibby.setBehavior(new Undead(_this.jibby)); });
    };
    Dead.prototype.getNextBehvior = function () {
        throw new Error("Method not implemented.");
    };
    Dead.prototype.onWash = function () {
        throw new Error("Method not implemented.");
    };
    Dead.prototype.onEat = function () {
        throw new Error("Method not implemented.");
    };
    Dead.prototype.onPet = function () {
        throw new Error("Method not implemented.");
    };
    return Dead;
}());
var Dirty = (function () {
    function Dirty(jibby) {
        this.jibby = jibby;
    }
    Dirty.prototype.performBehavior = function () {
        console.log("Ik ben vies.");
        this.jibby.div.style.backgroundImage = "url('images/dirty.png')";
        this.jibby.food -= 0.02;
        this.jibby.happiness -= 0.015;
        this.jibby.hygiene -= 0.01;
    };
    Dirty.prototype.getNextBehvior = function () {
        throw new Error("Method not implemented.");
    };
    Dirty.prototype.onWash = function () {
        throw new Error("Method not implemented.");
    };
    Dirty.prototype.onEat = function () {
        throw new Error("Method not implemented.");
    };
    Dirty.prototype.onPet = function () {
        throw new Error("Method not implemented.");
    };
    return Dirty;
}());
var Eat = (function () {
    function Eat(jibby) {
        this.jibby = jibby;
    }
    Eat.prototype.performBehavior = function () {
        this.jibby.food += 10;
        this.jibby.div.style.backgroundImage = "url('images/washing.png')";
        this.jibby.behavior = new Idle();
    };
    Eat.prototype.getNextBehvior = function () {
        return new Idle();
    };
    Eat.prototype.onWash = function () {
        throw new Error("Method not implemented.");
    };
    Eat.prototype.onEat = function () {
        throw new Error("Method not implemented.");
    };
    Eat.prototype.onPet = function () {
        throw new Error("Method not implemented.");
    };
    return Eat;
}());
var Hungry = (function () {
    function Hungry(jibby) {
        this.jibby = jibby;
    }
    Hungry.prototype.performBehavior = function () {
        console.log("Ik ben hongerig.");
        this.jibby.div.style.backgroundImage = "url('images/hungry.png')";
        this.jibby.food -= 0.02;
        this.jibby.happiness -= 0.015;
        this.jibby.hygiene -= 0.01;
    };
    Hungry.prototype.getNextBehvior = function () {
        throw new Error("Method not implemented.");
    };
    Hungry.prototype.onWash = function () {
        throw new Error("Method not implemented.");
    };
    Hungry.prototype.onEat = function () {
        throw new Error("Method not implemented.");
    };
    Hungry.prototype.onPet = function () {
        throw new Error("Method not implemented.");
    };
    return Hungry;
}());
var Idle = (function () {
    function Idle() {
    }
    Idle.prototype.performBehavior = function (jibby) {
        console.log("Ik ben inactief.");
        jibby.div.style.backgroundImage = "url('images/idle.png')";
        jibby.food -= 0.02;
        jibby.happiness -= 0.015;
        jibby.hygiene -= 0.01;
    };
    Idle.prototype.getNextBehvior = function () {
        throw new Error("Method not implemented.");
    };
    Idle.prototype.onWash = function () {
        throw new Error("Method not implemented.");
    };
    Idle.prototype.onEat = function () {
        throw new Error("Method not implemented.");
    };
    Idle.prototype.onPet = function () {
        throw new Error("Method not implemented.");
    };
    return Idle;
}());
var Pet = (function () {
    function Pet(jibby) {
        this.jibby = jibby;
    }
    Pet.prototype.performBehavior = function () {
        this.jibby.div.style.backgroundImage = "url('images/happy.png')";
        this.jibby.happiness += 10;
        this.jibby.behavior = new Idle();
    };
    Pet.prototype.getNextBehvior = function () {
        return new Idle();
    };
    Pet.prototype.onWash = function () {
        throw new Error("Method not implemented.");
    };
    Pet.prototype.onEat = function () {
        throw new Error("Method not implemented.");
    };
    Pet.prototype.onPet = function () {
        throw new Error("Method not implemented.");
    };
    return Pet;
}());
var Sad = (function () {
    function Sad(jibby) {
        this.jibby = jibby;
    }
    Sad.prototype.performBehavior = function () {
        console.log("Ik ben ongelukkig.");
        this.jibby.div.style.backgroundImage = "url('images/sad.png')";
        this.jibby.food -= 0.02;
        this.jibby.happiness -= 0.015;
        this.jibby.hygiene -= 0.01;
    };
    Sad.prototype.getNextBehvior = function () {
        throw new Error("Method not implemented.");
    };
    Sad.prototype.onWash = function () {
        throw new Error("Method not implemented.");
    };
    Sad.prototype.onEat = function () {
        throw new Error("Method not implemented.");
    };
    Sad.prototype.onPet = function () {
        throw new Error("Method not implemented.");
    };
    return Sad;
}());
var Sleep = (function () {
    function Sleep(jibby) {
        this.jibby = jibby;
    }
    Sleep.prototype.performBehavior = function () {
        console.log("Ik ben aan het slapen.");
        this.jibby.div.style.backgroundImage = "url('images/sleeping.png')";
        this.jibby.food -= 0.01;
        this.jibby.happiness -= 0.0075;
        this.jibby.hygiene -= 0.005;
    };
    Sleep.prototype.getNextBehvior = function () {
        throw new Error("Method not implemented.");
    };
    Sleep.prototype.onWash = function () {
        throw new Error("Method not implemented.");
    };
    Sleep.prototype.onEat = function () {
        throw new Error("Method not implemented.");
    };
    Sleep.prototype.onPet = function () {
        throw new Error("Method not implemented.");
    };
    return Sleep;
}());
var Undead = (function () {
    function Undead(jibby) {
        this.jibby = jibby;
    }
    Undead.prototype.performBehavior = function () {
        console.log("Ik ben ondood.");
        this.jibby.div.style.backgroundImage = "url('images/zombie.png')";
    };
    Undead.prototype.getNextBehvior = function () {
        throw new Error("Method not implemented.");
    };
    Undead.prototype.onWash = function () {
        throw new Error("Method not implemented.");
    };
    Undead.prototype.onEat = function () {
        throw new Error("Method not implemented.");
    };
    Undead.prototype.onPet = function () {
        throw new Error("Method not implemented.");
    };
    return Undead;
}());
var Wash = (function () {
    function Wash(jibby) {
        this.jibby = jibby;
    }
    Wash.prototype.performBehavior = function () {
        this.jibby.hygiene += 10;
        this.jibby.happiness += 2;
        this.jibby.div.style.backgroundImage = "url('images/washing.png')";
        this.jibby.behavior = new Idle();
    };
    Wash.prototype.getNextBehvior = function () {
        return new Idle();
    };
    Wash.prototype.onWash = function () {
        throw new Error("Method not implemented.");
    };
    Wash.prototype.onEat = function () {
        throw new Error("Method not implemented.");
    };
    Wash.prototype.onPet = function () {
        throw new Error("Method not implemented.");
    };
    return Wash;
}());
//# sourceMappingURL=main.js.map