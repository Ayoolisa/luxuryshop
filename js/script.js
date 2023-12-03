let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >= 17){
   greeting = "Good evening!";
}
else if (hourNow >= 12){
   greeting = "Good afternoon!";
}
else if (hourNow > 0){
   greeting = "Good morning!";
}
else {
   greeting = "Welcome to the ShoppingHub!"
}

document.write('<h3>' + greeting + '<h3>');