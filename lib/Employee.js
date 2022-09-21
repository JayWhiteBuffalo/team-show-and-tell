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
module.exports = Employee;





//name
//id
//email
//getName()
//getID()
//getEmail()
//getRole()
