const fs = require('fs');
const inquirer = require('inquirer');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username',
      validate: gitHubUsername => {
        if (gitHubUsername) {
          return true;
        } else {
          console.log('Please enter your Github username!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide some a description of your project:',
      when: ({confirmAbout}) => {
        if(confirmAbout) {
          return true;
        } else {
          return false;
        }
      }
    }
  ]);
};



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});