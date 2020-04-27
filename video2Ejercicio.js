//console.log(1);
//console.log(2);
//alert('Hello, world');
let age = 25;
let year1 = 2020;
console.log(age,year1);

age = 30;
console.log(age);

const points = 100;
//points = 50;
console.log(points);

var score = 75;
console.log(score);

//Strings
console.log('Hello, May');
let email = 'a.a.m.catzin@gmail.com';
console.log(email);
//Strings concatenations
console.log('El auto es un:');
let marca = 'Ford ';
let modelo = 'Mustang ';
let año = '2020';
let nombreCompleto = marca+modelo+año;
console.log(nombreCompleto);
//Gettin characters
console.log(nombreCompleto[0]);
//String length
console.log(nombreCompleto.length);
//String methods
console.log(nombreCompleto.toUpperCase());
let result = nombreCompleto.toLowerCase();
console.log(result,nombreCompleto);

let index =  email.indexOf('@');
console.log(index);
//Common string methods
//let result1 = email.lastIndexOf('i');
//let result1 = email.slice(0,12);
//let result1 =email.substr(0,12);
let result1 = email.replace('a', 'A');
console.log(result1);

let radius = 10;
const pi = 3.14;

//math operators +,-,*,/,**,%
//console.log(radius/pi);
//let result2 = pi * radius**2;
//order of operations - BIDMANS
let result2 = 5*(10-3)**2;
console.log(result2);
let likes = 10;
likes= likes +1;
likes++;
likes +=10;
likes -=11;
likes *= 2;
//likes /=2;
console.log(likes);

//console.log(5/'hello');

let result3 ='My years of life are: '+likes;
console.log(result3);
//template strings
const title = 'Best sports cars of 2020';
const author = 'May';
const likes1 =30;
//concatenation way
let result4 = 'The blog called '+ title + ' by '+ author + ' has ' + likes1 + ' likes';
console.log(result4);
//template string way
//let result5 = 'The blog called ${title} by ${author} has ${likes1} likes';
//console.log(result5);
//creating html templates
let html = `<h2>${title}</h2>
            <p>by ${author}</p>
            <span>This blog has ${likes} likes </span>`;

console.log(html);

let myName = ['Angel', 'Alberto','May','Catzin'];
myName[1]='Pero';
console.log(myName[1]);

let ages = [18,19,20,21,22];
console.log(ages[2]);

let random = ['may',22,'mustang',2020];
console.log(random);

//arrays methods
let resultado = myName.join('-');
//let resultado= myName.indexOf('Pero-Catzin');
//let resultado = myName.concat(['caro','o']);
//let resultado = myName.push('caro'); 
//let resultado = myName.pop('messi');
console.log(resultado);

let year = null;
console.log(year, year + 2020, `The year is ${year}`);
//Booleans & comparisons
console.log(true, false,"true","false");
let gmail = 'a.a.m.C@gamil.com';
let names = ['Angel', 'Alberto','May','Catzin'];
//let resultado1 = email.includes('!');
let resultado1 = names.includes('May');
console.log (resultado1);

//Comparison operators
let number = 22;
//.log(number==22);
//console.log(number==2);
//console.log(number!=22);
//console.log(number<22);
//console.log(number<=22);
//console.log(number>=22);
let name= 'may';
console.log(name=='may');
console.log(name=='May');
console.log(name>'Prayed');
console.log(name>'May');
console.log(name>'Prayed');

//loose comparison (different types can still be equal)
let number1 = 100;
console.log(number1 == 200);
console.log(number1 == '200');
console.log(number1 != 200);
console.log(number1 != '200');
//Strict comparison (different types cannot be equal)
console.log(number1===25);
console.log(number1==='25');
console.log(number1!==25);
console.log(number1!=='25');

//type conversion
let score2 = '100';
score2= Number(score2);
console.log(score2+1);
console.log(typeof score);

//let resul = Number('hello');
//let resul = String(50);
let resul = Boolean(0);
console.log(resul);
console.log(typeof resul);