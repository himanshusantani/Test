// console.log('himanshu');
// const age = 66;
// if (age==22){
//     console.log('age is 22')
// }
// else if (age==45) {
//     console.log('age is 45')
// } 
// else if (age==65) {
//     console.log('age is 65')
// } 
// else{
//     console.log ('age is incorrect')
// }

// switch (age){
//     case 18:
//         console.log("you are 18");
//         break;

//     case 28:
//         console.log("you are 28");
//         break;

//     case 38:
//          console.log("you are 38");
//          break;

//     default:
//         console.log("you are unknown age");
//          break;
// }

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

// let j=0 ,n=100;
// while(j<=n){
//     console.log(j + 1);
//     j += 1; 
// }

// let k=10, p=100;
// while(k<=p){
//     console.log(k)
//     k+=33;
// }

// for (let i=10; i<100; i++){
//     console.log(i);
// }

// let p=10; q=90;
// while (p<=q) 
// if (p===5){
//     console.log(p + 20)
//     p+=10
// }

// function greet (name3 , name2){
//     console.log(`What are functions in JavaScript?
//     A function in JavaScript is similar to ${name3}a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious${name2} relationship between the input and the output.`)
// }
// let name3 = 'Himanshu';
// let name2 = 'Thankyou';

// greet(name3, name2)
function greet(yo){
    let msg = `Happy Birthday ${yo} thankyou`;
    return msg ;
}
let yo ='himanshu';
let val = greet(yo);
console.log(val);