class Sleep extends Behavior {
    constructor(jibby:Jibby) {
        super(jibby)
        this.jibby = jibby
        this.jibby.div.style.backgroundImage = "url('images/sleeping.png')"
    }

    update():void {
        this.jibby.food -= 0.01
        this.jibby.happiness -= 0.0075
        this.jibby.hygiene -= 0.005
        this.timer--
        if(this.timer <= 0) {
            this.jibby.behavior = new Idle(this.jibby)
        }
    }

    onWash(): void {
        this.jibby.behavior = new Angry(this.jibby)
    }

    onEat(): void {
        return
    }

    onPet(): void {
        return
    }
}