function verificar(){
  const nome = document.getElementById('codigo').value;
  const senha = document.getElementById('senha').value
  if(nome === 'Eric', 'Gabriel', 'Gabriele', 'Daniel' && senha === 'devbot123'){
    console.log(true)
    document.getElementById('resultado').innerHTML= `Seja bem-vindo ${nome}`
  }else{
    console.log(false)

  }


}
