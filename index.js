import inquirer from 'inquirer';


//importing questions for inquirer
import {questions, installationQuestions, videoQuestion} from './files/questions.js';
import {usageQuestion, contributionQuestions, licenseQuestion, additionalQuestions} from './files/questions.js';
import {appendToFile, appendUsagetofile, writeFirst} from './files/write_to_file.js';
import {getLicense} from './files/badges.js';

import * as fs from'fs';
//creating callback functions

firstQuestions(function(){
    askInstallation();
})

// first Questions for title and description

function firstQuestions(callback){
    inquirer
  .prompt( questions)
  .then((data) => {
    writeFirst(data, callback)
   

  }).catch((error) => {
    if (error.isTtyError) {
      console.log(error)
    } else {
     
    }
  });
}
// asking installation instructions

const installationArray =[];


// repeat installation question

function askInstallation(){
    inquirer.prompt(installationQuestions)
    .then((answers2) => {
        installationArray.push(answers2.installation);
        if (answers2.askAgain) {
           askInstallation();
        }else{

            var installationString = "## Installation"+ "\n\n"
            looping(installationArray, installationString);
            addVideo(function(){
                addUsage();
            });
           
          
        }
        

    });
    
}

// looping through array and outputting to file
function looping(array, headingString){
    fs.appendFile('./README.md', headingString, function (err) {
        if (err) throw err;
           
      });

    for (var i = 0; i < array.length; i++){
        fs.appendFile('./README.md', "- " + array[i] + "\n", function (err) {
            if (err) throw err;
                    
          });
    }
}

// video question and writing to file
function addVideo(callback){
    inquirer.prompt(
        videoQuestion
      
    )
    .then((answers) => {
        var videostring =  "\n" + "## Video" + "\n\n" + answers.video + "\n";
      appendToFile(videostring);
      callback();
    })
}


// Usage question and writing to file

function addUsage(){
    inquirer.prompt(
        usageQuestion
    )
    .then((answers) => {  
        var mystring = "## Usage" + "\n\n" + answers.usage + "\n\n"; 
    appendUsagetofile(mystring, function (){
        askContribution();
    })

    })
}



// setting contribution array

const contributionArray =[];



// function to repeat Contribution question

function askContribution(){
    inquirer.prompt(contributionQuestions)
    .then((answers2) => {
        contributionArray.push(answers2.credits);
        if (answers2.askAgain) {
           askContribution();
        }else{
          
         var contributionString = "## Credits" + "\n\n"
            looping(contributionArray, contributionString);
            
       // call next function
           // addQuestions();
           addLicense();
          
        }

    });
}


//add license question

function addLicense(){
    inquirer.prompt(
       licenseQuestion
    )
    .then((answers) => {
        var licenseString = "\n" + "## License" + "\n\n" + answers.license + "\n";

          appendToFile(licenseString);
        getLicense(answers, function(){
            addQuestions();
        });

    
    })
}

  // add questions for github username, profile and email
  // and outputting to file
  
function addQuestions(){
    inquirer.prompt(
       additionalQuestions 
    )
    .then((answers) => {
      var addQuestionsString =  "\n" + "## Questions" + "\n\n" + 
      "Github Username: " +  answers.username + "\n" + 
      "Github profile: " + answers.githubProfile + "\n" +
      "email: " + answers.email;
      appendToFile(addQuestionsString);

    })
}
