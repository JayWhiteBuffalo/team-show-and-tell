const employeeQuestions = [
    {
        type: 'text',
        name: 'name',
        message: 'What is your name? (Team Manager)'
        },
        {
        type: 'text',
        name: 'id',
        message: 'Enter Id number'
        },
        {
        type: 'text',
        name: 'email',
        message: 'What is your email address?'
        }
];

class Employee {

//Employee constructor
constructor(name, id , email) {
    this.name = name;
    this.id = id;
    this.email = email;

}
// Gets Name
getName() {
    console.log(`Employee Name: ${this.name}`);
    return this.name;
}

//Get Id
getId() {
    console.log(`Employee ID: ${this.id}`);
    return this.id;
}

getEmail() {
    console.log(`Employee Email: ${this.email}`);
    return this.email;
}

getRole(){
    return 'Employee'
}
};
module.exports = {Employee, employeeQuestions};





//name
//id
//email
//getName()
//getID()
//getEmail()
//getRole()
