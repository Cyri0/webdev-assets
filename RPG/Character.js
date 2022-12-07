class Character{
    constructor(
        { id = 0,
          ctx = document.body,
          size = 200
        }
    ){
        this.id = id
        this.ctx = ctx
        this.size = size
        this.DOM_element = null // DIV később
        this.initDOMElement("img/characters.png")
        ctx.appendChild(this.DOM_element)
    }

    initDOMElement = (image) => {
        this.DOM_element = document.createElement("div")
        this.DOM_element.style.width = this.size + "px"
        this.DOM_element.style.height = this.size + "px"
        this.DOM_element.style.backgroundImage = `url("${image}")`
    }
}


// let c1 = new Character(
//     {}
// )