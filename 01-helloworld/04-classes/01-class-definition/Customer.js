var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Babalola", "James");
console.log("FirstName: " + myCustomer.firstName);
console.log("LastName: " + myCustomer.lastName);
