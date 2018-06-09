
window.onload = function(){
  var btnInicio = document.getElementById('btn1');
  btnInicio.onclick = function (){
    var max = 100;
    var min = 1;

    var numero_secreto = Math.random() * (max-min) + min;
    numero_secreto = parseInt(numero_secreto);

    console.log(numero_secreto);

    var mensaje = "Ingrese el número para adivinar el número mágico";

    while(true){
      var numero_del_usuario = prompt(mensaje, 0);
      numero_del_usuario = parseInt(numero_del_usuario);

      if(numero_del_usuario == numero_secreto){
        alert('Adivinaste el número, Ganaste');
        break
      }else if (numero_del_usuario == 0){
        break
      }else if(numero_del_usuario > numero_secreto){
        alert('El número ingresado, es mayor al número secreto');
      }else if(numero_del_usuario < numero_secreto){
        alert('El número ingresado, es menor al número secreto');
      }
    }
    return
  }
}
