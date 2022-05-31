function aparecerMenu(){
    document.getElementById('elemento').classList.remove('menu-invisible');
    elemento.classList.add('menu-invisible2'); 
}

function fecharMenu(){
    document.getElementById('elemento').classList.remove('menu-invisible2');
    elemento.classList.add('menu-invisible');
 
}
 
function abrirDropLat(){
    document.getElementById('featureslateral').classList.remove('drop-down-lateral');
    featureslateral.classList.add('drop-down-lateral2');  
}

 function abrirDropLat2(){
    document.getElementById('companylateral').classList.remove('drop-down-lateral');
    companylateral.classList.add('drop-down-lateral2'); 
 }