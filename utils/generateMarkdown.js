//------------------------LICENSE SECTION ---------------------------------
//returns the license link to table of contents
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "No license"){
    return "\n* [License](#license)\n"
  }
  return '';
};

//returns a license badge based on which license is passed in.
//If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "No license"){
    return `![${license} license](https://img.shields.io/badge/license-${license}-yellow)`
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

//------------------------DESCRIPTION SECTION ---------------------------------
//returns description based on what user enters
// If there is no description, return an empty string
function renderDescription(description) {
  if (description !== " "){
    return `${description}`;
  }
  return '';
};

//returns description link to table of contents
// If there is no description, return an empty string
function renderDescriptionLink(description) {
  if (description !== " "){
    return `\n* [Description](#description)\n
    `
  }
  return '';
};

//--------------------------INSTALLATION SECTION ---------------------------------
//returns the installation link to table of contents
//If there is no installation info, return an empty string
function renderInstallLink(install) {
  if (install !== ""){
    return "\n* [Installation](#installation)\n"
  }
  return '';
};

//returns the installation section of README
// If there is no installation info, return an empty string
function renderInstallSection(install) {
  if (install !== ''){
    return `## Installation
    
    `
  }
  return '';
};

//returns the installation info text for the under the Installation heading
function renderInstall(install) {
  if (install !== ''){
    return `${install}
    `
  }
  return '';
};

//---------------------------USAGE SECTION --------------------------------------
//returns the usage link to table of contents
//If there are no usage instructions, return an empty string
function renderUsageLink(usage) {
  if (usage !== ''){
    return '\n* [Usage](#usage)\n'
  }
  return '';
};

//returns the usage info section of README
// If there is no usage info, return an empty string
function renderUsageSection(usage) {
  if (usage !== ''){
    return `## Usage
    
    `
  }
  return '';
};

//returns the usage info text for the under the Installation heading
// If there is no usage info, return an empty string
function renderUsage(usage) {
  if (usage !== ''){
    return `${usage}
    `
  }
  return '';
};

//--------------------------CREDITS SECTION --------------------------------------
//returns the credits link to table of contents
//If there are no credits, return an empty string
function renderCreditsLink(credits) {
  if (credits !== ''){
    return '\n* [Contributing](#contributing)\n'
  }
  return '';
};

//returns the credits section of README
// If there is no credits, return an empty string
function renderCreditsSection(credits) {
  if (credits !== ''){
    return `## Contributing
    
    `
  }
  return '';
};


//---------------------------TEST SECTION --------------------------------------
//returns the test instructions link to table of contents
//If there are no test instructions, return an empty string
function renderTestsLink(tests) {
  if (tests !== ''){
    return '\n* [Tests](#tests)\n'
  }
  return '';
};

//returns the usage info section of README
// If there is no usage info, return an empty string
function renderTestsSection(tests) {
  if (tests !== ""){
    return `## Tests
    
    `
  }
  return '';
};

//returns the usage info text for the under the Installation heading
// If there is no usage info, return an empty string
function renderTests(tests) {
  if (tests !== ''){
    return `${tests}
    `
  }
  return '';
};




//generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description 
  ${renderDescription(data.description)}

  ## Table of Contents 

  ${renderDescriptionLink(data.description)}
  ${renderInstallLink(data.install)}
  ${renderUsageLink(data.usage)}
  ${renderLicenseLink(data.license)}
  ${renderCreditsLink(data.credit)}
  ${renderTestsLink(data.tests)}
* [Questions](#questions)


${renderInstallSection(data.install)}
${renderInstall(data.install)}

${renderUsageSection(data.usage)}
${renderUsage(data.usage)}

${renderLicenseSection(data.license)}
This application is covered under ${renderLicense(data.license)} license.

${renderCreditsSection(data.credits)}
https://github.com/${data.credits}


${renderTestsSection(data.tests)}
${renderTests(data.tests)}


## Questions
Visit my GitHub: https://github.com/${data.github}

Ask me questions or reach out via email. My email is ${data.email}.

`;
}

module.exports = generateMarkdown;
