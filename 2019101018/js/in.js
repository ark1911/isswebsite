//visitor counter
let visits;
if(window.localStorage.getItem('visit_to_page') == null)
        window.localStorage.setItem('visit_to_page', 1);
window.onload = function()
{

    if(window.localStorage.getItem('visit_to_page') == "null" || window.localStorage.getItem('visit_to_page') == "NaN")
        window.localStorage.setItem('visit_to_page', 1);
    visits = window.localStorage.getItem('visit_to_page');

    let x = parseInt(window.localStorage.getItem('visit_to_page'), 10) + 1;
    window.localStorage.setItem('visit_to_page', x);
    let text = "This page has been visited " + x + " times"
document.getElementById("visitcounter").innerText=text;
}

//Get the button:
mybutton = document.getElementById("myBtn");
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//sticky topnav
document.getElementsByClassName("topnav")[0].className="topnav sticky";

//picchange
var a=1;
function pichange(img){

  if(a==0){
    img.src="../img/w1.jpeg";
    document.getElementById("caption").innerHTML="";

  }
  if(a==1){
    document.getElementById("caption").innerHTML="Charminar :)";
    img.src="../img/w2.jpeg";
  }
  if(a==2){
    document.getElementById("caption").innerHTML="My Instagram dp";
    img.src="../img/w3.jpeg";
  }
  if(a==3){
    document.getElementById("caption").innerHTML="Another of the countless mirror selfies";
    img.src="../img/w4.jpeg";
  }
  if(a==4){
    document.getElementById("caption").innerHTML="Winter is here";
    img.src="../img/w5.jpeg";
    a=-1;
  }
  a+=1;
}  


//spacing for photos    
function spacing() {
    setInterval(function(){ 
      var elem = (document.compatMode === "CSS1Compat") ? 
      document.documentElement :
      document.body;

      var height = elem.clientHeight;
      var width = elem.clientWidth;

      var het=String(height);
      var wet=String(width);

      wet=wet+"px";
      het=het+"px";

      document.getElementById("2").style.paddingTop=het;
      }, 50);

  }
spacing();


function mb(ele){
   ele.style.backgroundColor="#444444";
}
function mn(ele){
  ele.style.backgroundColor="#000000";
}
