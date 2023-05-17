//by ~potato~#4473 :)//
//Don't steal this please//
//also credit to oofie massife help lol//
var password = "Sk0o1C4rn4g3";
!


// Repeatedly prompt for user password until success:
(function closewin() {

    var psw = prompt("Enter your Password");

    while (psw !== password) {
        alert("Incorrect Password");
        closeWin();
        //return promptPass(); // potato test this out plz if it doesn't work uncomment the return thing
    }

}());

// stole this from w3schools - oofie
function closeWin() {
    close();
}



alert('Welcome to the Potato site Re:Revived have fun!');