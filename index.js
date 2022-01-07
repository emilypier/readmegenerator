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
  {
    type: "confirm",
    name: "confirmImage",
    message: "Would you like to include an image?",
    default: true,
  },
  {
    type: "checkbox",
    name: "languages",
    message: "What did you build this project with? (Check all that applies)",
    choices: [
      "JavaScript",
      "HTML",
      "CSS",
      "ES6",
      "jQuery",
      "Bootstrap",
      "Node",
    ],
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project? Hit enter to skip.",
  },
  {
    type: "input",
    name: "install",
    message: "Provide installation information for your project? Hit enter to skip.",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage instructions for your project? Hit enter to skip.",
  },
  {
    type: "list",
    name: "license",
    message: "Chose a license.",
    choices: [
      "MIT", 
      "Babel",
      ".NET", 
      "Core", 
      "Rails", 
      "No license"
    ]
  },
  {
    type: "confirm",
    name: "confirmCredits",
    message: "Did anyone help with this project?",
    default: false,
  },
  {
    type: "input",
    name: "tests",
    message: "Provide instructions on how to test project? Hit enter to skip.",
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
    writeToFile("README.md", generateMarkdown({ ...userResponse }))
  });
}

init();
