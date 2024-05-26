var RandNum1=Math.floor(Math.random()*6)+1;
var image1="./images/dice"+RandNum1+".png";
var imagesource = document.querySelectorAll("img")[0];
imagesource.setAttribute("src",image1);
var RandNum3=Math.floor(Math.random()*6)+1;
var image2="./images/dice"+RandNum3+".png";
var imagesource1 = document.querySelectorAll("img")[1];
imagesource1.setAttribute("src",image2);
if (RandNum1>RandNum3) {
     document.querySelector("h1").innerHTML="PLAYER 1 WIN!";
}

else if (RandNum1<RandNum3) {
    document.querySelector("h1").innerHTML="PLAYER 2 WIN!";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}