class Wash extends Behavior {
    constructor(jibby:Jibby) {
        super(jibby)
        this.jibby = jibby
        this.jibby.hygiene += 6
        this.jibby.happiness += 2
        this.jibby.div.style.backgroundImage = "url('images/washing.png')"
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
        this.jibby.behavior = new Angry(this.jibby)
    }
}