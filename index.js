const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern')
const  {managerQuestions, engineerQuestions, internQuestions, addQuestion, teamQuestion} = require('./lib/Questions');
const fs = require('fs');
const generatePage = require('./src/page-template');

//Array from team members
teamArr = [];


const getTeam = () => {addManager()}
const addManager = () => {
    inquirer.prompt(managerQuestions)
    .then((data) => { //data is the obj returned from prompt
        //create manager obj with data th+*-at was returned
        data = new Manager(data.name, data.id, data.email, data.officeNumber)
        // The manager class now has a new obj with with properties of 'data'
        //push new manager obj to team member array
        teamArr.push(data);
        addPrompt();
    })
        
    };

    const addPrompt = () => {
        inquirer.prompt(addQuestion)
        .then(data => {
        if (data.add){return addEmployee();}
        else { write()
        }})};

    const addEmployee = () => {
        inquirer.prompt(teamQuestion)
        .then((data) => {
            if (data.add === 'newEngineer') {addEngineer()}
            if (data.add === 'newIntern'){addIntern()}

        })
    };

    const addEngineer = () => {
        inquirer.prompt(engineerQuestions)
        .then(data => {
            data = new Engineer(data.name, data.id, data.email, data.github)
            teamArr.push(data);
            console.log(teamArr);
            addPrompt();
        })
    };

    const addIntern = () => {
        inquirer.prompt(internQuestions)
        .then(data => {
            data = new Intern(data.name, data.id, data.email, data.school)
            teamArr.push(data);
            console.log(teamArr);
            addPrompt();
        })
    };
    

    getTeam();
    
    function write() {
        const pageHTML = generatePage(teamArr)
        fs.writeFile('index.html', pageHTML, err => {
            if (err) throw new Error(err);
            console.log('Page created.')
        });
    }
    