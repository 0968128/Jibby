class Dead implements Behavior {
    private jibby:Jibby

    constructor(jibby:Jibby) {
        this.jibby = jibby
    }

    performBehavior():void {
        console.log("Ik ben dood.")
        this.jibby.div.style.backgroundImage = "url('images/dead.png')"

        this.jibby.div.addEventListener("click", () => this.jibby.setBehavior(new Undead(this.jibby)))
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