// Function to render the license badge based on the license passed in
function renderLicenseBadge(license) {
  // Return the license badge based on the license type
  switch (license) {
    case 'MIT License':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache License 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'BSD License':
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return '';
  }
}

// Function to render the license link based on the license passed in
function renderLicenseLink(license) {
  // Return the license link based on the license type
  switch (license) {
    case 'MIT License':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache License 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD License':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  // License link
  const licenseLink = renderLicenseLink(data.license);

  // Google Drive link for the video clip
  const googleDriveLink = 'https://drive.google.com/file/d/18x-MrpFJ-9Z-bH0gTbQ77PmwIW876xJJ/view';

  // Generate markdown template
  let markdownTemplate = `
# ${data.title}

## Description

${data.description}

${renderLicenseBadge(data.license)}

You can access more badges and their purposes at [shields.io](https://shields.io)

## Table of Contents`;

  // Optional sections in the table of contents
  if (data.installation) markdownTemplate += `\n* [Installation](#installation)`;
  if (data.usage) markdownTemplate += `\n* [Usage](#usage)`;
  if (data.contribution) markdownTemplate += `\n* [Contribution](#contribution)`;
  if (data.testing) markdownTemplate += `\n* [Testing](#testing)`;

  // Additional sections
  markdownTemplate += `
* [Questions](#questions)
* [License](#license)

`;

  // Optional sections content
  if (data.installation) markdownTemplate += `\n## Installation\n\n${data.installation}\n`;
  if (data.usage) markdownTemplate += `\n## Usage\n\n${data.usage}\n`;
  if (data.contribution) markdownTemplate += `\n## Contribution\n\n${data.contribution}\n`;
  if (data.testing) markdownTemplate += `\n## Testing\n\n${data.testing}\n`;

  // Questions section
  markdownTemplate += `
## Questions

For further questions:\n
GitHub: [${data.github}](https://github.com/${data.github})\n
Email: [${data.email}](mailto:${data.email})\n\n`;

  // License section
  markdownTemplate += `
## License

This application is licensed under the ${data.license}.  
For more information please view the [license description](${licenseLink}).

`;

  // Video walkthrough section
  markdownTemplate += `
## Video Walkthrough

[Watch the video walkthrough](${googleDriveLink})

`;

  return markdownTemplate;
}

// Exporting the generateMarkdown function
module.exports = generateMarkdown;
