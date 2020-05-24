"use strict";
var Jibby = (function () {
    function Jibby(parent) {
        var _this = this;
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happyness = 50;
        this.div.style.backgroundImage = "url('images/idle.png')";
        this.div.addEventListener("click", function () { return _this.onPet(); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.onEat(); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.onWash(); });
    }
    Jibby.prototype.update = function () {
        this.hygiene -= 0.01;
        this.food -= 0.02;
        this.happyness -= 0.015;
    };
    Jibby.prototype.onPet = function () {
        console.log("you clicked on jibby!");
        this.div.style.backgroundImage = "url('images/happy.png')";
    };
    Jibby.prototype.onWash = function () {
        console.log("washing jibby!");
        this.div.style.backgroundImage = "url('images/washing.png')";
    };
    Jibby.prototype.onEat = function () {
        console.log("jibby is eating!");
        this.div.style.backgroundImage = "url('images/eating.gif')";
    };
    return Jibby;
}());
var Game = (function () {
    function Game() {
        var container = document.getElementById("container");
        this.jibby = new Jibby(container);
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
        document.getElementsByTagName("happyness")[0].innerHTML = Math.round(this.jibby.happyness).toString();
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map