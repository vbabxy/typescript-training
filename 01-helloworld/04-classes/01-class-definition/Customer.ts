class Customer {

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}

let myCustomer = new Customer("Babalola", "James");

console.log("FirstName: "+myCustomer.firstName);
console.log("LastName: "+myCustomer.lastName);