var boton = document.getElementById('menu');
var boton2 = document.getElementById('icono');
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