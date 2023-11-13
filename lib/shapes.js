class  Shapes{
  constructor() {
    this.color=""
  }
  setcolor(color){
    this.color=color
  }

}
class Circle extends Shapes{
render(){
  return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
}

}

class Square extends Shapes{
  render(){
    return `<rect width="300" height="100 fill="${this.color}" />`
  }
  
  }

  class Triangle extends Shapes{
    render(){
      return `<polygon points="200,10 250,190 160,210" fill="${this.color}" />`
    }
    
    }
    module.exports={ Circle,Triangle,Square}