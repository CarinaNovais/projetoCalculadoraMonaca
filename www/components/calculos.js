// This is a JavaScript file
window.onload = function (){
  const display = document.querySelector("#display");

  const numerico = document.querySelectorAll(".numerico");

  let valor;
  let op;

  let botoes = Array.prototype.filter.call(numerico, function(botao){
    botao.addEventListener('click', function(){
      valor =  display.value;
      valor += this.value;
      display.value = valor;

    });

  });

  document.querySelector("#sub").addEventListener('click', function(){
    valor1 = display.value;
    display.value = "";
    op = "sub";
  });

  document.querySelector("#mult").addEventListener('click', function(){
    valor1 = display.value;
    display.value = "";
    op = "mult";
  });

  document.querySelector("#divisao").addEventListener('click', function(){
    valor1 = display.value;
    display.value = "";
    op = "divisao";
  });

  document.querySelector("#somar").addEventListener('click', function(){
    valor1 = display.value;
    display.value = "";
    op = "somar";
  });



document.querySelector("#igual").addEventListener('click', function(){
    let valor2 = display.value;

    if (op == 'sub'){
      display.value = valor1 - valor2;
    }
    if(op =='mult'){
       display.value = valor1 * valor2;
    }
    if(op == 'divisao'){ 
      display.value = valor1/valor2;
    }
    if (op == 'somar'){ 
      let resultado = parseFloat (valor1) + parseFloat (valor2);
       display.value = resultado;

    }
    

  });

document.querySelector("#ce").addEventListener('click', function(){
    display.value = "";
    valor1;
    op = "";
  });


}