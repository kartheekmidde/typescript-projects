export class Car {
    constructor(private _make?: string, private _model?: string) {}

    get make(){
        return this._make
    }

    set make(val){
        this._make = val
    }

    toString() {
        console.log(`Make: ${this._make}, Model: ${this._model}`)
    }
}