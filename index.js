 var randomNumber1 = Math.floor(Math.random() * 6) + 1;
 var randomNumber2 = Math.floor(Math.random() * 6) + 1;

 var image1 = "images/dice" + randomNumber1 + ".png"
 var image2 = "images/dice" + randomNumber2 + ".png"
 
 document.querySelector(".img1 ").src = image1
  document.querySelector(".img2 ").src = image2

  if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "player 1 wins "
  } else if (randomNumber1<randomNumber2) {
          document.querySelector("h1").textContent = "player 2 wins "

  } else{
      document.querySelector("h1").textContent = "Draw!";

  }
