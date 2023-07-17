// var awesome = prompt("Please enter your name", "Rahul");
// console.log(awesome);
/*
function AwesomeFunc(){
    console.log("hello");
    console.log("and");
    console.log("goodbye");
}

function Sum(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
function SumReturn(num1, num2){
    var result= num1 + num2;
    return result;
}
AwesomeFunc();
Sum(4, 7);
console.log(SumReturn(14, 6));


// Bitwise operator
var num1 = 27;
var num2 = 22;

// AND operator
console.log(num1 & num2);

// 27 in binary

// 16 8 4 2 1
// 1  1 0 1 1

//22 in banary

// 16 8 4 2 1
// 1  0 1 1 0

// 1  1 0 1 1
// 1  0 1 1 0 &
// 1  0 0 1 0 = 18


// cookie
function SetCookie(){
  document.cookie="username=rahul"
}
function GetCookie(){
    console.log(document.cookie);
}


// page Redirect
function Redirect(){
    window.location="https://www.google.com"
}

// dialogue box
function AlertClick()
{
    alert("Stop clicking me !!");
}

function ConfirmClick()
{
   var value = confirm("Are you Batman?");
   console.log(value);
}

// print method
function Print(){
    window.print();
}

// math
console.log(Math.PI);


// classes, inheritance

class Vehicle
{

    constructor(x, y)
    {
        console.log("This is the constructor");
        console.log("The x postion is: "+ x);
        console.log("The y postion is: "+ y);
     
        this.x = x;
        this.y = y;
   }

   vehicleFun(){
    console.log("This function is from the Vehicle class");
   }
}

class Car extends Vehicle
{

   EpicFun()
   {
    console.log("This is an epic function");
   }

   static StaticFun(){
    console.log("This is epicly static");
   }
}

class Bike extends Vehicle
{

}

var carObj = new Car(56, 78);
var carObj2 = new Car(90, 0);
var bikeObj = new Bike(0, 0);

console.log("("+ carObj.x + "," + carObj.y + ")");
console.log("("+ carObj2.x + "," + carObj2.y + ")");

carObj.EpicFun();
Car.StaticFun();

var isValid =carObj instanceof Car;
var isValid2 =bikeObj instanceof Car;
console.log(isValid);
console.log(isValid2);

bikeObj.vehicleFun();


// error handeling
var num1= 9;
var num2= 0;

try
{
    if(num2 == 0){
        throw("You cannot divide by zero");
    }
    else{
        console.log(num1/num2);
    }

}
catch (error){
    console.log(error);
}
finally
{
    console.log("This code is immortal!!!");
}

*/

function ValidationFunc(){
    console.log("Working");
    var var1 = document.EpicForm.Username.value;
    
    console.log(var1);
    if(var1 == "")
    {
        console.log("It is empty");
    }
    else if(var1.length < 10)
    {
        console.log("Length should be atleast 10");
    }
    else{
        console.log("Fantastic");
    }
}

