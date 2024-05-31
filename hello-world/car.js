"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(_make, _model) {
        this._make = _make;
        this._model = _model;
    }
    Object.defineProperty(Car.prototype, "make", {
        get: function () {
            return this._make;
        },
        set: function (val) {
            this._make = val;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.toString = function () {
        console.log("Make: ".concat(this._make, ", Model: ").concat(this._model));
    };
    return Car;
}());
exports.Car = Car;
