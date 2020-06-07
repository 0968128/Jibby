class Jibby {
    // Fields
    private _hygiene: number
    private _food: number
    private _happiness:number
    private _div:HTMLElement
    private _x:number
    private _y:number
    private _behavior: Behavior

    // Properties
    public get hygiene(): number { return this._hygiene }
    public set hygiene(value: number) { this._hygiene = value }
    public get food(): number { return this._food }
    public set food(value: number) { this._food = value }
    public get happiness(): number { return this._happiness }
    public set happiness(value: number) { this._happiness = value }
    public get div(): HTMLElement { return this._div }
    public set div(value: HTMLElement) { this._div = value }
    public get x(): number { return this._x }
    public set x(value: number) { this._x = value }
    public get y(): number { return this._y }
    public set y(value: number) { this._y = value }
    public get behavior(): Behavior { return this._behavior }
    public set behavior(value: Behavior) { this._behavior = value }
            
    constructor(parent:HTMLElement) {
        // Jibby in html zetten
        this._div = document.createElement("jibby")
        parent.appendChild(this.div)

        // Startpremie geven aan fields
        this._x = 0
        this._y = 220
        this._hygiene = this._food = this._happiness = 50

        // Behavior field gelijkstellen aan Idle, want daar begint hij altijd mee
        this._behavior = new Idle(this)

        // Clicklisteners
        this.div.addEventListener("click", () => this._behavior.onPet())
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this._behavior.onEat())
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this._behavior.onWash())
    }
}