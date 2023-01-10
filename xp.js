/* 
|Exercise 1 : List Of People
|---------------------------
|Part I - Review About Arrays
|---------------------------
*/
const people = ["Greg", "Mary", "Devon", "James"];
people.shift("Grey"); // Write code to remove “Greg” from the people array

 //Write code to replace “James” to “Jason”
if(people.includes("James")){
    let index = people.indexOf("James");
    people[index]= "Jason" ;
}
people.push("Melissa"); //Write code to add your name to the end of the people array.
console.log(people.indexOf("Mary")) //Write code that console.logs Mary’s index
console.log(people);

//Write code to make a copy of the people array using the slice method,
//the copy should NOT include “Mary” or your name.
const peopleCopy = people.slice(1);
people.indexOf("Foo"); //Write code that gives the index of “Foo”
// Result: -1 because “Foo” is not a item of people array

let last = people[people.length - 1]; //Create a variable called last which value is the last element of the array

/* 
|Exercise 1 : List Of People
|---------------------------
|Part II - Loops
|---------------------------
*/

//Using a loop, iterate through the people array and console.log each person
 for(let person in people){
    console.log(people[person]);
 }
 //Using a loop, iterate through the people array 
 //and exit the loop after you console.log “Jason”
 for(let person in people){
    if(people[person] == "Jason"){
        break;
    }
    console.log(person,people[person]);
 }

/* 
|Exercise 2 : Your Favorite Colors
|--------------------------------
|Create an array called colors where the value is a list of your five favorite colors.
|Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
|--------------------------------
*/

const colors =["Blue","Red","Gold","White","Black"];
for(let color in colors){
    let index = parseInt(color)+1;
    console.log(`My #${index} is ${colors[color]}`);
}

/*
|Exercise 3 : Repeat The Question
|--------------------------------
|Prompt the user for a number.
|While the number is smaller than 10 continue asking the user for a new number.
*/
let nbre;
nbre = parseInt(prompt("Hello, enter a number please"));
if(typeof nbre == 'number'){
    while(nbre < 10){
        nbre = prompt("Try again, enter a number please");
    }
}

/*
|Exercise 4 : Building Management
|--------------------------------
*/

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors); //Console.log the number of floors in the building.

//Console.log how many apartments are on the floors 1 and 3.
let floorOneApt = building.numberOfAptByFloor.firstFloor;
let floorThirdApt = building.numberOfAptByFloor.thirdFloor;
console.log(`Floor one has ${floorOneApt} apartments and floor third has ${floorThirdApt} apartments`);

//Console.log the name of the second tenant and the number of rooms he has in his apartment.
let secondTenantName = building.nameOfTenants[1];
let secondTenantRooms = building.numberOfRoomsAndRent["dan"][0];

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.
//If it is, than increase Dan’s rent to 1200.
let sarahRent = building.numberOfRoomsAndRent['sarah'][1];
let davidRent = building.numberOfRoomsAndRent['david'][1];
let danRent = building.numberOfRoomsAndRent['dan'][1];

if((sarahRent + davidRent) > danRent){
    danRent+=1200;
    console.log(danRent);
}

/*
|Exercise 5 : Family
|--------------------------------
|Create an object called family with a few key value pairs.
|Using a for in loop, console.log the keys of the object.
|Using a for in loop, console.log the values of the object.
*/
const family = {
    numberOfFamily: 5,
    numberOfSisters: 3,
    nameOfSisters: ["Melissa", "Sandrine", "Grâce"]
}

for(let person in family){
    console.log(`The keys is ${person}`); //console.log the keys of the object
    console.log(`Values are ${family[person]}`); //console.log the values of the object.
}

/*
|Exercise 6 : Rudolf
|--------------------------------
|Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
*/
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let inline = '';
for(let detail in details){
    inline+= detail.concat(` ${details[detail]} `)
}
console.log(inline);

/*
|Exercise 7 : Secret Group
|-------------------------
|A group of friends have decided to start a secret society.
|The society’s name will be the first letter of each of their names sorted in alphabetical order.
|Console.log the name of their secret society. The output should be “ABJKPS”
*/
let societyName='';
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
for(let name in names.sort()){
    societyName+=names[name][0];
}
console.log(societyName); //The output should be “ABJKPS”
