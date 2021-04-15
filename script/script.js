// var, let, const
// let x
// x=5

// const
// const my_fave_number=7

// boolea
// let i = true 

// implicit

// let num = Number('7'+7+7)*2

// Type casting
// let strnum=parseInt("10");
// let newAmount=parseFloat("10.5")

//concatenation

// let greating = "Hello"
// let name = "Joe"
// console.log(greating+" "+name+"")

// template literals

// console.log(`${greating} ${name}, How are you?`)

// console.log (num)
// console.log (typeof i)

// Flow and control

// let y = false
// if (y) {
//     console.log(true)}
//     else if (y === false){
//         console.log('This Won\'t run')
//     }
//  else {
//     console.log(false)
// } 

// && (and) both need to be true
// || (or) one needs to be true

// let temp = 40
// if (temp > 30 || temp < 45){
//     console.log('Going for a drive')
// } else {
//     console.log('Not going for a drive')
// }



// for loop

// for (let i = 0; i < 10; i++){
//     console.log('for loop', i)
// } 

// for( let bottle = 10; bottle >= 0; bottle --){
//     if (bottle === 0){
//         console.log("go buy more")
//     } else {
//         console.log(`${bottle}still more to drink`)
//     }
// }

// start
// let n = 0;
// end
// while (n > 10){
//     n++
//     console.log(n)
// }

// do {
//     n = n + 1
//     console.log(n)
// }while (n < 10)

// Switch case

// switch (n){
//     case 3:
//         console.log('three')
//         break;
//         case 1:
//             console.log('one')
//             break;
//             case 2:
//                 console.log('two')
//                 break;
//                 default:
//                     console.log('default')
//                     break; 
// }


// const my_fave_number = 7 // this variable cannot be changed

// console.log (my_fave_number); // print 7

//let x = 10 + my_fave_number // we can use the const

//console.log (x) // prints 17

//my_fave_number = 9 // error , this cannot be changed

// let a = "Hello, World!"; // <-- Had to get that one out of the way!
// let b ='This is JavaScript!'; // Can use single or double quotes
// let c = "7"; //includes numbers, but not read as numbers 
// let d = "It's Seven"; //To include quotation marks in a string, you must use a different quotation inside and outside
// let e = 'It\'s Seven'; //alternatively, you can use backslashes to ignore special characters in strings

//let z = 'abc';
//console.log(typeof z); //string

//z = 1 //would throw an error in strong typed languages
//console.log(typeof z); //number


// let x = 7 + 7 + 7// 21;
// console.log(x)
        // Straight arithmetic resulting in a Number value.

//let x = 7 + 7 + "7";
        // The first two 7's are calculated (14), the last 7
        // is concatenated onto the 14 as a string.
        // resulting in a string value
        // "14" + "7" = "147"

//let x = "7" + 7 + 7;
        // The entire expression is implicitly converted
        // into a string and concatenated.
        // "7" + 7 = "77"; "77" + 7 = "777"

        // let amountRaisedSoFar = 1000;

        // let donation = prompt("How much would you like to donate?"); 
        
        // amountRaisedSoFar = Number(donation) + amountRaisedSoFar;
        
        // console.log("We have now raised: " + amountRaisedSoFar + "!");


        // let name = "Shane"; 
        // let age = 25;
        
        // console.log(`Happy Birthday ${name}! How is ${age+1} treating you?`);


        // let cups = prompt("How many cups of coffee have you had?")

        // if(cups < 3){
        //     console.log("Yes. I'll take another cup of coffee!");
        // } else {
        //     console.log("I think I'm okay for now.");
        // }
        

//         let whatever; //whatever is undefined
// if(whatever) {
// 	console.log(true);
// } else {
// 	console.log(false); //this would run
// }

// if(!whatever){
// 	console.log(false); //this would run
// }

// if(false || 0 || null){
// 	console.log(true); //since none of these evaluate to true, this will not run
// }

// let temp = 60 //$prompt("What is the current temperature?") // temp value
// let precipitation = false
// let indoors = true
// if (temp === 80){
//     console.log ("The temperature is " + temp + " degrees")
// } 
// if (temp > 80 && precipitation === false ){
//     console.log ("Time to Swim")
// } else if (indoors) {
//     console.log("Time to Swim!")
// }

// for (let i = 0; i <= 9; i++){
//     console.log(i)
// }


// Using a for loop:
// Write a simple version of "99 bottles of root beer on the wall."
//     Note: make sure you're logging the result to the console​
// Once you get the program running, log "Hey! We need more root beer!" to the console when your counter hits 0.

// for ( let bottles = 99; bottles >= 0; bottles -- ){

// if (bottles === 0){
//     console.log("Hey we need more root beer !")
// } 
// else {
//     console.log(bottles + " bottles of root beer on the wall!")
// } }

// let x = 0;
// while(x < 10) {
//     x = x + 1;
//     // or x +=1
//     // or x++
// }

// let x = 0;
// do {
//     x = x + 1;
//     // or x +=1
//     // or x++
// } while(x < 10);

// Avoid Infinite Loops
// for(let i=0, i<20, i--){  
//     //this loop will run forever
//   }
  
//   let x = 20;
//   while(x < 20){
//     if(x > 20){ //this condition cannot be met
//       x--; //this will never happen
//     }
//     //this will run forever
//   }


// for(let i = 0; i < 10; i++) {
// 	console.log(i);
// 	console.log('before break'); // will only print once
// 	break; // exits the next loop
// 	console.log('after break'); //never happens
// }

// for(let i = 0; i < 10; i++) {
// 	console.log(i);
// 	console.log('before continue'); // will print 10 times
// 	continue; // continues to the next iteration
// 	console.log('after continue'); //never happens
// }

// let x = 6
// switch(x) {
// 	case 3:
// 		console.log('three')
// 	case 1:
// 		console.log(1);
// 		//break;
// 	case 2:
// 		console.log(2);
// 		break;
// 	default:
// 		console.log('default')
// }

// console.log(test); //console: undefined
// if(!test){ //true
//   var test = true; //create and assign test
//   console.log(test); //console: true
// }
// console.log(test); //this is dangerous! 

// let test = true; 
// if(test){ 
//   let test = false; //this is a completely new variable that only exists in this scope
//   console.log(test); //console: false
// }
// console.log(test); //console: true

// let test = true;
// console.log(test); // true
// if(test){
//   test = false;
//   console.log(test); // false
// }

// for (let i = 0; i < 10; i++){
//     console.log(i); // possible because i is within the scope
//   }
//   console.log(i); // undefined because i only existed in the loop


//   for (var i = 0; i < 10; i++){
//     console.log(i); //
//   }
//   console.log(i); // will log 9, the final value of i in the for loop, 
//               //because var declared it globally


// Challenge 1
// Do You Need More Coffee?
// Write a script that:
// Stores the number of cups (that a person has consumed) in a variable
// If the person has had *less than* 3 cups
// Log a message to the console saying: ("Yes I'll take another cup of coffee.")
// If not
// Log a message to the console saying ("I think I'm okay for now.") 

// for (let i = 0; i <= 3; i++){ 
//     if (i === 3){
//         console.log("I think I'm ok for now")
//     } else {
//         console.log( i + " Yes I'll take another cup of coffee")
//     } }


    // Challenge 2
    // Does your car need an oil change?
    // Write a script that: Stores the number of miles(that a car has) in a variable
    // If the car has *more than* 500 miles
    // Log a message to the console saying:("Yes I think I need an oil change.")
    // If not
    // Log a message to the console saying:("My car doesn't need an oil change yet.")    

// for ( i = 0; i <= 500; i++){
//     if (i === 500){
//         console.log(i + " Yes I think I need an oil change.")
//     } else {
//         console.log(i + "My car doesn't need an oil change yet")
//     }
// }

























