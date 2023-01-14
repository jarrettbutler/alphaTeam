const Engineer = require('../assets/lib/Engineer')

describe('Engineer', () => {
    describe('Initialization', () => {
        it('Should create an object', () => {
            const engineer = new Engineer();

            expect(typeof (engineer)).toEqual('object');
        });
    });
    describe('Inputs', () => {
        it('Get the name of engineer', () => {
            const engineer = new Engineer('Jarrett');

            expect(engineer.name).toEqual('Jarrett');
        });
        it('Get the Id of engineer', () => {
            const engineer = new Engineer('Jarrett', 1);

            expect(engineer.id).toEqual(1);
        });
        it('Get the email of the engineer', () => {
            const engineer = new Engineer('Jarrett', 1, 'jbutler98@hotmail.com');

            expect(engineer.email).toEqual('jbutler98@hotmail.com');
        });
        it('Get the Github account of the engineer', () => {
            const engineer = new Engineer('Jarrett', 1, 'jbutler98@hotmail.com', 'https://github.com/jarrettbutler');

            expect(engineer.github).toEqual('https://github.com/jarrettbutler');
        });
        describe('getName()', () => {
            it('Should get the name from object', () => {
                const name = 'Jarrett';
                const engineer = new Engineer(name);

                expect(engineer.getName()).toEqual(name);
            });
        });
        describe('getid()', () => {
            it('Should get the id from object', () => {
                const name = 'Jarrett';
                const id = 1
                const engineer = new Engineer(name, id);

                expect(engineer.getId()).toEqual(id);
            });
        });
        describe('getEmail()', () => {
            it('Should get the email from object', () => {
                const name = 'Jarrett';
                const id = 1;
                const email = 'jbutler98@hotmail.com';
                const engineer = new Engineer(name, id, email);

                expect(engineer.getEmail()).toEqual(email)
            });
        });
        describe('getGithub()', () => {
            it('Should get the github from object', () => {
                const name = 'Jarrett';
                const id = 1;
                const email = 'jbutler98@hotmail.com';
                const github = 'https://github.com/jarrettbutler'
                const engineer = new Engineer(name, id, email, github);

                expect(engineer.getGithub()).toEqual(github)
            });
        });
        describe('getRole()', () => {
            it('Should get the Role from object', () => {
                const engineer = new Engineer();

                expect(engineer.getRole()).toEqual('Engineer')
            });
        });
    });
});