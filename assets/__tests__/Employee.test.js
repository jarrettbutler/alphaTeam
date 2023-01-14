const Employee = require('../lib/Employee')

describe('employee', () => {
    it('Get the name of employee', () => {
    const result = new Employee('Jarrett', 1, 'jbutler98@hotmail.com');

    expect(employee.name).toEqual('Jarrett');
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual('jbuttler98@hotmail.com');
});
});

