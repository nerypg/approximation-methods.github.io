function lineal(){
    let x0=parseFloat(document.getElementById("1x0").value);
    let x1=parseFloat(document.getElementById("1x1").value);
    let fx0=parseFloat(document.getElementById("1fx0").value);
    let fx1=parseFloat(document.getElementById("1fx1").value);
    let x=parseFloat(document.getElementById("1x").value);

    let result1=(fx0)+(((fx1-fx0)/(x1-x0))*(x-x0));
    document.getElementById("1fx").value=result1;

}
function porcentajeError1(){
    let vt=parseFloat(document.getElementById("1vt").value);
    let va=parseFloat(document.getElementById("1fx").value);

    let error=vt-va;

    let porcentaje1=(error/vt)*100;
    document.getElementById("1porcentaje").value=porcentaje1;
    }
function limpiar1(){
    document.getElementById("1x0").value="";
    document.getElementById("1x1").value="";
    document.getElementById("1fx0").value="";
    document.getElementById("1fx1").value="";
    document.getElementById("1x").value="";
    document.getElementById("1fx").value="";
    document.getElementById("1vt").value="";
    document.getElementById("1porcentaje").value="";
}


function cuadratica(){
    let x0=parseFloat(document.getElementById("2x0").value);
    let x1=parseFloat(document.getElementById("2x1").value);
    let x2=parseFloat(document.getElementById("2x2").value);
    let fx0=parseFloat(document.getElementById("2fx0").value);
    let fx1=parseFloat(document.getElementById("2fx1").value);
    let fx2=parseFloat(document.getElementById("2fx2").value);
    let x=parseFloat(document.getElementById("2x").value);

    let b0=fx0;
    let b1=(fx1-fx0)/(x1-x0);
    let b2=(((fx2-fx0)/(x2-x0))-b1)/(x2-x1);
    let result2=b0+(b1*(x-x0))+(b2*(x-x0)*(x-x1));
    document.getElementById("2fx").value=result2;
}
function porcentajeError2(){
    let vt=parseFloat(document.getElementById("2vt").value);
    let va=parseFloat(document.getElementById("2fx").value);

    let error=vt-va;

    let porcentaje2=(error/vt)*100;
    document.getElementById("2porcentaje").value=porcentaje2;
}
function limpiar2(){
    document.getElementById("2x0").value="";
    document.getElementById("2x1").value="";
    document.getElementById("2x2").value="";
    document.getElementById("2fx0").value="";
    document.getElementById("2fx1").value="";
    document.getElementById("2fx2").value="";
    document.getElementById("2x").value="";
    document.getElementById("2fx").value="";
    document.getElementById("2vt").value="";
    document.getElementById("2porcentaje").value="";
}


function primerLagrange(){
    let x0=parseFloat(document.getElementById("3x0").value);
    let x1=parseFloat(document.getElementById("3x1").value);
    let fx0=parseFloat(document.getElementById("3fx0").value);
    let fx1=parseFloat(document.getElementById("3fx1").value);
    let x=parseFloat(document.getElementById("3x").value);

    let result3=(((x-x1)/(x0-x1))*fx0)+(((x-x0)/(x1-x0))*fx1);
    document.getElementById("3fx").value=result3;
}
function porcentajeError3(){
    let vt=parseFloat(document.getElementById("3vt").value);
    let va=parseFloat(document.getElementById("3fx").value);

    let error=vt-va;

    let porcentaje3=(error/vt)*100;
    document.getElementById("3porcentaje").value=porcentaje3;
}
function limpiar3(){
    document.getElementById("3x0").value="";
    document.getElementById("3x1").value="";
    document.getElementById("3fx0").value="";
    document.getElementById("3fx1").value="";
    document.getElementById("3x").value="";
    document.getElementById("3fx").value="";
    document.getElementById("3vt").value="";
    document.getElementById("3porcentaje").value="";
}


function segundoLagrange(){
    let x0=parseFloat(document.getElementById("4x0").value);
    let x1=parseFloat(document.getElementById("4x1").value);
    let x2=parseFloat(document.getElementById("4x2").value);
    let fx0=parseFloat(document.getElementById("4fx0").value);
    let fx1=parseFloat(document.getElementById("4fx1").value);
    let fx2=parseFloat(document.getElementById("4fx2").value);
    let x=parseFloat(document.getElementById("4x").value);

    let result4=(((x-x1)/(x0-x1))*((x-x2)/(x0-x2))*fx0)+(((x-x0)/(x1-x0))*((x-x2)/(x1-x2))*fx1)+(((x-x0)/(x2-x0))*((x-x1)/(x2-x1))*fx2);
    document.getElementById("4fx").value=result4;
}
function porcentajeError4(){
    let vt=parseFloat(document.getElementById("4vt").value);
    let va=parseFloat(document.getElementById("4fx").value);

    let error=vt-va;

    let porcentaje4=(error/vt)*100;
    document.getElementById("4porcentaje").value=porcentaje4;
}
function limpiar4(){
    document.getElementById("4x0").value="";
    document.getElementById("4x1").value="";
    document.getElementById("4x2").value="";
    document.getElementById("4fx0").value="";
    document.getElementById("4fx1").value="";
    document.getElementById("4fx2").value="";
    document.getElementById("4x").value="";
    document.getElementById("4fx").value="";
    document.getElementById("4vt").value="";
    document.getElementById("4porcentaje").value="";
}

function vamonos() {
    let elegir = document.getElementById("metodos");
    let opc = elegir.options[elegir.selectedIndex].value;
    window.location.href = opc;
}
