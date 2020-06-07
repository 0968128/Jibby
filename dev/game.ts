class Game {
    // Fields
    private jibby:Jibby

    constructor() {
        let container = document.getElementById("container")!
        this.jibby = new Jibby(container)
        this.gameLoop()
    }

    private gameLoop(){
        this.jibby.behavior.update()
        this.updateUI()
        requestAnimationFrame(() => this.gameLoop())
    }

    private updateUI():void{
        // console.log(this.jibby.food, this.jibby.happiness, this.jibby.hygiene)
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString()
        document.getElementsByTagName("happiness")[0].innerHTML = Math.round(this.jibby.happiness).toString()
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString()
    }
} 

window.addEventListener("load", () => {new Game()})