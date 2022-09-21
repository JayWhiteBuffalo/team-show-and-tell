const Intern = require('../lib/Intern.js');

test ('Creates new Intern', () => {
    const employee = new Intern('Morty', 222 , 'Morty@gosh.com', 'School of hardknocks');

    expect(employee.name).toBe('Morty');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})
 
