let current = document.querySelector('#currentCharacter')
let player = new Character({id:16, size: 100, ctx: current})
player.startIdle()

function turnCharacter(step){
    player.switchCharacter(step)
}