
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


const managerQuestion = [
    {
    type: 'text',
    name: 'officeNumber',
    message: 'What is your office number?'
    }
]

const engineerQuestion = [
    {
        type: 'text',
        name: 'github',
        message: 'Please enter your github User name.'
    }
]

const internQuestion = [
    {
        type: 'text',
        name: 'school',
        message: 'Please enter Name of your school.'
    }
]

const addQuestion = [
    {
        type: 'confirm',
        name: 'add',
        message: 'Would you like to add another team member?'
        
    }
]

const teamQuestion = [
    {
        type: 'list',
        name: 'add',
        message: 'Choose the type of team member you would like to add.',
        choices: [
            {name: 'Engineer', value: "newEngineer"},
            {name: 'Intern', value: "newIntern"}
        ]
    }
]
//Adding addtional question to original employee question array and returning managerQuestions array
const managerQuestions = (employeeQuestions).concat(managerQuestion);
const engineerQuestions = (employeeQuestions).concat(engineerQuestion);
const internQuestions = (employeeQuestions).concat(internQuestion);
module.exports = {managerQuestions, engineerQuestions, internQuestions, addQuestion, teamQuestion};