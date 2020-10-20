//jshint esversion:8
var leg = document.getElementById("legend");
var ar_speed = document.getElementById("arspeed");
var arrspeed = document.getElementById("arspeed").value;
arrspeed = arrspeed*arrspeed;
var mainarrspeed = document.getElementById("arspeed");
document.getElementById("arspeed").addEventListener("input",()=>{
  arrspeed = mainarrspeed.value*mainarrspeed.value;
});
document.getElementById("arsize").addEventListener("input",()=>{
  generateArray();
});
var sortarray = [];
var heightarray = [];
var ar_size = document.getElementById("arsize");
var butt = document.querySelectorAll("button");
window.onload=update_array_size();
function generateArray(){
  sortarray = [];
  heightarray = [];
  leg.style.display = "none";
  var arrsize = parseInt(document.getElementById("arsize").value);
  while(document.getElementById("visual").hasChildNodes()){
    document.getElementById("visual").removeChild(document.getElementById("visual").childNodes[0]);
  }
  for(var i=0;i<arrsize*2;i++){
    var node = document.createElement("div");
    node.classList.add("ev");
    var ran = Math.floor(Math.random()*500);
    node.style.backgroundColor = "#0d1137";
    node.style.width = (500/arrsize)+"px";
    var size = ran+20;
    node.style.height = size+"px";
    sortarray.push(node);
    heightarray.push(size);
    document.getElementById("visual").appendChild(node);
  }
}
function update_array_size()
{

    generateArray();
}


function disableButtons(){
  for(var i=0;i<butt.length;i++){
    butt[i].disabled = true;
  }
  ar_size.disabled = true;
}
function enableButtons(){
  for(var i=0;i<butt.length;i++){
    butt[i].disabled = false;
  }

  ar_size.disabled = false;
  ar_speed.disabled = false;
}
function Sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
function changeColor(g,col){
  g.style.backgroundColor = col;
}
function refresh(){
  for(var j=0;j<sortarray.length;j++){
    sortarray[j].style.backgroundColor = "#0d1137";
  }
}
