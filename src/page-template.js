



//Array
cardArr = [];


const teamCards = (cards) => {
// Manager card 
const managerCard = manager => {
    return `
  <div class= " card-container col-sm-12 col-md-4">
    <div id="${manager.getRole()}-card">
      <div class = "title">
          <h2 style = "font-weight: bold;">${manager.getName()}</h2>
          <h3>Role: ${manager.getRole()}</h3>
      </div> 
      <div class = "items">
        <ul>
          <li>ID: ${manager.getId()}</li>
          <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li>Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  </div>`
};

const engineerCard = engineer => {
    return `
  <div class= "col-sm-12 col-md-4">
    <div id="${engineer.getRole()}-card">
      <div class = "title">
        <h2 style = "font-weight: bold;">${engineer.getName()}</h2>
        <h3>Role: ${engineer.getRole()}</h3>
      </div> 
      <div>
        <ul>
          <li>ID: ${engineer.getId()}</li>
          <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li>GitHub: <a href="www.github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>
  </div>`
};

const internCard = intern => {
    return `
  <div class= "col-sm-12 col-md-4">
    <div id="${intern.getRole()}-card">
      <div class = "title">
        <h2 style = "font-weight: bold;">${intern.getName()}</h2>
        <h3>Role: ${intern.getRole()}</h3>
      </div> 
      <div>
        <ul>
          <li>ID: ${intern.getId()}</li>
          <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li>School: ${intern.getSchool()}</li>
        </ul>
      </div>
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
      <title>Team Overview</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <link rel="stylesheet" href="./styles/styles.css">
    </head>
    
    <body>
    <header class = "header">
        <h1>Team Overview<h1>
    </header>

    ${teamCards(cards)}

    </body>
    `
};

module.exports = templateData;