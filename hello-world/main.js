var Point = /** @class */ (function () {
    // private _x: number
    // private _y: number
    // constructor(x?: number, y?: number) {
    //     this._x = (x ? x : 0)
    //     this._y = (y ? y : 0)
    // }
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    // set x(val) {
    //     if (val && val <= 0)
    //         throw new Error('Invalid Input')
    //     this.x = val
    // }
    Point.prototype.draw = function () {
        console.log("X: ".concat(this._x, ", Y: ").concat(this._y));
    };
    return Point;
}());
var point = new Point(5, 6);
console.log(point.x);
point.draw();
