// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// import questions and markdown
const qlist = require("./utils/qlist");
const generateMarkdown = require("./utils/generateMarkdown");

// function to write README file
function writeToFile(fileName) {
  inquirer.prompt(qlist.questions).then((answers) => {
    const readmeContent = generateMarkdown.generateMarkdown(answers);

    fs.writeFile(fileName, readmeContent, (err) => {
      err ? console.log(err) : console.log("README file created! \n Check Generated-README folder");
    });
  });
}

//initialize app

(function init() {
  writeToFile("./Generated-README/README.md");
})();
