class Sleep implements Behavior {
    private jibby:Jibby

    constructor(jibby:Jibby) {
        this.jibby = jibby
    }

    performBehavior():void {
        console.log("Ik ben aan het slapen.")
        this.jibby.div.style.backgroundImage = "url('images/sleeping.png')"

        // Stats laten dalen
        this.jibby.food -= 0.01
        this.jibby.happiness -= 0.0075
        this.jibby.hygiene -= 0.005
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