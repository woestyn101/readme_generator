import inquirer from 'inquirer';
//var inquirer = require('inquirer');
import * as fs from'fs';



firstQuestions();



function firstQuestions(){
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
  .then((data) => {
    // Use user feedback for... whatever!!
   console.log(data.title);
   console.log(data.motivation);
   console.log(data.build);
   fs.writeFile('./README2.md',
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

  })
 


 
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}
// console.log("\nFile Contents of file before append:", 
// fs.readFileSync("./README2.md", "utf8")); 
    
// fs.appendFile("./README2.md", " - GeeksForGeeks", 
//   { encoding: "latin1", mode: 0o666, flag: "a" }, 
//   (err) => { 
//     if (err) { 
//       console.log(err); 
//     } 
//     else { 
//       // Get the file contents after the append operation 
//       console.log("\nFile Contents of file after append:", 
//         fs.readFileSync("./README2.md", "utf8")); 
//     } 
//   }); 

// asking installation instructions

const installationArray =[];

const installationQuestions = [
    {
        type: 'input',
        name: 'installation',
        message: "Add installation instructions:",
        default: ""
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: "Do you want to add more installation instructions",
        default: true,
    },
   
   
];



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
   // console.log(answers);
    fs.appendFile('./README2.md', "\n\n" + "## Usage" + "\n" + answers.usage + "\n\n", function (err) {
        if (err) throw err;
       // console.log('Saved!');
       askContribution();
      
      });

    })
}

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
   // console.log(answers);
    fs.appendFile('./README2.md', "\n\n" + "## Video" + "\n\n" + answers.video + "\n", function (err) {
        if (err) throw err;
       // console.log('Saved!');
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
        message: "Any credits/contributions to this project?",
        default: ""
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: "Add More credits/contributions to this project?",
        default: true,
    },
   
   
];

function askContribution(){
    inquirer.prompt(contributionQuestions)
    .then((answers2) => {
        contributionArray.push(answers2.credits);
        if (answers2.askAgain) {
           askContribution();
        }else{
            console.log("Your contributions:", contributionArray.join(','));
            loopingContribution(contributionArray);
            
    
            addQuestions();
          
        }

    });
}


function looping(array){
    fs.appendFile('./README2.md', "## Installation"+ "\n\n", function (err) {
        if (err) throw err;
       // console.log('Saved!');
      
      });

    for (var i = 0; i < array.length; i++){
        fs.appendFile('./README2.md', "- " + array[i] + "\n", function (err) {
            if (err) throw err;
           // console.log('Saved!');
          
          });
    }
}

function loopingContribution(array){
    fs.appendFile('./README2.md', "## Credits"+ "\n\n", function (err) {
        if (err) throw err;
       // console.log('Saved!');
      
      });

    for (var i = 0; i < array.length; i++){
        fs.appendFile('./README2.md', "- " + array[i] + "\n", function (err) {
            if (err) throw err;
           // console.log('Saved!');
          
          });
    }
}



  
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
    fs.appendFile('./README2.md',
    "## Questions" + "\n\n" + 
     "Github Username: " +  answers.username + "\n" + 
     "Github profile: " + answers.githubProfile + "\n" +
     "email: " + answers.email, function (err) {
        if (err) throw err;
       // console.log('Saved!');
       //askContribution();
      // writeSomething(answers);
      addLicense();
      
      });

    })
}



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
   // console.log(answers);
    fs.appendFile('./README2.md', "\n\n" + "## License" + "\n\n" + answers.license + "\n", function (err) {
        if (err) throw err;
       // console.log('Saved!');
       writeSomething(answers);
      
      });

    })
}


function writeSomething(mydata) {

    var apacheBadge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";

    var gnuPublicBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";

    var mitBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"

    var mozillaBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

    var boostBadge = "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";

    if (mydata.license === "Apache License 2.0"){
        console.log("Apache");
        addBadge(apacheBadge);
    }else if (mydata.license === "GNU General Public License v3.0"){
    console.log("public");
    addBadge(gnuPublicBadge);
    }
    else if (mydata.license === "MIT License"){
        console.log("MIT");
        addBadge(mitBadge);
        }
    else if (mydata.license === "Mozilla Public License 2.0"){
            console.log("Mozilla");
            addBadge(mozillaBadge);
            }
    else{
        console.log("Boost");
        addBadge(boostBadge);
    }




    console.log(mydata.license);

        function addBadge(badge1){
            fs.readFile('./README2.md', 'utf8', (err, data1) => {
                if (err) {
                  throw err;
                }
              
                // Combine the new text with the existing content
                const updatedContent = badge1 + data1;
              
                // Write the updated content back to the file
                fs.writeFile('./README2.md', updatedContent, 'utf8', (err) => {
                  if (err) {
                    throw err;
                  }
                  console.log('Text added to the beginning of the file.');
                });
              });


        }

    
  }
