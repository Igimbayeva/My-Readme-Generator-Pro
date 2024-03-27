// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions to prompt the user to enter their information
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];