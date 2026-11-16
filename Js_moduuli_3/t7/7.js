'use strict';
let image=document.querySelector('#target')
image.addEventListener('mouseover', function moused()
{image.src='img/picB.jpg';})

image.addEventListener('mouseout', function unmoused()
{image.src='img/picA.jpg';})
console.log('Gadzooks :O It dances if you mouse and unmouse repeatedly')