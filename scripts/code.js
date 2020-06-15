var boton = document.getElementById('icono');
var boton2 = document.getElementById('icono2');
var enlaces = document.getElementById('lista');
var contador = 0;

boton.addEventListener('click', function(){
    
    if(contador == 0){
        enlaces.className = ('lista fondoo');
        contador++;
    }else{
        enlaces.classList.remove('fondoo');
        enlaces.className = ('lista fondo');
        contador = 0;
    }
});

boton2.addEventListener('click', function(){
    
    if(contador == 0){
        enlaces.className = ('lista fondoo');
        contador++;
    }else{
        enlaces.classList.remove('fondoo');
        enlaces.className = ('lista fondo');
        contador = 0;
    }
});