//Creating const that link to the packages that are needed for this application
const inquirer = require('inquirer');
const HTML = require('./assets/src/render');
const fs = require('fs');

const Manager = require('./assets/lib/Manager');
const Engineer = require('./assets/lib/Engineer');
const Intern = require('./assets/lib/Intern');

//Here are the questions that will be promted 

const questions = [
    {
        type: 'Input',
        name: 'title',
        message: 'What is the title orname of your project?',
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter the title or name of the project")
                return false;
            }
        },
    },
    {
        type: 'Input',
        name: 'managerName',
        message: 'What is the name of the team manager?',
        validate: (managerNameInput) => {
            if (managerNameInput) {
                return true;
            } else {
                console.log('Please enter the title or name of the manager');
                return false;
            }
        },
    },
]

function init() {
    return inquirer
        .prompt(questions)
        .then((answers) => {
            const html = HTML.generateHTML(answers)
            fs.writeFile('./dist/index.html', html, function (err) {
                if (err) {
                    console.log('Could not save file', err);
                } else {
                    console.log('Success index.html file has been created');
                }
            })
        })
        .catch((error) => {
            console.log(error);
        })
}

init()