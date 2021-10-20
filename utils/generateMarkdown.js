// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  switch (license) {
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'MPL 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    case 'WTFPL':
      return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
    case 'none' :
      return ''
    default: ''
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  console.log(badge);
  return `# ${data.title}
  ${badge}  
   ${data.description}
  
  ## Table of Contents
  - [Installation Instructions](#installation-instructions)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)
  
  ## Installation Instructions
  ${data.installation}
  ## Usage 
  ${data.usage}  
  
  ## Tests
  
  ## Contributing
  
  ## Questions
  Github: [${data.github}](https://github.com/${data.github})
  <br />
  email: ${data.email}
  - - -
  ## License
  

`;
}

module.exports = {
  generateMarkdown,
};
