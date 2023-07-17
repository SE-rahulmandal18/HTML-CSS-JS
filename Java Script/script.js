/*
var a = "hello";
var b = "world";
console.log(a + " " + b);

var a = "a",
  b = "b",
  c = 50;
console.log(a, b, c);

var a = 10;
var b = 5;
var c = 50;


// var a = prompt("your name");
// document.write("hello, "+ a);

//var person = {};

/*
var ourFriends = {name1 : "Rahul", name2 : "David", name3 : "Mike"};
var a = 1;
console.log(ourFriends.name1);
console.log(ourFriends['name2']);
console.log(ourFriends['name' + a]);
a++;
console.log(ourFriends['name' + a]);
a++;
console.log(ourFriends['name' + a]);
*/

/*
var ourFriends = {
  person1: {
    name: "Rahul",
    age: 25,
    cars: {carMake : "Ford", carValue: 2500000}
  },

  person2: {
     name: "David", 
     age: 35 
    },

  person3: { 
    name: "Mike", 
    age: 55 
  }
};

var a = 1;
console.log(ourFriends["person" + a].name);
a++;
console.log(ourFriends["person" + a].name);
a++;
console.log(ourFriends["person" + a].name);
*/



/*
//arrays
var ourFriends = ["Rahul", "Mike", "David"];
ourFriends.push("Michle");  // push = unshift
console.log(ourFriends);
ourFriends.pop();  //pop = shift
console.log(ourFriends);

var f = ourFriends.toString();
var g = "Rahul,Mike,David";
var h = g.split(',');
var i = ourFriends.join('*');
var nFriends = ourFriends.slice(1);


var ourFriends = ["Rahul", "Mike",0, 4, 1, 5, "David"];
ourFriends.sort();
console.log(ourFriends);
ourFriends.reverse();
console.log(ourFriends);
console.log(ourFriends.indexOf("Mike"));

// array within an array
var ourFriends = [
    ["Rahul", "Mike","David"], 
    [4, 5, 6]
];
console.log(ourFriends[1][0]);

//object within array
var myarray = [{
    name1 : "Rahul",
    name2 : "Mike",
    name3 : "David"
}, 
   {
    name1: "Tina",
    name2: "Simran",
    name3: "Tanya"

   }
];
console.log(myarray[1].name2);


// array within an object
var myObj = {
    set1:  ["Rahul", "Mike","David"], 
    set2: [4, 5, 7]
};
console.log(myObj.set1[2]);


// condtional if else

var a = 5;
var b = a;
if(a < b){
    console.log('B is greater than A');
}
else if(a ==  b){
    console.log('B is equal to A');
}
else{
    console.log('was not correct and false');
}



// switch statement
var a = 5;
var message;

switch (a) {
    case 3:
        message='A was a three';
        break;
    case 5:
        message = 'A was five';
        break;
    default:
        message = 'A was none of the cases'
}
console.log(message);


var a = "world";
var message;

switch (a) {
    case "hello":
        message='A was  hello';
        break;
    case "world":
        message = 'A was world';
        break;
    default:
        message = 'A was none of the cases'
}
console.log(message);


// while and do-while loops
var ourFriends = {
    name1 : "Rahul",
    name2 : "Mike",
    name3 : "David"
};
var b = 1;
var a = 1;
while(a<4){
    console.log(ourFriends['name' +a]);
    a++;
}


do {
    console.log(ourFriends['name' +b]);
    b++;
}
while (b < 4);


// for loops
var ourFriends = {
    name1 : "Rahul",
    name2 : "Mike",
    name3 : "David"
};
for(a=1; a<4; a++){
    console.log(ourFriends['name' + a]);
}

for(a in ourFriends){
    //console.log(a);
   // console.log(ourFriends[a]);
}

var ourFriends = ["Rahul", "Mike", "David"];
for(a=0; a<ourFriends.length; a++){
    //console.log(a);
    //console.log(ourFriends[a]);
}

for(var x in ourFriends){
   //console.log(typeof x);
    //console.log(ourFriends[x]);   
}

for(x of ourFriends){
    console.log(x);
}
*/


// functions
function myfun(){
    // to be executed
    console.log("hello");
    
}
myfun();


var ourFriends = ["Rahul", "Mike", "David"];
var q = ["Rahul", "Mike", "David"];

function toArray(array, addNew){
    array.push(addNew);
    console.log(array);
    return "added new item";
}
toArray(ourFriends, "New Item");


(function(){
   var b = 5;
   var test = "Hello World init";
   console.log(test);
   if(b>7){
    return false;  // break out of function
   }
   console.log(test);

})();


// string
var a = 6;
console.log(typeof a);
a = a.toString();
console.log(typeof a);
a = parseInt(a);
console.log(typeof a);

// math
var a = 4.5;
console.log(Math.round(a)); 
console.log(Math.floor(a)); 
console.log(Math.ceil(a)); 
console.log(Math.random(a));
 
