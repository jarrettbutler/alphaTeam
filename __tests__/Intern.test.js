const Intern = require('../assets/lib/Intern')

describe('Intern', () => {
    describe('Initialization', () => {
        it('Should create an object', () => {
            const intern = new Intern();

            expect(typeof (intern)).toEqual('object');
        });
    });
    describe('Inputs', () => {
        it('Get the name of intern', () => {
            const intern = new Intern('Jarrett');

            expect(intern.name).toEqual('Jarrett');
        });
        it('Get the Id of intern', () => {
            const intern = new Intern('Jarrett', 1);

            expect(intern.id).toEqual(1);
        });
        it('Get the email of the intern', () => {
            const intern = new Intern('Jarrett', 1, 'jbutler98@hotmail.com');

            expect(intern.email).toEqual('jbutler98@hotmail.com');
        });
        it('Get the School of the intern', () => {
            const intern = new Intern('Jarrett', 1, 'jbutler98@hotmail.com', 'UNB');

            expect(intern.school).toEqual('UNB');
        });
        describe('getName()', () => {
            it('Should get the name from object', () => {
                const name = 'Jarrett';
                const intern = new Intern(name);

                expect(intern.getName()).toEqual(name);
            });
        });
        describe('getid()', () => {
            it('Should get the id from object', () => {
                const name = 'Jarrett';
                const id = 1
                const intern = new Intern(name, id);

                expect(intern.getId()).toEqual(id);
            });
        });
        describe('getEmail()', () => {
            it('Should get the email from object', () => {
                const name = 'Jarrett';
                const id = 1;
                const email = 'jbutler98@hotmail.com';
                const intern = new Intern(name, id, email);

                expect(intern.getEmail()).toEqual(email)
            });
        });
        describe('getSchool()', () => {
            it('Should get the school from object', () => {
                const name = 'Jarrett';
                const id = 1;
                const email = 'jbutler98@hotmail.com';
                const school = 'UNB'
                const intern = new Intern(name, id, email, school);

                expect(intern.getSchool()).toEqual(school)
            });
        });
        describe('getRole()', () => {
            it('Should get the Role from object', () => {
                const intern = new Intern();

                expect(intern.getRole()).toEqual('🧑‍🎓Intern')
            });
        });
    });
});