// this page contains all the questions for inquirer

// title and description questions

export const questions = [
    
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
   
  ];

// installation questions

  export const installationQuestions = [
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

// video link question

export const videoQuestion =  {
    type: 'input',
    name: 'video',
    message: "Provide a video link?",
    default: ""
}

//usage Question

export const usageQuestion =
{
    type: 'input',
    name: 'usage',
    message: "What is the usage of this project?",
    default: ""
}

// contribution question
export const contributionQuestions = [
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

// license question
export const licenseQuestion = {
    type: 'list',
    name: 'license',
    message: "Choose a license:",
    choices: ['Apache License 2.0',
         'GNU General Public License v3.0', 
        'MIT License',
        'Mozilla Public License 2.0',
        'Boost Software License 1.0'],
    default: "MIT License"
}

// additional questions
export const additionalQuestions =  [
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
    }
]
   