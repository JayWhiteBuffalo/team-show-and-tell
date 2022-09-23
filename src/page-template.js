



//Array
cardArr = [];


const teamCards = (cards) => {
// Manager card 
const managerCard = manager => {
    return `
    <div id="${manager.getRole()}-card">
      <div>
        <h2>${manager.getName()}</h2>
        <h3>Role: ${manager.getRole()}</h3>
      </div> 
      <div>
        <ul>
          <li>ID: ${manager.getId()}</li>
          <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li>Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>`
};

const engineerCard = engineer => {
    return `
    <div id="${engineer.getRole()}-card">
      <div>
        <h2>${engineer.getName()}</h2>
        <h3>Role: ${engineer.getRole()}</h3>
      </div> 
      <div>
        <ul>
          <li>ID: ${engineer.getId()}</li>
          <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li>Office Number: ${engineer.getGithub()}</li>
        </ul>
      </div>
    </div>`
};

const internCard = intern => {
    return `
    <div id="${intern.getRole()}-card">
      <div>
        <h2>${intern.getName()}</h2>
        <h3>Role: ${intern.getRole()}</h3>
      </div> 
      <div>
        <ul>
          <li>ID: ${intern.getId()}</li>
          <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li>Office Number: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>`
};


cardArr.push(cards
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => managerCard(manager)));

cardArr.push(cards
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => engineerCard(engineer)));
  
cardArr.push(cards
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => internCard(intern)));
  


    return cardArr.join("");

};


function templateData(cards){
    return ` 
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
    <header>
        <h1>Hello Team<h1>
    </header>

    ${teamCards(cards)}

    </body>
    `
};

module.exports = templateData;