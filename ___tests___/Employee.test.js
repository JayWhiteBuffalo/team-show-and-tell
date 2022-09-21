const Employee = require('../lib/Employee');

jest.mock('../lib/___mocks___/Employee.js');

test('Creates new employee', () => {
    const employee = new Employee('Rick', 777, 'therealrick@citadel.com');

    expect(employee.name).toBe("Rick");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})


test("Can getName()", () => {
    const name = "Summer";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("Checks employee methods", () => {
    const employee = new Employee('Summer', 304, 'Summer@sumthing.com')
    
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
});



//test getRoll() // Returns 'employee'