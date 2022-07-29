function mostrar_tabla(){
    var n=parseInt(document.tablas.numero.value);
    var r="";
    for(var i=1; i<=10; i++){
        r= r+n+"x" +i+ "=" + (n*i) + "<BR>";
    }
    var capa_resultado= document.getElementById("resultado");
    capa_resultado.innerHTML=r;
}