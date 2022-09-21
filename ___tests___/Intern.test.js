const Intern = require('../lib/Intern.js');

test ('Creates new Intern', () => {
    const employee = new Intern('Morty', 222 , 'Morty@gosh.com', 'School of hardknocks');

    expect(employee.name).toBe('Morty');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})
 
test ('Checks all methods for this', () => {
    const employee = new Intern('Morty', 222 , 'Morty@gosh.com', 'School of hardknocks');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})
