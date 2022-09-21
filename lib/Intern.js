const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        console.log(`Intern School: ${this.school}`);
        return this.school;
    }
    getRole(){
        return 'Intern'
    }

}



module.exports = Intern;
//require employee
//school
//getSchool()
//getRole()