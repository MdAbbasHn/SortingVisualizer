//jshint esversion:6

document.getElementById("genarray").addEventListener("click",()=>{
  generateArray();
});
var sortarray = [];
var heightarray = [];
var ar_size = document.getElementById("arsize");
var ar_speed = document.getElementById("arspeed");
var butt = document.querySelectorAll("button");
console.log(butt.length);
function generateArray(){
  sortarray = [];
  heightarray = [];
  var arrsize = parseInt(document.getElementById("arsize").value);
  while(document.getElementById("visual").hasChildNodes()){
    document.getElementById("visual").removeChild(document.getElementById("visual").childNodes[0]);
  }
  for(var i=0;i<arrsize*2;i++){
    var node = document.createElement("div");
    node.classList.add("ev");
    var ran = Math.floor(Math.random()*500);
    node.style.backgroundColor = "#E9B6EB";
    var size = ran;
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

window.onload=update_array_size();

function disableButtons(){
  for(var i=0;i<butt.length;i++){
    butt[i].disabled = true;
  }
  ar_size.disabled = true;
  ar_speed.disabled = true;
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
