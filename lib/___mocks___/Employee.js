const Employee = require("../Employee");

module.exports = function() {
    new Employee() {

    this.name = 'Rick';
    this.id = '777';
    this.email = 'RealRick@citidel.com';
    console.log(this);
};}
;