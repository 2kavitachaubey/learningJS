let random1 = Math.floor((Math.random()*6)+1);
let randomDiceImage = "dice"+random1+".png";
let randomImageSource = "images/"+randomDiceImage;
let image1 = document.querySelectorAll(".dice img")[0];
image1.setAttribute("src",randomImageSource);

let random2 = Math.floor((Math.random()*6)+1);
let randomImageSource2 = "images/dice"+random2+".png";
let image2 = document.querySelectorAll(".dice img")[1];
image2.setAttribute("src",randomImageSource2);

if(random1 > random2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if(random2 > random1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!  🚩"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}

