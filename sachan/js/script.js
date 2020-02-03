var clicks = 0;
function initcl() {
    var click = localStorage.getItem("clicks");
    if(click == undefined){
        localStorage.setItem("clicks", 0);
        clicks = 0;
    }else{
        clicks = parseInt(click);   
    }
    document.getElementById("cnt").innerHTML = clicks;
}

function doClick() {
    clicks += 1;
    localStorage.setItem("clicks", clicks);
    document.getElementById("cnt").innerHTML = clicks;
}


$(document).ready(function(){
  $("#imgdiv").stop().fadeIn(1800);
  $("#maintext").stop().fadeIn(1800);
  $("#intro-body").stop().delay(300).fadeIn(1000);
  $("#icon-row").stop().delay(300).fadeIn(1000);
  $("#me").animate({height: "+=200px"}, 400);
  let elems = [];
  $(".but2").on("click", function() {
        elems.push([$("#name-box").val(), $("#skill-box").val(), $(".proficiency").children("option:selected").val()]);
        let arr = elems[elems.length-1];
        $("table").append("<tr><td>" + arr[0] + "</td><td>" + arr[1] + "</td><td>" + arr[2] + "</td></tr>");
  });
  if($('body').is('.resumee')){
    document.getElementById("but").onclick = doClick;
  }
  $(".topnav").addClass("stick");
});

document.getElementById("logo-1").onmouseover = function() {
  this.style.backgroundColor = "#FFF4";
  console.log('yeet')
}
document.getElementById("logo-2").onmouseover = function() {
  this.style.backgroundColor = "#FFF4";
}
document.getElementById("logo-3").onmouseover = function() {
  this.style.backgroundColor = "#FFF4";
}
document.getElementById("logo-4").onmouseover = function() {
  this.style.backgroundColor = "#FFF4";
}

document.getElementById("logo-1").onmouseout = function() {
  this.style.backgroundColor = "#0000";
  console.log('antiyeet')
}
document.getElementById("logo-2").onmouseout = function() {
  this.style.backgroundColor = "#0000";
}
document.getElementById("logo-3").onmouseout = function() {
  this.style.backgroundColor = "#0000";
}
document.getElementById("logo-4").onmouseout = function() {
  this.style.backgroundColor = "#0000";
}
var counter = 1;
function chang(){
  var urls = ['http://newnation.sg/wp-content/uploads/random-pic-internet-01.jpg',
              'https://i.imgur.com/Tl5sYD6.png',
              'https://picsum.photos/200',
              'https://picsum.photos/200/200',
              'https://cdn.business2community.com/wp-content/uploads/2015/10/42454567_m.jpg.jpg'
  ]
  var elem = document.getElementById("img-rot");
  var url = urls[counter];
  elem.innerHTML = "<img class=img-extra src=" + url + ">"
  counter += 1;
  counter %= 5;
}