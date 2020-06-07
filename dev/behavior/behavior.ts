abstract class Behavior {
    protected jibby:Jibby
    protected timer:number
    
    constructor(jibby:Jibby) {
        this.jibby = jibby
        this.timer = 120
    }

    public update():void {
        // Stats en timer laten aftellen
        this.jibby.food -= 0.02
        this.jibby.happiness -= 0.015
        this.jibby.hygiene -= 0.01
        this.timer--

        // Laat Jibby in slaap vallen na twee seconde inactiviteit
        if(this.timer <= 0) {
            this.jibby.behavior = new Sleep(this.jibby)
        }

        // Jibby wordt hongerig, ongelukkig of vies als zijn stats te laag zijn
        if(this.timer <= 60) {
            if(this.jibby.food <= 10 && this.jibby.food > 0) {
                this.jibby.behavior = new Hungry(this.jibby)
            } else if(this.jibby.happiness <= 10 && this.jibby.happiness > 0) {
                this.jibby.behavior = new Sad(this.jibby)
            } else if(this.jibby.hygiene <= 10 && this.jibby.hygiene > 0) {
                this.jibby.behavior = new Dirty(this.jibby)
            } else {
                return
            }
        }
        
        // Als één van de stats gelijk is aan of lager is dan 0, is Jibby dood.
        if(this.jibby.food <= 0 || this.jibby.happiness <= 0 || this.jibby.hygiene <= 0 ) {
            this.jibby.behavior = new Dead(this.jibby)
        }
    }

    // Standaardimplementatie hookmethods
    // Childclasses hebben keuze om te overschrijven met hun eigen implementatie
    public onWash():void {
        this.jibby.behavior = new Wash(this.jibby)
    }

    public onEat():void {
        this.jibby.behavior = new Eat(this.jibby)
    }

    public onPet():void {
        this.jibby.behavior = new Pet(this.jibby)
    }
}