document.getElementsByClassName("topnav")[0].className="topnav sticky";
function myFunction() { 
    setInterval(function(){ 
    var elem = (document.compatMode === "CSS1Compat") ? 
    document.documentElement :
    document.body;
    var height = elem.clientHeight;
    var width = elem.clientWidth;
    if(width > 585){
    document.getElementById("Nope").innerHTML = ''; 
    document.getElementById("Header").innerHTML= 'Ammar Ahmed';
    document.getElementById("dist").innerHTML= '';
    document.getElementById("1").style.marginLeft="128px";

    document.getElementById("1").style.marginRight="128px";
    document.getElementById("2").style.marginLeft="128px";
    document.getElementById("2").style.marginRight="128px";
    
    }
    else{
        document.getElementById("Nope").innerHTML = '<br><br><br><br><br><br><br>';
        document.getElementById("Header").innerHTML= 'Ammar Ahmed';
        document.getElementById("dist").innerHTML= '';
        document.getElementById("1").style.marginLeft="16px";
        document.getElementById("1").style.marginRight="16px";
        document.getElementById("2").style.marginLeft="16px";
        document.getElementById("2").style.marginRight="16px";
    }
    }, 50);
}
myFunction();
function likincr(){
    a=Number(document.getElementById("lik").innerHTML);
    a+=1;
    a=String(a);
    document.getElementById("lik").innerHTML=a;
}

var a=1;
var info=[];

function appendtotabla(name,skill,level) {
    info.push([name,skill,level]);
    if (name=="" || skill=="" || level==""){
        alert("Please make sure none of the fields are empty");
        return;
    }
    var body=document.getElementById("skilltable");
    var tbl = document.getElementById("tabla");
        var tblBody = document.createElement("tbody");
    var row = document.createElement("tr");

    var cell1 = document.createElement("td");
    if(a%2==1){
    cell1.className="field";
    }
    var cellText1 = document.createTextNode(name);
    cell1.appendChild(cellText1);
    row.appendChild(cell1);

    var cell2 = document.createElement("td");
    if(a%2==1){
    cell2.className="field";
    }
    var cellText2 = document.createTextNode(skill);
    cell2.appendChild(cellText2);
    row.appendChild(cell2);


    var cell3 = document.createElement("td");
    if(a%2==1){
    cell3.className="field";
    }
    var cellText3 = document.createTextNode(level);
    cell3.appendChild(cellText3);
    row.appendChild(cell3);
    if(a==1) {
        row.className="tablaclass1";
    }
    else if(a%2==1){
        row.className="tablaclass2";
    }
    a+=1;
    tblBody.appendChild(row);


    

    tbl.appendChild(tblBody);
        body.appendChild(tbl);

}
function mb(ele){
    ele.style.backgroundColor="#444444";
  }
  function mn(ele){
    ele.style.backgroundColor="#000000";
  }