const Manager = require('../lib/Manager.js');

test ('Creates new Manager', () => {
    const employee = new Manager('Rick', 413, 'RealRick@citadel.com', 314);

    expect(employee.name).toBe('Rick');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
})