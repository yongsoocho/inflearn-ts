"use strict";
// 2
function returnParams(params) {
    return params;
}
returnParams("hi");
returnParams(25);
returnParams(true);
// 3
const rP = returnParams;
function prtKey(params, key) {
    console.log(params[key]);
    return params[key];
}
prtKey({ name: "yongsoo", age: 25 }, "name");
prtKey({ city: "seoul", phone: "01011112222" }, "phone");
// 5
class ClassName {
    constructor(_data) {
        this._data = _data;
    }
    set data(newData) {
        this._data = newData;
    }
    get data() {
        return this._data;
    }
}
