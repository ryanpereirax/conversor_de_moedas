var cv_tax;
var dol;
var real;

document.getElementById("button_2").disabled = true;
document.getElementById("button_3").disabled = true;
document.getElementById("button_0").disabled = true;


function confirmacao_taxa(){

    cv_tax = document.getElementById('cv.tax_cv').value;

    document.getElementById("button_2").disabled = false;
    document.getElementById("button_3").disabled = false;
    document.getElementById("button_0").disabled = false;

    document.getElementById("button_1").disabled = true;

}

function clear_tax(){

    document.getElementById('cv.tax_cv').value='';
    document.getElementById('cv.real_dol').value='';
    document.getElementById('cv_dol_real').value='';
    
    document.getElementById("button_0").disabled = true;
    document.getElementById("button_1").disabled = false;
    document.getElementById("button_2").disabled = true;
    document.getElementById("button_3").disabled = true;

}

function cv_real_to_dol(){

    real  = document.getElementById('cv.real_dol').value;
    dol = real / cv_tax;
    alert(dol);

}

function cv_dol_to_real(){

    dol = document.getElementById('cv_dol_real').value;
    real = dol * cv_tax;
    alert(real);

}