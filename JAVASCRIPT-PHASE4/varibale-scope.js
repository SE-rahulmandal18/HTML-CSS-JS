var x = 100;  // Global scoped variable

y = 101; // Global scoped variable
console.log(x);


function f1() {
    var x1 = 500; //local variable
    console.log("inside f1 x1=" + x1);

    i = 11;

    z = 999; // global scoped variable without var keyword

    {
        let p = 200; // local scope
        console.log("1. inside f1 p=" +p);
    }

    // console.log("2. inside f1 p=" +p); 

    for (let i=0; i<4; i++){
        console.log("i =" +i);
    }

    console.log("congratulations to all the " + i + " players for participating in this match");
}

f1();
//console.log("x1 = "+ x1);  ERROR, because x1 is local scope
console.log("z = "+ z);