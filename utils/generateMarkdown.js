// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'No License'){
    return ''
  } else {
    return `[![Generic badge](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
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
  }
  else {
    return ``
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

  ## Questions
  For any questions please reach out to 
  github: ${data.github}
  email: ${data.email}

  ## License ${data.license}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
