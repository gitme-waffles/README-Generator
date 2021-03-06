const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of this project?",
  },
  {
    type: 'editor',
    name: 'description',
    message: 'Enter a discription',
  },
  {
    type: 'editor',
    name: 'installation',
    message: 'Enter Installation instructions',
  },
  {
    type: 'editor',
    name: 'usage',
    message: 'Enter how to use the application',
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
  {
    type: 'editor',
    name: 'test',
    message: 'Enter Test Instructions',
  },
  {
    type: 'editor',
    name: 'contribution',
    message: 'Enter Contribution Guidlines',
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license",
    choices: ["Apache 2.0", "MIT", "MPL 2.0", "The Unlicense", "WTFPL", "none"],
  },
];

module.exports = { questions };
