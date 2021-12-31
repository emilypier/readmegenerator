// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "No license"){
    return `![${license} license](https://img.shields.io/badge/license-${license}-yellow)`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "No license"){
    return "\n* [License](#license)\n"
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No license"){
    return `## License
    
    `
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description 



## Table of Contents 

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Credits](#credits)



## Installation



## Usage 



## Credits



## License



## Features



## Contributing



## Tests


`;
}

module.exports = generateMarkdown;
