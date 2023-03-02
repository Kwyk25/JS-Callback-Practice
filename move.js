function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }
}
let direction = null;
let x = 100;
let y = 250;

setInterval( function movecharacter(){

if (direction === "west"){
    x = x - 1
}
if (direction === "north"){
    y = y + 1
}
if (direction === "east"){
    x = x + 1
}
if (direction === "south"){
    y = y - 1
}

character.style.left = x + "px"
character.style.bottom = y + "px"
},1)

document.addEventListener('keydown', function(e){
    if(e.repeat) return;

    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(e.key === 'ArrowLeft'){
        direction = 'west'
        character.src = 'assets/green-character/west.gif'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
        character.src = 'assets/green-character/north.gif'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
        character.src = 'assets/green-character/east.gif'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
        character.src = 'assets/green-character/south.gif'

    }
})

document.addEventListener('keyup', function(e){
    direction = null
    character.src = 'assets/green-character/static.gif'
    
})

function handleDirectionChange(direction){
    
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
}}
    

