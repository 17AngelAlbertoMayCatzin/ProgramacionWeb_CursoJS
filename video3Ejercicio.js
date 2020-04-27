//For loops
for(let i = 0; 1<5;i++){
    console.log('In loop;',i);
}
console.log('Loop finished');

const names = ['Angel', 'Alberto','May','Catzin'];
for(let i = 0;i<names.length;i++){
    console.log(i);
    console.log(names[1]);
    let html = `<div>${names[i]}</div>`;
    console.log(hmtl);
} 

let m = 5;
while(m < 5){
    console.log('Val of m is: ',m);
    m++;
} 

let n= 5;
do{
    console.log('Val of n is: ',m);
    m++;
}while(n < 5);

//if Statements
const age = 27;

if(age>22){
    console.log('You are over 22 years old');
}

const autosFavoritos = ['Ford Mustang', 'Challenger Redeye', 'Camaro ZL1'];
if(autosFavoritos.length>3){
    console.log("That's a lot of cars");
}

const password = 'p@ssword';
if (password.length>=12){
    console.log('That password is night strong!');

} else if (password.length>=8){
    console.log('That password is long enough!');

} else{
    console.log('Password is not long enough');
}

//Logical operators - OR ||and AND &&
const password1 = 'p@ssword12345';
if (password1.length>=12 && password1.includes('@')){
    console.log('That password is night strong!');

} else if (password1.length>=8 || password1.includes('@') && password1.length>=5){
    console.log('That password is strong enough!');

} else{
    console.log('Password is not strong enough');
}

//logical Not (!)
let user = false;
if (user){
    console.log('You must the logged in to continue')
}
console.log(!true);
console.log(!false);

//Break and continue
const scores = [50,25,0,30,100,20,10];
for (let cont = 0; cont<scores.length;cont++){

    if (scores[cont]==0){
        continue;
    }
    console.log('Your score: ', scores[cont]);

    if(scores[cont]==100){
        console.log('Congrats, you got the top score!');
        break;
    }
}

//Switch Statements
const grade = 'D';
switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('Not a valid grade!');
}
//Using if statements
/*if (grade == 'A'){

}else if (grade == 'B'){

}else if (grade == 'C'){

}else if (grade == 'D'){

}else if (grade == 'E'){

}else{

}*/

//Variables & block scope
let number= 30;

if(true){
    let number = 40;
    let name = 'May';
    console.log('Inside 1st code block: ',number, name);
    if (true){
        let nunmber = 50;
        console.log('Inside 2nd code block: ',number);
    }
}
console.log('Outside code block: ',number,name);