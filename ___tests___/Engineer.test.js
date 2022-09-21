const Engineer = require('../lib/Engineer.js');

test ('Creates new Engineer', () => {
    const employee = new Engineer('Engineer Rick', 332, 'BuildRick@citadel.com', 'Rickthebuilder' );

    expect(employee.name).toBe('Engineer Rick');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
})
//to Do :
// github // github username
//getGithub()
//getRole()//return 'Engineer'