function f0(nm) {
    return "Hello " + nm;
}

function  f1(name, g) {
    // do something here
   return g(name);

}

console.log(f1("Rahul", f0));



// 2nd example
function englishHello(nm) {
    return "Hello " + nm;
}

function  frenchHello(nm) {
    return "Bonjour " + nm;

}

function  greeting(name, g) {
    // do something here
   return g(name);

}

// if visitor is from France
console.log(greeting("Rahul", frenchHello));
//else
console.log(greeting("Rahul", englishHello));



// function returning other function

function f1() {

    return function f2() { return 5; }
}

    let x = f1(); // x now holds a function thar was returned by f1 at line 42

    console.log ( x() ); 
