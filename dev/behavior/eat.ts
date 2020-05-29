class Eat implements Behavior {
    private jibby:Jibby

    constructor(jibby:Jibby) {
        this.jibby = jibby
    }
    
    performBehavior():void {
        this.jibby.food += 10
        this.jibby.div.style.backgroundImage = "url('images/washing.png')"
        // Wacht 2 seconde
        this.jibby.behavior = new Idle()
    }

    getNextBehvior(): Behavior {
        return new Idle()
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