const inquirer = require('inquirer');
const {Manager, managerQuestions} = require('./lib/Manager');

const getTeam = () => {managerAnswers()}
const managerAnswers = () => {
    inquirer.prompt(managerQuestions)
    .then((answers) => {
        console.log(answers);})
        
    };

    getTeam();
