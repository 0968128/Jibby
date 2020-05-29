class Eat implements Behavior {
    private jibby:Jibby

    constructor(jibby:Jibby) {
        this.jibby = jibby

        // Clicklisteners
        this.jibby.div.addEventListener("click", () => this.jibby.setBehavior(new Pet(this.jibby)))
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.jibby.setBehavior(new Eat(this.jibby)))
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.jibby.setBehavior(new Wash(this.jibby)))
    }
    
    performBehavior(): void {
        this.jibby.food += 10
        this.jibby.div.style.backgroundImage = "url('images/eating.gif')"
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