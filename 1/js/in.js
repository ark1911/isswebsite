document.getElementsByClassName("topnav")[0].className="topnav sticky";
var a=0;
function pichange(img){
  img.style.marginLeft="35%";
  img.width="400"

  if(a==0){
    img.width="528";
    img.style.marginLeft="30%";
    img.src="../img/KC.jpg";
  }
  if(a==1){
    document.getElementById("caption").innerHTML="Watching Anime";
    img.src="../img/fmab.jpg";
  }
  if(a==2){
    img.src="../img/SG.jpg";
  }
  if(a==3){
    img.width="711";
    img.style.marginLeft="24%";
    img.src="https://i.imgur.com/VDkmi98.jpg";
  }
  if(a==4){
    document.getElementById("caption").innerHTML="Reading Books";
    img.src="../img/HP.jpeg";
    a=-1;
  }
  a+=1;
}      
function myFunction() {
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


      if(width > 1400){
        document.getElementById("exsp").innerHTML="<br><br><br><br><br><br><br>";
        document.getElementById("exxsp").innerHTML="<br><br><br>";

      
      }


      else{
        document.getElementById("Nope").innerHTML="<br><br><br>";
        document.getElementById("exsp").innerHTML="<br><br><br>";
        document.getElementById("exxsp").innerHTML="";
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