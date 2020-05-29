class Hungry implements Behavior {
    private jibby:Jibby

    constructor(jibby:Jibby) {
        this.jibby = jibby
    }

    performBehavior():void {
        console.log("Ik ben hongerig.")
        this.jibby.div.style.backgroundImage = "url('images/hungry.png')"

        // Stats laten dalen
        this.jibby.food -= 0.02
        this.jibby.happiness -= 0.015
        this.jibby.hygiene -= 0.01
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