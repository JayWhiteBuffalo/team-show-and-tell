
const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

//Create Array to put employee Objects into
const employeeArr = []

const getTeam = () => {

//Gets user inputs for Manager 
function getManager() {
    inquirer.prompt(
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
        },
        {
        type: 'text',
        name: 'officeNumber',
        message: 'What is your office number?'
        }
    )
    .then((answers) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeeArr.push(answers);
    })};

    getManager();
    console.log(employeeArr[0]);
};
getTeam();





module.exports = Team;