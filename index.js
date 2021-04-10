// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
        validate: emailtInput => {
            if(emailtInput){
                return true;
            } else {
                console.log('Please enter the name of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github profile link',
        validate: githubInput => {
            if(githubInput){
                return true;
            } else {
                console.log('Please enter the name of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'Please enter the name of your project',
        validate: projectInput => {
            if(projectInput){
                return true;
            } else {
                console.log('Please enter the name of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please enter your a description of your project:',
        validate: projectInput => {
               if(projectInput){
                  return true;
              } else {
                  console.log('Please enter the name of your project!');
                  return false;
              }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter instructions to install your project:',
        validate: installInput => {
             if(installInput){
                return true;
              } else {
                   console.log('Please enter the name of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your project be used?',
        validate: installInput => {
             if(installInput){
                return true;
              } else {
                   console.log('Please enter the name of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please enter instructions for how to contribute to this project:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter instructions to test your app:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'ISC', 'No License']
    },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data)  => {
    return new Promise((resolve, reject) => {
        // create README.md in dist directory 
        fs.writeFile('./dist/README.md', (fileName, data), err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
          }
          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
            ok: true,
            message: 'File created!'
          });
        })
    })
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init()
.then(data => {
    console.log(data)
    return generateMarkdown(data);
})
.then(data => {
    return writeToFile('README.md',data)
})
