// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// import questions and markdown
const q_list = require('./q-list')
const generateMarkdown = require('./utils/generateMarkdown')



inquirer
    .prompt(
        q_list.questions
    )

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
(function init() {

})();

// Function call to initialize app
// init();
