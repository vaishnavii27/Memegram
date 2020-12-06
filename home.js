
//contest1
var countDownDate1 = new Date("Jan 5, 2021 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate1 - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("contest1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("contest1").innerHTML = "EXPIRED";
  }
}, 1000);




//contest2

var countDownDate2 = new Date("Jan 10, 2021 16:30:20").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate2 - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("contest2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("contest2").innerHTML = "EXPIRED";
  }
}, 1000);



//contest3
var countDownDate3 = new Date("Dec 25, 2020 10:07:05").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate3 - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("contest3").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("contest3").innerHTML = "EXPIRED";
  }
}, 1000);



//contest4
var countDownDate4 = new Date("feb 5, 2021 11:17:15").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate4 - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("contest4").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("contest4").innerHTML = "EXPIRED";
  }
}, 1000);


function colourchange1(){
  
    document.getElementById("icon1").style.color="red";
    
}


function colourchange2(){
    document.getElementById("icon2").style.color="red";
}


function colourchange3(){
    document.getElementById("icon3").style.color="red";
}


function colourchange4(){
    document.getElementById("icon4").style.color="red";
}