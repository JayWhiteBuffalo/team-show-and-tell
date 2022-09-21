const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const  {managerQuestions, engineerQuestions, internQuestions} = require('./lib/Questions');


//Array from team members
teamArr = [];


const getTeam = () => {managerAnswers()}
const managerAnswers = () => {
    inquirer.prompt(managerQuestions)
    .then((data) => { //data is the obj returned from prompt
        //create manager obj with data that was returned
        data = new Manager(data.name, data.id, data.email, data.officeNumber)
        // The manager class now has a new obj with with properties of 'data'
        //push new manager obj to team member array
        teamArr.push(data);
        console.log(teamArr);})
        
    };

    getTeam();
