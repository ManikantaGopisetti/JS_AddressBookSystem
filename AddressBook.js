class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

console.log("\n-----Welcome to Address Book-----\n");
let contact1 = new Contact('Mani','Gopisetti','India','Ravulapalem','Andhra',533236,9876543210,'mani@gmail.com');
console.log(contact1);
