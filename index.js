const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

//creates an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name? (required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username",
    validate: (gitHubUsername) => {
      if (gitHubUsername) {
        return true;
      } else {
        console.log("Please enter your Github username.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        console.log("Please enter your email.");
        return false;
      }
    },
  },
  // {
  //   type: 'checkbox',
  //   name: 'languages',
  //   message: 'What did you build this project with? (Check all that applies)',
  //   choices: [
  //     'JavaScript',
  //     'HTML',
  //     'CSS',
  //     'ES6',
  //     'jQuery',
  //     'Bootstrap',
  //     'Node',
  //   ],
  // },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
    validate: description => {
      if (description) {
        return true;
      } else {
        console.log('Please add a description of your project.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'install',
    message: 'Provide installation information:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: [
      'MIT', 
      'Babel',
      '.NET', 
      'Core', 
      'Rails', 
      'No license'
    ]
  },
  {
    type: 'input',
    name: 'credits',
    message: "If there was a contributor, list their GitHub username:",
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions:',
  },
];

//writes README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//initializes app
function init() {
  inquirer.prompt(questions).then((userResponse) => {
    console.log(userResponse);
    writeToFile('README.md', generateMarkdown({ ...userResponse }))
  });
}

init();
