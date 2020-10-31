document.getElementsByClassName("topnav")[0].className="topnav sticky";
function myFunction() {
  setInterval(function(){ 
    var elem = (document.compatMode === "CSS1Compat") ? 
    document.documentElement :
    document.body;

    var height = elem.clientHeight;
    var width = elem.clientWidth;

    if(width >= 1400){
    document.getElementById("Nope").innerHTML = ''; 
    document.getElementById("nope2").innerHTML="<br><br><br><br><br><br>"
    var het=String(0.25*height);
    var wet=String(width);
    wet=wet+"px";
    het=het+"px";
    document.getElementsByTagName("footer")[0].style.paddingTop=het;
    document.getElementById("picup").innerHTML = '<br><br><br><br><br><br><br><br><br><br><br><br>'; 
    }
    else if(width > 585){
    document.getElementById("Nope").innerHTML = ''; 
    var het=String(0.25*height);
    var wet=String(width);
    wet=wet+"px";
    het=het+"px";
    document.getElementsByTagName("footer")[0].style.paddingTop=het;
    document.getElementById("picup").innerHTML = '<br><br><br><br><br><br><br><br><br><br><br>'; 
    }
    else{
      var het=String(0.1*height);
      var wet=String(width);
      wet=wet+"px";
      het=het+"px";
      document.getElementsByTagName("footer")[0].style.paddingTop=het;
      document.getElementById("Nope").innerHTML = '';
      document.getElementById("nope2").innerHTML="<br><br><br><br><br><br>"
      document.getElementById("picup").innerHTML = '<br><br><br><br><br><br><br><br><br><br><br><br>'; 
    }
    
    }, 50);
}
myFunction();
function mb(ele){
  ele.style.backgroundColor="#444444";
}
function mn(ele){
  ele.style.backgroundColor="#000000";
}