class Dirty extends Behavior {
    constructor(jibby:Jibby) {
        super(jibby)
        this.jibby = jibby
        this.jibby.div.style.backgroundImage = "url('images/dirty.png')"
    }

    public update():void {
        // Stats en timer laten aftellen
        this.jibby.food -= 0.02
        this.jibby.happiness -= 0.015
        this.jibby.hygiene -= 0.01
        this.timer--

        // Jibby wordt hongerig of ongelukkig als zijn stats te laag zijn
        if(this.timer <= 60) {
            if(this.jibby.food <= 10 && this.jibby.food > 0) {
                this.jibby.behavior = new Hungry(this.jibby)
            } else if(this.jibby.happiness <= 10 && this.jibby.happiness > 0) {
                this.jibby.behavior = new Sad(this.jibby)
            } else {
                this.jibby.behavior = new Idle(this.jibby)
            }
        }

        // Als één van de stats gelijk is aan of lager is dan 0, is Jibby dood.
        if(this.jibby.food <= 0 || this.jibby.happiness <= 0 || this.jibby.hygiene <= 0 ) {
            this.jibby.behavior = new Dead(this.jibby)
        }
    }
}