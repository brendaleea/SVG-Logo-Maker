const inquirer = require("inquirer");
const fs = require('fs')
const { Circle, Square, Triangle } = require("./lib/shapes");



const questions = [
  {
    type: "input",
    message: "TEXT: Enter up to 3 characters:",
    name: "Text",
  },
  {
    type: "input",
    message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    name: "Text_Color",
  },

  {
    type: "input",
    message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    name: "Shape_Color",
  },

  {
    type: "list",
    message: "Please select a Shape:",
    name: "Shape",
    choices: ["Circle", "Square", "Triangle"],
  },
]










function generateSVG(shape,answers,) {
 return `
 <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 ${shape.render()}
 </svg>

 ` 
}


function init() {
  inquirer.prompt(questions)



  .then((answers) => {
  
    if(answers.Shape=="Circle"){
      const circle = new Circle (answers.Shape_Color) 
      fs.writeFileSync("./logo.svg", generateSVG(circle,answers))
    }
    if(answers.Shape=="Square"){
      const circle = new Square (answers.Shape_Color)
      fs.writeFileSync("./logo.svg", generateSVG(square,answers))
    }
  
    if(answers.Shape=="Triangle"){
      const circle = new Triangle (answers.Shape_Color)
      fs.writeFileSync("./logo.svg", generateSVG(triangle,answers))
    }
  
  })
  
  


}

init()