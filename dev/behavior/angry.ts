class Angry implements Behavior {
    private jibby:Jibby

    constructor(jibby:Jibby) {
        this.jibby = jibby

        // Stats laten dalen
        this.jibby.food -= 0.04
        this.jibby.happiness -= 0.075
        this.jibby.hygiene -= 0.01
    }

    performBehavior(): void {
        this.jibby.div.style.backgroundImage = "url('images/angry.png')"
    }

    getNextBehvior(): Behavior {
        return new Undead(this.jibby)
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