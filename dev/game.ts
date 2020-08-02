class Game {
    // Fields
    private jibby:Jibby

    // Methods
    constructor() {
        // Maak een container aan om Jibby in te zetten
        let container = document.getElementById("container")!
        this.jibby = new Jibby(container)
        
        // Gameloop starten
        this.gameLoop()
    }

    private gameLoop(){
        // Jibby's gedrag bepaalt wat er met hem gebeurt
        this.jibby.behavior.update()
        
        // Update de user interface (scores)
        this.updateUI()
        
        // Gameloop aan de gang houden
        requestAnimationFrame(() => this.gameLoop())
    }

    private updateUI():void{
        // Bereken Jibby's stats en geef in beeld hele getallen weer van het type string
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString()
        document.getElementsByTagName("happiness")[0].innerHTML = Math.round(this.jibby.happiness).toString()
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString()
    }
} 

window.addEventListener("load", () => {new Game()})
