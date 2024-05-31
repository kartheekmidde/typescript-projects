
class Point {
    // private _x: number
    // private _y: number

    // constructor(x?: number, y?: number) {
    //     this._x = (x ? x : 0)
    //     this._y = (y ? y : 0)
    // }

    constructor(private _x?: number, private _y?: number) {}

    get x() {
        return this._x
    }

    // set x(val) {
    //     if (val && val <= 0)
    //         throw new Error('Invalid Input')
    //     this.x = val
    // }

    draw() {
        console.log(`X: ${this._x}, Y: ${this._y}`)
    }
}

let point = new Point(5, 6)
console.log(point.x)
point.draw()
