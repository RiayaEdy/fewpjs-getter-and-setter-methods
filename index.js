class Circle {
    constuctor (radius) {
        this.radius = radius
    }
    get diameter() {
        return this.radius * 2
    }
    get circumfence() {
        return 2 * Math.PI * this.radius
    }
    set diameter(a) {
        this.radius = a / 2
    }
    set circumfence(a) {
        this.radius = (a * 0.5) / Math.PI
    }
}

c = new Circle(3)
c.circumfence = 18.84955592153876
console.log(c.radius)
