const Employee = require('../assets/lib/Employee')

describe('employee', () => {
    it('Get the name of employee', () => {
    const result = new Employee('Jarrett', 1, 'jbutler98@hotmail.com');

    expect(result.name).toEqual('Jarrett');
    expect(result.id).toEqual(1);
    expect(result.email).toEqual('jbuttler98@hotmail.com');
});
});

