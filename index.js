// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
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
    message: "Provide some a description of your project?",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((userResponse) => {
    console.log(userResponse);
    writeToFile("README.md", generateMarkdown({ ...userResponse }))
  });
}

// Function call to initialize app
init();
