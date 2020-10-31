document.getElementsByClassName("topnav")[0].className="topnav sticky";

var a=1;
var info=[];
function appendtotabla(name,skill,level,comment) {
    info.push([name,skill,level,comment]);
    if (name=="" || skill=="" || level=="" || comment=="" ){
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

    var cell4 = document.createElement("td");
    if(a%2==1){
    cell4.className="field";
    }
    var cellText4 = document.createTextNode(comment);
    cell4.appendChild(cellText4);
    row.appendChild(cell4);

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
