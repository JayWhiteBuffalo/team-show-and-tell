const Engineer = require('../lib/Engineer.js');

test ('Creates new Engineer', () => {
    const employee = new Engineer('Engineer Rick', 332, 'BuildRick@citadel.com', 'Rickthebuilder' );

    expect(employee.name).toBe('Engineer Rick');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
})

test ('Checks all methods for this', () => {
    const employee = new Engineer('Engineer Rick', 332, 'BuildRick@citadel.com', 'Rickthebuilder' );

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGithub()).toBe(employee.github);
    expect(employee.getRole()).toBe('Engineer');
})

//to Do :


//getRole()//return 'Engineer'