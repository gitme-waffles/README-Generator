// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "MPL 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    case "WTFPL":
      return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
    default:
      return " ";
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0":
      return "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
    case "MIT":
      return "[MIT](https://opensource.org/licenses/MIT)";
    case "MPL 2.0":
      return "[MPL 2.0](https://opensource.org/licenses/MPL-2.0)";
    case "The Unlicense":
      return "[The Unlicense](http://unlicense.org/)";
    case "WTFPL":
      return "[WTFPL](http://www.wtfpl.net/about/)";
    default:
      return " ";
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const renderEmpty = {
    tableOfContents: "",
    title: "",
  };
  const licenseObj = {
    tableOfContents: "- [License](#license)",
    title: `- - -
  ## License`,
  };

  return license === "none" ? renderEmpty : licenseObj;
}

// function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  const licensebadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);

  return `${licensebadge}
  # ${data.title}
    
   ${data.description}
  
  ## Table of Contents
  - [Installation Instructions](#installation-instructions)
  - [Usage](#usage)
  - [Test Instructions](#test-instructions)
  - [Contributing](#contribution-guidlines)
  - [Questions](#questions)
  ${licenseSection.tableOfContents}
  
  ## Installation Instructions
  ${data.installation}
  ## Usage 
  ${data.usage}  
  
  ## Test Instructions
  ${data.test}
  ## Contribution Guidlines
  ${data.contribution}
  ## Questions
  Contact me on [Github](https://github.com/${data.github}) or via [email](${data.email}) if you have any questions 
 
  ${licenseSection.title}
  ${licenseLink}

`;
}

module.exports = {
  generateMarkdown,
};
