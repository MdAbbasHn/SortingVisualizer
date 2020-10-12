//jshint esversion:8
async function Bubble(){
  disableButtons();
  var n = sortarray.length;
        for (var i = 0; i < n-1; i++){
          var arrspeed = parseInt(document.getElementById("arspeed").value);
          await Sleep(100/arrspeed);
          for (var j = 0; j < n-i-1; j++){
            arrspeed = parseInt(document.getElementById("arspeed").value);
            changeColor(sortarray[j],"orange");
            changeColor(sortarray[j+1],"yellow");
            await Sleep(100/arrspeed);
            if (heightarray[j] > heightarray[j+1])
            {
              await Sleep(100/arrspeed);
                //Swap actual visual heights
                var temp = sortarray[j].style.height;
                sortarray[j].style.height = sortarray[j+1].style.height;
                sortarray[j+1].style.height = temp;
                //Swap height inside the heightarray
                var tem = heightarray[j];
                heightarray[j] = heightarray[j+1];
                heightarray[j+1] = tem;
            }
            changeColor(sortarray[j],"purple");
          }
          changeColor(sortarray[n-i-1],"#43FE01");
          await Sleep(150/arrspeed);
        }
        changeColor(sortarray[0],"#43FE01");
      enableButtons();
}
