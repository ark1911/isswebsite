
document.getElementsByTagName("a")[0].setAttribute("id", "nav1");
document.getElementsByTagName("a")[1].setAttribute("id", "nav2");
document.getElementsByTagName("a")[2].setAttribute("id", "nav3");
document.getElementsByTagName("a")[3].setAttribute("id", "nav4");
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onload = myload;

function myload() {

	if(localStorage.table1)
   document.getElementById("table2").innerHTML = localStorage.table1
 if(localStorage.clickcount)
  document.getElementById("like").innerHTML = "like: " + localStorage.clickcount;

}

function function2(){
  table = document.getElementById("table2");

  row = table.insertRow(2);
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell3 = row.insertCell(2);
  var x = document.getElementById("talent"); 
  cell1.innerHTML = x.elements[0].value;
  cell2.innerHTML = x.elements[1].value;
  cell3.innerHTML = x.elements[2].value;

  localStorage.table1 = document.getElementById("table2").innerHTML;
}


function likeme() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } 
  else {
    localStorage.clickcount = 1;
  }
  document.getElementById("like").innerHTML = "like: " + localStorage.clickcount;
} 

//   function image() {
//     if(document.getElementById("btn").src == "file:///home/sarthak/Documents/iss/img/1.jpg")
//       document.getElementById("btn").src="file:///home/sarthak/Documents/iss/img/2.jpg";

//     else if(document.getElementById("btn").src == "file:///home/sarthak/Documents/iss/img/2.jpg")
//       document.getElementById("btn").src="file:///home/sarthak/Documents/iss/img/3.jpg"

//     else if(document.getElementById("btn").src == "file:///home/sarthak/Documents/iss/img/3.jpg")
//       document.getElementById("btn").src="file:///home/sarthak/Documents/iss/img/4.jpg"

//     else if(document.getElementById("btn").src == "file:///home/sarthak/Documents/iss/img/4.jpg")
//       document.getElementById("btn").src="file:///home/sarthak/Documents/iss/img/5.jpg"

// else
//   document.getElementById("btn").src="file:///home/sarthak/Documents/iss/img/1.jpg"

// }
 function image() {

  console.log(document.getElementById("btn").src);

    if(localStorage.count)
    {
      if(localStorage.count < 5)
      localStorage.count = Number(localStorage.count) + 1;
      else
      localStorage.count = 1;
    }
    else
      localStorage.count = 1;

	var ccd = localStorage.count.toString();

    document.getElementById("btn").src = "./img/"+ ccd + ".jpg";
    

}
