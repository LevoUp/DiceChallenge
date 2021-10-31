var randomDecimal1 = Math.random()* 6;
var randomNum1 = Math.floor(randomDecimal1); //random number generator.

if (randomNum1 === 0) {
    document.querySelector("#img1").setAttribute("src", "images/dice1.png"); //changes to this Img using Javascript
} 

    else if (randomNum1 === 1) {
        document.querySelector("#img1").setAttribute("src", "images/dice2.png"); 
        }

        else if (randomNum1 === 2) {
            document.querySelector("#img1").setAttribute("src", "images/dice3.png");
            }

            else if (randomNum1 === 3) {
                document.querySelector("#img1").setAttribute("src", "images/dice4.png");
                }

                else if (randomNum1 === 4) {
                    document.querySelector("#img1").setAttribute("src", "images/dice5.png");
                    }

                    else if (randomNum1 === 5) {
                        document.querySelector("#img1").setAttribute("src", "images/dice6.png");
                        }

                        else {
                        console.log("does not work");
                        }

var randomDecimal1 = Math.random()* 6; 
var randomNum2 = Math.floor(randomDecimal1); //random number generator.

    if (randomNum2 === 0) {
        document.querySelector("#img2").setAttribute("src", "images/dice1.png"); //changes to this Img using Javascript
    } 
    
        else if (randomNum2 === 1) {
            document.querySelector("#img2").setAttribute("src", "images/dice2.png"); 
            }
    
            else if (randomNum2 === 2) {
                document.querySelector("#img2").setAttribute("src", "images/dice3.png");
                }
    
                else if (randomNum2 === 3) {
                    document.querySelector("#img2").setAttribute("src", "images/dice4.png");
                    }
    
                    else if (randomNum2 === 4) {
                        document.querySelector("#img2").setAttribute("src", "images/dice5.png");
                        }
    
                        else if (randomNum2 === 5) {
                            document.querySelector("#img2").setAttribute("src", "images/dice6.png");
                            }
    
                            else {
                            console.log("does not work");
                            }                                       

if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = "🚩 Player 1 wins!";
    document.querySelector(".container img").setAttribute("class", "flag1");
}

else if (randomNum1 < randomNum2) {
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
    document.querySelector(".container img").setAttribute("class", "flag2");
}

else {
    document.querySelector("h1").textContent = "Draw!";
    document.querySelectorAll(".container img")[0].removeAttribute("src", "",);
    document.querySelectorAll(".container img")[1].removeAttribute("src", "");
}

// (document.querySelector("#img1").src = ("images/dice3.png"); 

// var randomNum = Math.random() * 2;
// var wholeRandom = Math.round(randomNum);

//     var dice1 = document.querySelector("#img1").src = "images/dice3.png";

//     for (var i = 0; i < 1; i++) { 
//         return dice1; }
//          else {
//             alert("there are no more dice");
//         } 

