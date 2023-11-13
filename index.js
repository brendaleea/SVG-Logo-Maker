const inquirer = require("inquirer");
const { circle, Square, Triangle } = require("./lib/shapes");
const inquirer = require('./node_modules/graceful-fs/graceful-fs')



const questions = [
  {
    type: "input",
    message: "TEXT: Enter up to 3 characters:",
    name: "Text",
  },
  {
    type: "input",
    message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    name: "Text-Color",
  },

  {
    type: "input",
    message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    name: "Shape-Color",
  },

  {
    type: "list",
    message: "Please select a Shape:",
    name: "Shape",
    choices: ["Circle", "Square", "Triangle"],
  },
];
