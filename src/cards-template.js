manager = require('./cards-template');


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

    return cardArr.join("");



};

module.exports = teamCards;