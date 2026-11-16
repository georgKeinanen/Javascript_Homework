'use strict';
const lista=document.querySelector('#target')
const list_item1=document.createElement('li');
const list_item2=document.createElement('li');
const list_item3=document.createElement('li');
let text1=document.createTextNode('Fist item')
list_item1.appendChild(text1);
lista.appendChild(list_item1);
let text2=document.createTextNode('Second item')
list_item2.appendChild(text2);
lista.appendChild(list_item2);
let text3=document.createTextNode('Third item')
list_item3.appendChild(text3);
lista.appendChild(list_item3);

