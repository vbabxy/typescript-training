"use strict";
var NewCustomer = /** @class */ (function () {
    function NewCustomer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(NewCustomer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewCustomer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return NewCustomer;
}());
var myCustomer1 = new NewCustomer("James", "Martin");
console.log("FirstName: " + myCustomer1.firstName);
console.log("LastName: " + myCustomer1.lastName);
