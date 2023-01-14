const Manager = require('../assets/lib/Manager')

describe('Manager', () => {
    describe('Initialization', () => {
        it('Should create an object', () => {
            const manager = new Manager();

            expect(typeof (manager)).toEqual('object');
        });
    });
    describe('Inputs', () => {
        it('Get the name of manager', () => {
            const manager = new Manager('Jarrett');

            expect(manager.name).toEqual('Jarrett');
        });
        it('Get the Id of manager', () => {
            const manager = new Manager('Jarrett', 1);

            expect(manager.id).toEqual(1);
        });
        it('Get the email of the manager', () => {
            const manager = new Manager('Jarrett', 1, 'jbutler98@hotmail.com');

            expect(manager.email).toEqual('jbutler98@hotmail.com');
        });
        it('Get the OfficeNumber of the manager', () => {
            const manager = new Manager('Jarrett', 1, 'jbutler98@hotmail.com', 1);

            expect(manager.officeNumber).toEqual(1);
        });
        describe('getName()', () => {
            it('Should get the name from object', () => {
                const name = 'Jarrett';
                const manager = new Manager(name);

                expect(manager.getName()).toEqual(name);
            });
        });
        describe('getid()', () => {
            it('Should get the id from object', () => {
                const name = 'Jarrett';
                const id = 1
                const manager = new Manager(name, id);

                expect(manager.getId()).toEqual(id);
            });
        });
        describe('getEmail()', () => {
            it('Should get the email from object', () => {
                const name = 'Jarrett';
                const id = 1;
                const email = 'jbutler98@hotmail.com';
                const manager = new Manager(name, id, email);

                expect(manager.getEmail()).toEqual(email)
            });
        });
        describe('getOfficeNumber()', () => {
            it('Should get the officeNumber from object', () => {
                const name = 'Jarrett';
                const id = 1;
                const email = 'jbutler98@hotmail.com';
                const officeNumber = 1;
                const manager = new Manager(name, id, email, officeNumber);

                expect(manager.getOfficeNumber()).toEqual(officeNumber)
            });
        });
        describe('getRole()', () => {
            it('Should get the Role from object', () => {
                const manager = new Manager();

                expect(manager.getRole()).toEqual('☕Manager')
            });
        });
    });
});