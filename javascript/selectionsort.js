//jshint esversion:8
async function Selection(){
  disableButtons();
  // Do selection sort
  for(var f=0;f<sortarray.length;f++){
    //Check arrspeed at every iteration for user speed change
    var arrspeed = parseInt(document.getElementById("arspeed").value);
    //Change color of element being checked against others to red
    changeColor(sortarray[f],"red");

    await Sleep(100/arrspeed);

    var min = f;
    //Check other elements for the smallest one
    for(var j=f+1;j<sortarray.length;j++){
      arrspeed = parseInt(document.getElementById("arspeed").value);
      changeColor(sortarray[j],"#E9B6EB");
      await Sleep(100/arrspeed);
      changeColor(sortarray[j],"purple");
      if(heightarray[j]<heightarray[min]){
        min = j;
      }
    }
    await Sleep(100/arrspeed);
    var tem = sortarray[min].style.height;//1
    changeColor(sortarray[min],"yellow");
    await Sleep(300);
    changeColor(sortarray[min],"purple");
    sortarray[min].style.height = sortarray[f].style.height;//2
    await Sleep(100/arrspeed);
    sortarray[f].style.height = tem;//3
    changeColor(sortarray[f],"#43FE01");

    var temp = heightarray[min];
    heightarray[min]= heightarray[f];
    heightarray[f]= temp;
  }
  enableButtons();
}
