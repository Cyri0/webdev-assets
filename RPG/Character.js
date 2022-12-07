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
        this.DOM_element.style.backgroundSize = '1000%'
        this.DOM_element.style.imageRendering = 'pixelated'
        this.DOM_element.style.backgroundPositionY = this.size * this.id + "px"
    }

    startIdle = (speed = 100) => {
        let steps = [8,2]
        let index = 0

        setInterval(() => {
            this.DOM_element.style.backgroundPositionX = steps[index] * this.size + "px"

            index = index < steps.length ? index += 1 : 0

        }, speed);

    }

    switchCharacter = (step) => {
        this.id += step
        console.log(this.id)
        this.DOM_element.style.backgroundPositionY = this.size * this.id + "px"
    }
}


// let c1 = new Character(
//     {}
// )