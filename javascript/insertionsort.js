//jshint esversion:8
async function Insertion(){

  disableButtons();
    for (var i = 1; i < sortarray.length; i++)
    {
        await Sleep(100/arrspeed);
        var arrspeed = parseInt(document.getElementById("arspeed").value);
        var key = heightarray[i];
        changeColor(sortarray[i-1],"#43FE01");
        var j = i - 1;
        while (j >= 0 && heightarray[j] > key)
        {
            changeColor(sortarray[j+1],"orange");
            changeColor(sortarray[j],"red");
            await Sleep(500/arrspeed);
            arrspeed = parseInt(document.getElementById("arspeed").value);
            sortarray[j + 1].style.height = sortarray[j].style.height;
            changeColor(sortarray[j],"#43FE01");
            changeColor(sortarray[j+1],"#43FE01");
            heightarray[j + 1] = heightarray[j];
            j = j - 1;
        }
        sortarray[j + 1].style.height = key+"px";
        changeColor(sortarray[j+1],"#43FE01");
        heightarray[j+1] = key;
        await Sleep(200/arrspeed);
    }
    enableButtons();
}
