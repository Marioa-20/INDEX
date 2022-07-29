function metros(){

    var m1 = document.getElementById ('metros1').value;
    kilometros=m1/1000;
    decametros=m1/10;
    decimales=m1*10;
    centimetros=m1*100
    
    document.getElementById ('kilometros').value=kilometros;
    document.getElementById ('decametros').value=decametros;
    document.getElementById ('decimales').value=decimales;
    document.getElementById ('centimetros').value=centimetros;
    }