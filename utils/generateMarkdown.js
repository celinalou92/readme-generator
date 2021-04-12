// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'No License'){
    return ''
  } else {
    return `[![Generic badge](https://img.shields.io/badge/License-${license.split("-").join("")}-blue.svg)](${renderLicenseLink(license)})`
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'No License'){
    return ''
  } else {
    return `https://choosealicense.com/licenses/${license.toLowerCase()}/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'No License') {
    return ''
  } else if(license === 'MIT') {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if( license === 'Apache-2.0'){
    return `
    A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if( license === 'GPL-3.0'){
    return `
    Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
  } else {
    return `
    A permissive license lets people do anything with your code with proper attribution and without warranty. The ISC license is functionally equivalent to the BSD 2-Clause and MIT licenses, removing some language that is no longer necessary.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName} ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.projectDescription}

  ## Tables of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}

  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}
  ## Questions
  For any questions please reach out to 
  github: [${data.github}](https://github.com/${data.github})
  email: ${data.email}

  ## License 
  ### ${data.license}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
