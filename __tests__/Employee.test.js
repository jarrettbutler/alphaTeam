const Employee = require('../assets/lib/Employee')

describe('Employee', () => {
    describe('Initialization', () => {
        it('Should create an object', () => {
            const employee = new Employee();

            expect(typeof (employee)).toEqual('object');
        });
    });
    describe('Inputs', () => {
        it('Get the name of employee', () => {
            const employee = new Employee('Jarrett');

            expect(employee.name).toEqual('Jarrett');
        });
        it('Get the Id of employee', () => {
            const employee = new Employee('Jarrett', 1);

            expect(employee.id).toEqual(1);
        });
        it('Get the email of the employee', () => {
            const employee = new Employee('Jarrett', 1, 'jbutler98@hotmail.com');

            expect(employee.email).toEqual('jbutler98@hotmail.com');
        });
        describe('getName()', () => {
            it('Should get the name from object', () => {
                const name = 'Jarrett';
                const employee = new Employee(name);

                expect(employee.getName()).toEqual(name);
            });
        });
        describe('getid()', () => {
            it('Should get the id from object', () => {
                const name = 'Jarrett';
                const id = 1
                const employee = new Employee(name, id);

                expect(employee.getId()).toEqual(id);
            });
        });
        describe('getEmail()', () => {
            it('Should get the email from object', () => {
                const name = 'Jarrett';
                const id = 1;
                const email = 'jbutler98@hotmail.com';
                const employee = new Employee(name, id, email);

                expect(employee.getEmail()).toEqual(email)
            });
        });
        describe('getRole()', () => {
            it('Should get the Role from object', () => {
                const employee = new Employee();

                expect(employee.getRole()).toEqual('Employee')
            });
        });
    });
});

