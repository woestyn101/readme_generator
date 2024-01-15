import inquirer from 'inquirer';
//var inquirer = require('inquirer');
import * as fs from'fs';



firstQuestions();


// first Questions for title and description

function firstQuestions(){
    inquirer
  .prompt([
    
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
  .then((data) => {
   
   console.log(data.title);
   console.log(data.motivation);
   console.log(data.build);
   fs.writeFile('./README.md',
   "\n\n" + "# " + data.title + "\n\n" +
   "## Description " + "\n" +
    data.motivation + "\n" +   
    data.build + "\n" + 
    data.solve + "\n" + 
    data.learn + "\n\n" +
    "## Table of Contents: " + "\n\n" +
    "[Installation](#Installation)" + "\n" + 
    "[Video Link](#video)" + "\n" + 
    "[Usage](#usage)" + "\n" + 
    "[Credits](#credits)" + "\n" +     
    "[Questions](#questions)" + "\n" + 
    "[License](#license)" + "\n\n", () => {
    console.log("file was written");
    askInstallation();   
   
   
} );

  }).catch((error) => {
    if (error.isTtyError) {
      console.log(error)
    } else {
     
    }
  });
}

// asking installation instructions

const installationArray =[];

const installationQuestions = [
    {
        type: 'input',
        name: 'installation',
        message: "Add an installation instruction:",
        default: ""
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: "Do you want to add another installation instruction?",
        default: true,
    },
   
   
];

// repeat installation question

function askInstallation(){
    inquirer.prompt(installationQuestions)
    .then((answers2) => {
        installationArray.push(answers2.installation);
        if (answers2.askAgain) {
           askInstallation();
        }else{
            console.log("Installation instructions:", installationArray.join(','));
            looping(installationArray);
            addVideo();
          
        }
        

    });
    
}

// add usage question

function addUsage(){
    inquirer.prompt(
        {
            type: 'input',
            name: 'usage',
            message: "What is the usage of this project?",
            default: ""
        },
    )
    .then((answers) => {   
    fs.appendFile('./README.md', "\n\n" + "## Usage" + "\n\n" + answers.usage + "\n\n", function (err) {
        if (err) throw err;
        // calling next function
           askContribution();
      
      });

    })
}

// video link question

function addVideo(){
    inquirer.prompt(
        {
            type: 'input',
            name: 'video',
            message: "Provide a video link?",
            default: ""
        },
    )
    .then((answers) => {
       fs.appendFile('./README.md', "\n\n" + "## Video" + "\n\n" + answers.video + "\n", function (err) {
        if (err) throw err;
        // add next function
           addUsage();
      
      });

    })
}




// asking and outputting contribution questions:

const contributionArray =[];

const contributionQuestions = [
    {
        type: 'input',
        name: 'credits',
        message: "Add a credits/contribution:",
        default: ""
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: "Do you want to add another credits/contribution?",
        default: true,
    },
   
   
];

// function to repeat Contribution question

function askContribution(){
    inquirer.prompt(contributionQuestions)
    .then((answers2) => {
        contributionArray.push(answers2.credits);
        if (answers2.askAgain) {
           askContribution();
        }else{
            console.log("Your contributions:", contributionArray.join(','));
            loopingContribution(contributionArray);
            
       // call next function
            addQuestions();
          
        }

    });
}

  // looping through installaion array and outputting to file
function looping(array){
    fs.appendFile('./README.md', "## Installation"+ "\n\n", function (err) {
        if (err) throw err;
           
      });

    for (var i = 0; i < array.length; i++){
        fs.appendFile('./README.md', "- " + array[i] + "\n", function (err) {
            if (err) throw err;
                    
          });
    }
}

// looping through contribution array and outputting to file
function loopingContribution(array){
    fs.appendFile('./README.md', "\n\n" + "## Credits" + "\n\n", function (err) {
        if (err) throw err;
       
      
      });

    for (var i = 0; i < array.length; i++){
        fs.appendFile('./README.md', "- " + array[i] + "\n", function (err) {
            if (err) throw err;
           
          
          });
    }
}


// add questions for github username, profile and email
  
function addQuestions(){
    inquirer.prompt(
        [
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
    ]
        
    )
    .then((answers) => {
   console.log(answers.username);
   console.log(answers.githubProfile);
   console.log(answers.email);
    fs.appendFile('./README.md',
    "## Questions" + "\n\n" + 
     "Github Username: " +  answers.username + "\n" + 
     "Github profile: " + answers.githubProfile + "\n" +
     "email: " + answers.email, function (err) {
        if (err) throw err;
       // add next function
      addLicense();
      
      });

    })
}


//add license question

function addLicense(){
    inquirer.prompt(
        {
            type: 'list',
            name: 'license',
            message: "Choose a license:",
            choices: ['Apache License 2.0',
                 'GNU General Public License v3.0', 
                'MIT License',
                'Mozilla Public License 2.0',
                'Boost Software License 1.0'],
            default: "MIT License"
        },
    )
    .then((answers) => {
       fs.appendFile('./README.md', "\n\n" + "## License" + "\n\n" + answers.license + "\n", function (err) {
        if (err) throw err;
      
       getLicense(answers);
      
      });

    })
}


function getLicense(mydata) {

    // setting badge variables

    var apacheBadge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";

    var gnuPublicBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";

    var mitBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"

    var mozillaBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

    var boostBadge = "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";

    //check which license has been selected

    if (mydata.license === "Apache License 2.0"){
           addBadge(apacheBadge);
    }else if (mydata.license === "GNU General Public License v3.0"){
   
           addBadge(gnuPublicBadge);
    }
    else if (mydata.license === "MIT License"){
           addBadge(mitBadge);
        }
    else if (mydata.license === "Mozilla Public License 2.0"){
            addBadge(mozillaBadge);
            }
    else{
            addBadge(boostBadge);
    }

      // adding a badge to the top of the page  

        function addBadge(badge1){
            fs.readFile('./README.md', 'utf8', (err, data1) => {
                if (err) {
                  throw err;
                }
              
                // Combine the new text with the existing content
                const badgeAdded = badge1 + data1;
              
                // Write the updated content back to the file
                fs.writeFile('./README.md', badgeAdded, 'utf8', (err) => {
                  if (err) {
                    throw err;
                  }
                  console.log('Badge added to the beginning of the file.');
                });
              });


        }

    
  }
