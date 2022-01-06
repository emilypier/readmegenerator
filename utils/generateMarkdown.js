//-------------LICENSE SECTION -----------------
//returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "No license"){
    return `![${license} license](https://img.shields.io/badge/license-${license}-yellow)`
  }
  return '';
};

//returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "No license"){
    return "\n* [License](#license)\n"
  }
  return '';
};

//returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No license"){
    return `## License
    
    `
  }
  return '';
};

//returns the license text for the under the License heading
function renderLicense(license) {
  if (license !== "No license"){
    return `${license}
    
    `
  }
  return '';
};

//-------------DESCRIPTION SECTION -----------------
//returns description based on what user enters
// If there is no description, return an empty string
function renderDescription(description) {
  if (description !== " "){
    return `${description}`;
  }
  return '';
};

//returns description link
// If there is no description, return an empty string
function renderDescriptionLink(description) {
  if (description !== " "){
    return `\n* [Description](#description)\n
    s
    `
  }
  return '';
};

//returns the description section of README?
// If there is no description, return an empty string
function renderDescriptionSection(description) {
  if (description !== ""){
    return `## Description
    
    `
  }
  return '';
};

//-------------LICENSE SECTION -----------------

//generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description 
  ${renderDescription(data.description)}

## Table of Contents 

${renderDescriptionLink(data.description)}
* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Credits](#credits)



## Installation



## Usage 



## Credits



## License
${renderLicense(data.license)}


## Features



## Contributing



## Tests


`;
}

module.exports = generateMarkdown;
