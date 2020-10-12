//jshint esversion:8
async function Selection(){
  var arrspeed = parseInt(document.getElementById("arspeed").value);
  console.log(arrspeed);
  disableButtons();
  for(var f=0;f<sortarray.length;f++){
    sortarray[f].style.backgroundColor = "red";
    await Sleep(100/arrspeed);
    var min = f;
    for(var j=f+1;j<sortarray.length;j++){
      sortarray[j].style.backgroundColor = "purple";
      await Sleep(100/arrspeed);
      sortarray[j].style.backgroundColor = "#E9B6EB";
      if(heightarray[j]<heightarray[min]){
        min = j;
      }
    }
    await Sleep(100/arrspeed);
    var tem = sortarray[min].style.height;
    sortarray[min].style.backgroundColor = "yellow";
    await Sleep(300);
    sortarray[min].style.backgroundColor = "#E9B6EB";
    sortarray[min].style.height = sortarray[f].style.height;
    await Sleep(100/arrspeed);
    sortarray[f].style.height = tem;
    sortarray[f].style.backgroundColor = "#43FE01";
    var temp = heightarray[min];
    heightarray[min]= heightarray[f];
    heightarray[f]= temp;
  }
  enableButtons();
}
