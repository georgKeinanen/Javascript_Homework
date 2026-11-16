'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const select=document.querySelector('#target')
for (let i of students)
  {let option=document.createElement('option')
    option.value = i.id;
    let text=document.createTextNode(`${i.name}`)
  option.appendChild(text);
  select.appendChild(option)}



