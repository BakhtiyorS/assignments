// Conditional - lets you run different scenarios in different instances.

/*
falsey values:
false
0
"" (empty string)
undefined
null
NaN (not a number)
*/


var num = 5;

if ( num > 3) {
    console.log("Correct");
} else {
    onsole.log("Not the exact number");


}
    
/**
 Logic operators:
 && - "and operator" - both sides need to be true for the whole to be true
 false && false -> false
 false && true -> false
 true && false -> false
 true && true -> true

 || - "or operator" - ONE side needs to be true for the whole to be true
 false || false -> false
 false || true -> true
 true || false -> true
 true || true -> true
 */
// var name = "Bob"
//  if (!!name) {
//     console.log()
//  }

//  (1 > 3) && (10 < 11) -> false