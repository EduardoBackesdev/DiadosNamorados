import React from 'react'
import "./Backgrounc.css"

const background = () => {

  function botaoSegunda(){

    const tela = document.getElementById('tela')

    const frase= ['Você é a razão da minha vida!', 'Nunca vou deixar de TE AMAR', 'Para que sonhar se a minha realidade é você?', 'O meu plano é bem simples: ficar com você a minha vida inteira.'];

    const arrayale = Math.floor(Math.random() * frase.length);

    const aleatorio = frase[arrayale];

    tela.innerHTML+=`
    <p>`+(aleatorio)+`</p>
    `
  }

    function botaoTerca(){
  
      const tela = document.getElementById('tela1')
  
      const frase= ['Não há algo que revigore mais minhas forças do que lembrar que você existe e me faz querer viver.', 'Para nós, todo o amor do mundo.', 'Antes de você, só existia. Comecei a viver quando chegou.', 'Eu disse que eu nunca me apaixonaria, a menos que fosse por você.'];
  
      const arrayale = Math.floor(Math.random() * frase.length);
  
      const aleatorio = frase[arrayale];
  
      tela.innerHTML+=`
      <p>`+(aleatorio)+`</p>
      `
    }

    function botaoQuarta(){
  
      const tela = document.getElementById('tela2')
  
      const frase= ['Se o sol não voltar amanhã, eu uso o seu sorriso pra iluminar o meu dia.', 'Se a sua vida depender do meu amor, você viverá além da vida, pois te amo além do amor!', 'Porque em cada pedaço de mim, sempre haverá um pedaço de você.', 'Se eu tivesse que escolher entre te amar ou respirar, eu usaria meu último suspiro pra dizer: eu te amo!'];
  
      const arrayale = Math.floor(Math.random() * frase.length);
  
      const aleatorio = frase[arrayale];
  
      tela.innerHTML+=`
      <p>`+(aleatorio)+`</p>
      `
    }

    function botaoQuinta(){
  
      const tela = document.getElementById('tela3')
  
      const frase= ['Eu andei por aí guardando todo esse amor para te dar. Que bom que ele é seu, que bom que é você.', 'Te amarei até o meu último átomo.', 'Se você quiser alguém para ser só seu, é só não esquecer que eu estarei aqui.','A vontade de você maior que tudo!'];
  
      const arrayale = Math.floor(Math.random() * frase.length);
  
      const aleatorio = frase[arrayale];
  
      tela.innerHTML+=`
      <p>`+(aleatorio)+`</p>
      `
    }

    function botaoSexta(){
  
      const tela = document.getElementById('tela4')
  
      const frase= ['Espero pelo seu sorriso como a noite espera pelas estrelas.', 'De todas as voltas que o mundo deu, a melhor foi quando seu caminho cruzou com o meu.', 'Assim como viver sem ter amor não é viver, não há você sem mim, eu não existo sem você.', 'Não há nada que eu não faria. Vou até os confins da Terra por você para fazer você sentir o meu amor.'];
  
      const arrayale = Math.floor(Math.random() * frase.length);
  
      const aleatorio = frase[arrayale];
  
      tela.innerHTML+=`
      <p>`+(aleatorio)+`</p>
      `
    }

 








  return (
    <div>
      <div className='body'>

        <button onClick={botaoSegunda}>Segunda</button>
        <div id='tela' className='mensagem'>
          

        </div>

        <button onClick={botaoTerca}>Terça</button>
        <div id='tela1' className='mensagem'>

        </div>

        <button onClick={botaoQuarta}>Quarta</button>
        <div id='tela2' className='mensagem'>

        </div>

        <button onClick={botaoQuinta}>Quinta</button>
        <div id='tela3' className='mensagem'>

        </div>

        <button onClick={botaoSexta}>Sexta</button>
        <div id='tela4' className='mensagem'>

        </div>


      </div>
    </div>
  )
}

export default background
