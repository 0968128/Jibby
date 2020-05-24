class Jibby {
    // Fields
    public hygiene:number
    public food:number
    public happyness:number
    public div:HTMLElement
    public x:number
    public y:number
            
    constructor(parent:HTMLElement) {
        // Jibby in html zetten
        this.div = document.createElement("jibby")
        parent.appendChild(this.div)

        // Startpremie geven aan fields
        this.x = 0
        this.y = 220
        this.hygiene = this.food = this.happyness = 50

        // afbeelding voor idle - vervang dit door het gedrag
        this.div.style.backgroundImage = "url('images/idle.png')"
        // this.myBehavior = new Idle()

        // Clicklisteners
        this.div.addEventListener("click", () => this.onPet())
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.onEat())
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.onWash())
        
    }

    public update():void {
        // Gedrag updaten
        
        // dit moet in het gedrag staan
        this.hygiene -= 0.01
        this.food -= 0.02
        this.happyness -= 0.015

        // check of de waarden te laag zijn
    }

    private onPet():void {
        console.log("you clicked on jibby!")
        this.div.style.backgroundImage = "url('images/happy.png')"
    }

    private onWash():void {
        console.log("washing jibby!")
        this.div.style.backgroundImage = "url('images/washing.png')"
    }

    private onEat():void {
        console.log("jibby is eating!")
        this.div.style.backgroundImage = "url('images/eating.gif')"
    }
}