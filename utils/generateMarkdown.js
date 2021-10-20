// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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
      return ' ';
    default: ' ';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'MPL 2.0':
      return '(https://opensource.org/licenses/MPL-2.0)';
    case 'The Unlicense':
      return '(http://unlicense.org/)';
    case 'WTFPL':
      return '(http://www.wtfpl.net/about/)';
    case 'none' :
      return '';
    default: '';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const renderEmpty = [' ', ''];
  console.log(license);
  const licenseArr = [
    '- [License](#license)',
    `- - -
    ## License`
  ];
  if (license === 'none') {
    return renderEmpty;
  } else {
    return licenseArr;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const liSec = renderLicenseSection(data.license)
  const libadge = renderLicenseBadge(data.license);
  const liLink = renderLicenseLink(data.license)
  console.log(liSec);
  return `${libadge}
  # ${data.title}
    
   ${data.description}
  
  ## Table of Contents
  - [Installation Instructions](#installation-instructions)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Questions](#questions)
  ${liSec[0]}
  
  ## Installation Instructions
  ${data.installation}
  ## Usage 
  ${data.usage}  
  
  ## Test Instructions
  
  ## Contribution Guidlines
  
  ## Questions
  If you want to contact me find me on [Github](https://github.com/${data.github}) or via [email](${data.email})
 
  ${liSec[1]}
  ${liLink}

`;
}

module.exports = {
  generateMarkdown,
};
