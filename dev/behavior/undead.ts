class Undead implements Behavior {
    private jibby:Jibby

    constructor(jibby:Jibby) {
        this.jibby = jibby
    }

    performBehavior():void {
        console.log("Ik ben ondood.")
        this.jibby.div.style.backgroundImage = "url('images/zombie.png')"
    }

    getNextBehvior(): Behavior {
        throw new Error("Method not implemented.");
    }

    onWash(): void {
        throw new Error("Method not implemented.");
    }

    onEat(): void {
        throw new Error("Method not implemented.");
    }

    onPet(): void {
        throw new Error("Method not implemented.");
    }
}