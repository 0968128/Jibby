/// <reference path="behavior.ts"/>

class Angry extends Behavior {
    constructor(jibby:Jibby) {
        super(jibby)
        this.jibby = jibby
        this.jibby.happiness -= 12
        this.jibby.div.style.backgroundImage = "url('images/angry.png')"
    }

    update():void {
        this.timer--
        if(this.timer <= 30) {
            this.jibby.behavior = new Idle(this.jibby)
        }
    }

    onWash(): void {
        return
    }
    
    onEat(): void {
        return
    }

    onPet(): void {
        return
    }
}