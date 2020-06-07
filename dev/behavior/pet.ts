class Pet extends Behavior {
    constructor(jibby:Jibby) {
        super(jibby)
        this.jibby = jibby
        this.jibby.happiness += 6
        this.jibby.div.style.backgroundImage = "url('images/happy.png')"
    }

    update():void {
        this.timer--
        if(this.timer <= 0) {
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