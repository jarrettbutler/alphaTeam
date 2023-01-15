//Creating const that link to the packages that are needed for this application
const inquirer = require('inquirer');
const HTML = require('./assets/src/render');
const fs = require('fs');

const Manager = require('./assets/lib/Manager');
const Engineer = require('./assets/lib/Engineer');
const Intern = require('./assets/lib/Intern');

const projectDirectory = [];
//Here are the questions that will be promted with
//Need to find a way to seperate the prompts so that it will reask the questions in logicacl orders
//Should I seperate them?
//Alos need to make function that takes the inputs and creates the members profile
const initialQuestions = () => {
    inquirer.prompt([
        {
            type: 'Input',
            name: 'title',
            message: 'What is the title or name of your project?',
            validate: (titleInput) => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter the title or name of the project")
                    return false;
                }
            },
        },])
        .then(() => {
            managerQuestions();
        })}
    const managerQuestions = () => {
        inquirer.prompt([
            {
                type: 'Input',
                name: 'managerName',
                message: 'What is the name of the manager?',
                validate: (managerNameInput) => {
                    if (managerNameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the manager');
                        return false;
                    }
                },
            },
            {
                type: 'Input',
                name: 'managerId',
                message: 'What is the ID of the manager?',
                validate: (managerIdInput) => {
                    if (managerIdInput) {
                        return true;
                    } else {
                        console.log('Please enter the ID of the manager');
                        return false;
                    }
                },
            },
            {
                type: 'Input',
                name: 'managerEmail',
                message: 'What is the email of the manager?',
                validate: (managerEmailInput) => {
                    if (managerEmailInput) {
                        return true;
                    } else {
                        console.log('Please enter the email of the manager');
                        return false;
                    }
                },
            },
            {
                type: 'Input',
                name: 'managerOfficeNumber',
                message: 'What is the office number of the manager?',
                validate: (managerOfficeNumberInput) => {
                    if (managerOfficeNumberInput) {
                        return true;
                    } else {
                        console.log('Please enter the office number of the manager');
                        return false;
                    }
                },
            },
        ])
            .then((answers) => {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
                manager.role = manager.getRole();
                projectDirectory.push(manager);
                addnewEmployeeQuestions();
            });
    };
    const addnewEmployeeQuestions = () => {
        inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'Would you like to add another member?',
            choices: ['Yes', 'No, I am done adding members'],
        },])
        .then((answers) => {
            switch(answers.addMember) {
                case 'Yes':
                newEmployeeQuestions();
                case 'No, I am done adding members':
                finished();
                break;
            }
        });
    }
    const newEmployeeQuestions = () => {
            inquirer.prompt([
        {
            type: 'list',
            name: 'memberType',
            message: 'Would you like to add an Engineer or Intern?',
            choices: ['Engineer', 'Intern'],
            when: (answers) => answers['addMember'] === 'Yes',
        },])
    .then((answers) => {
        switch(answers.memberType) {
            case 'Engineer':
                engineerQuestions();
                case 'Intern':
                    internQuestions();
                    break;
        }
    })
    }
    const engineerQuestions = () => {
        inquirer.prompt([
        {
            type: 'Input',
            name: 'engineerName',
            message: 'What is the name of the engineer?',
            validate: (engineerNameInput) => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer');
                    return false;
                }
            },
        },
        {
            type: 'Input',
            name: 'engineerId',
            message: 'What is the ID of the engineer?',
            validate: (engineerIdInput) => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log('Please enter the ID of the engineer');
                    return false;
                }
            },
        },
        {
            type: 'Input',
            name: 'engineerEmail',
            message: 'What is the email of the engineer?',
            validate: (engineerEmailInput) => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of the engineer');
                    return false;
                }
            },
        },
        {
            type: 'Input',
            name: 'engineerGithub',
            message: 'What is the Github account of the engineer?',
            validate: (engineerGithubInput) => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log('Please enter the Github account of the engineer');
                    return false;
                }
            },
        },])
        .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            engineer.role = engineer.getRole();
            projectDirectory.push(engineer);
            addnewEmployeeQuestions();
        })
    }
    const internQuestions = () => {
        inquirer.prompt([
        {
            type: 'Input',
            name: 'internName',
            message: 'What is the name of the intern?',
            validate: (internNameInput) => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern');
                    return false;
                }
            },
        },
        {
            type: 'Input',
            name: 'internId',
            message: 'What is the ID of the intern?',
            validate: (internIdInput) => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log('Please enter the ID of the intern');
                    return false;
                }
            },
        },
        {
            type: 'Input',
            name: 'internEmail',
            message: 'What is the email of the intern?',
            validate: (internEmailInput) => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of the intern');
                    return false;
                }
            },
        },
        {
            type: 'Input',
            name: 'minternSchool',
            message: 'What is the school of the intern?',
            validate: (internSchoolInput) => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log('Please enter the office number of the intern');
                    return false;
                }
            },
        },
    ])
.then((answers) => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    intern.role = intern.getRole();
    projectDirectory.push(intern);
    addnewEmployeeQuestions();
})
    }

//this it the function that runs the prompts which then takes the answers and injects them into the render.js file
//Which then creates the index.html file so that it can auto fill the requirements
const finished = (projectDirectory) => {
            const html = HTML.generateHTML(projectDirectory)
            fs.writeFile('./dist/index.html', html, function (err) {
                if (err) {
                    console.log('Could not save file', err);
                } else {
                    console.log('Success index.html file has been created');
                }
            })
        };

        initialQuestions();
