const para =  document.querySelector('body > h1');

console.log(para);

const paras = document.querySelectorAll('p')
console.log(paras[2]);

//--------------Get an element by ID--------------------//
//const title =  document.getElementById('page-title');
//console.log(title);

//--------------Get elements by their class name--------//
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);


//--------------Get elements by their tag name----------//
const paras1 =  document.getElementsByTagName('p');
console.log(paras1);
console.log(paras1[1]);

const para2 = document.querySelector('p');
console.log(para.innerText);
para2.innerText = 'Bienvenido';

const para3 = document.querySelector('p');
const paras2 =  document.querySelectorAll('p');
paras2.forEach(para3 =>{
    console.log(para3.innerText);
    para3.innerText +=' New text';
});

const content =  document.querySelector('.content');
console.log(content.innerText);
content.innerHTML += '<h2>This is a new h2</h2>';

const people = ['Angel', 'Alberto','May','Catzin'];
people.forEach(person=>{
content.innerHTML +=`<p>${person}</p>`;
});

const link =  document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.thenetninja.co.uk');
console.log(link.getAttribute('href'));
link.innerText= 'The Net Ninja Website';

const mssg = document.querySelector('b');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','Success');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('style','color: green');

const title =  document.querySelector('h1');
title.setAttribute('style', 'margin: 70px;');

console.log(title.style);
console.log(title.style.color);
title.style.margin ='100px';
title.style.color ='blue';
title.style.fontSize='100px'

const content1 = document.querySelector('h2');
console.log(content1.classList);