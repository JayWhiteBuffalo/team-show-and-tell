const Employee = require("./Employee");

//Manager Constructor
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        console.log(`Manager Number: ${this.officeNumber}`);
        return this.officeNumber;
    }

    getRole(){
        return 'Manager'
    }

}


module.exports = Manager;