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
     data.learn + "\n" , () => {
        console.log("file was written");
    } );
  }

  