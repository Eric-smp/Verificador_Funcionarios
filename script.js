function verificar(event){
  const nome = document.getElementById('codigo').value;
  const senha = document.getElementById('senha').value
  if(nome === 'Eric', 'Gabriel', 'Gabriele', 'Daniel' && senha === "devbot123"  ){event.preventDefault() 
    console.log(true)
    document.getElementById('resultado').innerHTML= `Seja bem-vindo ${nome}`
  }else{
    console.log(false)
    document.getElementById('resultado').innerHTML= `Não foi encontrado você nos registro`
  }


}

