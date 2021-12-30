class Contact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
}

detailValid = (pattern, detail) => {
    let result = pattern.test(detail);
    if (result == false) {
        throw detail + ' is not valid enter valid deatils';
    }
    return result;
}

validContact = (...params) => {
    if (params[0] == true && params[1] == true && params[2] == true && params[4] == true
        && params[5] == true && params[6] == true && params[7] == true) {
        return true;
    }
    return false;
}

let firstNamePattern = /^[A-Z][a-z]{2,}$/;
let lastNamePattern = /^[A-Z][a-z]{2,}$/;
let addressPattern = /^[A-Za-z]{4,}$/;
let cityPattern = /^[A-Za-z]{4,}$/;
let statePattern = /^[A-Za-z]{4,}$/;
let zipPattern = /^[\d]{3}[\s][\d]{3}$/;
let phoneNumberPattern = /^[\d]{2}[\s]{1}[\d]{10}$/;
let emailPattern = /^([-+a-zA-z0-9]+([.][a-zA-z0-9]+)*)@([\w]+[.][a-zA-z]{2,}([.][a-zA-Z]{2,})?)$/;

addContact = () => {
    let firstName = 'Mani';
    let lastName = 'Gopisetti';
    let address = 'India';
    let city = 'Ravulapalem';
    let state = 'Andhra';
    let zip = '533 236';
    let phoneNumber = '91 9876543210';
    let email = 'mani@gmail.com';
    try {
        if (validContact(detailValid(firstNamePattern, firstName), detailValid(lastNamePattern, lastName),
            detailValid(addressPattern, address), detailValid(cityPattern, city), detailValid(statePattern, state),
            detailValid(zipPattern, zip), detailValid(phoneNumberPattern, phoneNumber), detailValid(emailPattern, email))) {

            let contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
            contactArr.push(contact);

        }
    }
    catch (e) {
        console.error(e + "\n");
    }
}

console.log("\n-----Welcome to Address Book-----\n");

let contactArr = new Array();
addContact();
console.log(contactArr);