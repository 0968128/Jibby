class Eat extends Behavior {
    constructor(jibby:Jibby) {
        super(jibby)
        this.jibby = jibby
        this.jibby.food += 8
        this.jibby.div.style.backgroundImage = "url('images/eating.gif')"
    }
    
    update():void {
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