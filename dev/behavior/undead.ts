class Undead extends Behavior {
    constructor(jibby:Jibby) {
        super(jibby)
        this.jibby = jibby
        this.jibby.div.style.backgroundImage = "url('images/zombie.png')"
    }

    update():void {
        console.log("Zombies don't need updates. They're timeless!")
    }

    onWash(): void {
        console.log("Zombies don't need cleaning!")
    }

    onEat(): void {
        console.log("Zombies don't need food!")
    }

    onPet(): void {
        console.log("Zombies don't need petting!")
    }
}