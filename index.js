import inquirer from 'inquirer';
//var inquirer = require('inquirer');
import * as fs from'fs';

// fs.readFile('./hello.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'title',
        message: "What is the title?",
        default: ""
    },
    {
        type: 'input',
        name: 'motivation',
        message: "What was your motivation?",
        default: ""
    },
    {
        type: 'input',
        name: 'build',
        message: "Why did you build this project?",
        default: ""
    }, 
    {
        type: 'input',
        name: 'solve',
        message: "What problem does it solve?",
        default: ""
    },
    {
        type: 'input',
        name: 'learn',
        message: "What did you learn?",
        default: ""
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the installation instructions?",
        default: ""
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is the usage of this project?",
        default: ""
    },
    {
        type: 'input',
        name: 'credits',
        message: "Any credits/contributions to this project?",
        default: ""
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license:",
        choices: ['Apache License 2.0',
             'GNU General Public License v3.0 ', 
            'MIT License',
            'Mozilla Public License 2.0',
            'Boost Software License 1.0'],
        default: "MIT License"
    },
    {
        type: 'input',
        name: 'username',
        message: "What is you github username?",
        default: ""
    },
    {
        type: 'input',
        name: 'githubProfile',
        message: "What is your github profile link?",
        default: ""
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
        default: ""
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.title);
    console.log(typeof(answers));
      writeToFile(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  function writeToFile(data){
    fs.writeFile('./README.md', 
    
    "# " + data.title + "\n\n" +
    "## Description " + "\n" +
     data.motivation + "\n" +   
     data.build + "\n" + 
     data.solve + "\n" + 
     data.learn + "\n\n" +
     "## Table of Contents: " + "\n\n" +
     "[Installation](#Installation)" + "\n" + 
     "[Usage](#usage)" + "\n" + 
     "[Credits](#credits)" + "\n" + 
     "[License](#license)" + "\n" + 
     "[Questions](#questions)" + "\n\n" + 
     "## Installation"+ "\n\n" + 
     data.installation + "\n\n" + 
     "## Usage" + "\n\n" +
     data.usage + "\n\n" + 
     "## Credits" + "\n\n" +
     data.credits + "\n\n" +
     "## License" + "\n\n" + 
     data.license + "\n\n" + 
     "## Questions" + "\n\n" + 
     data.username + "\n" + 
     data.githubProfile + "\n" +
     data.email, () => {
        console.log("file was written");
    } );
  }

  