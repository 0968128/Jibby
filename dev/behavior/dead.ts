class Dead extends Behavior {
    constructor(jibby:Jibby) {
        super(jibby)
        this.jibby = jibby
        this.jibby.div.style.backgroundImage = "url('images/dead.png')"
    }

    update():void {
        console.log("The dead don't need updates. They won't show any sign of life ever again! Or will they?")
    }

    onWash(): void {
        console.log("The dead don't need cleaning!")
    }
    
    onEat(): void {
        console.log("The dead don't need food!")
    }

    onPet(): void {
        this.jibby.behavior = new Undead(this.jibby)
    }
}