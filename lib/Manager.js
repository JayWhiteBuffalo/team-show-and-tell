const {Employee, employeeQuestions} = require("./Employee");
//Addtional question for Managers
const managerQuestion = [
        {
        type: 'text',
        name: 'officeNumber',
        message: 'What is your office number?'
        }
]
//Adding addtional question to original employee question array and returning managerQuestions array
const managerQuestions = (employeeQuestions).concat(managerQuestion);

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


module.exports = {Manager, managerQuestions};