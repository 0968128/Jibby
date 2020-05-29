interface Behavior {
    performBehavior(jibby:Jibby):void
    getNextBehvior():Behavior
    onWash(jibby:Jibby):void
    onEat(jibby:Jibby):void
    onPet(jibby:Jibby):void
}