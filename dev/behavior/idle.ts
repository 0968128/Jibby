class Idle implements Behavior {
    performBehavior(jibby:Jibby):void {
        console.log("Ik ben inactief.")
        jibby.div.style.backgroundImage = "url('images/idle.png')"

        // Stats laten dalen
        jibby.food -= 0.02
        jibby.happiness -= 0.015
        jibby.hygiene -= 0.01
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