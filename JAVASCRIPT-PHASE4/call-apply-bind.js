
console.log("*** CALL DEMO *****");

let player1  = {

"name": "M.S Dhoni",
"color": "Red",
"runs":12000

};

display= function (){ return this.name + "," + this.runs};

let player2  = {

"name": "Virat Kholi",
"color": "Red",
"runs":17000

};

console.log(display.call(player1));
console.log(display.call(player2));

displayV2= function (age, noOfMatches){ return "name=" + this.name +  ", age="+age +  ", noOfMatches="+noOfMatches + ", runs=" + this.runs};
console.log(displayV2.call(player1, 34, 1005 ))



    console.log("\n\n*** APPLY DEMO *****");


    console.log(display.apply(player1));
    console.log(display.apply(player2));

    displayV2 = function (age, noOfMatches) { return "name=" + this.name + ", age=" + age + ", noOfMatches=" + noOfMatches + ", runs=" + this.runs };
    console.log(displayV2.apply(player1, [34, 1005]));


    console.log("\n\n*** BIND DEMO *****");

    let displayPlayer1Fn = display.bind(player1);

    console.log(displayPlayer1Fn());

    let displayPlayer2Fn = display.bind(player2);

    console.log(displayPlayer2Fn());


    displayV2 = function (age, matches) { return this.name + ", age=" + age + ", matches=" + matches + ", runs=" + this.runs };
    let displayPlayer1WithArgsFn = displayV2.bind(player1,34, 1005 );
    console.log(displayPlayer1WithArgsFn());

