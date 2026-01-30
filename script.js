//sorteador
const volume = document.getElementById('volume')
const amostra_numero = document.getElementById('amostra_numero')
const volume_fim = document.getElementById('volume_fim')
const amostra_numero_fim = document.getElementById('amostra_numero_fim')
let numero_sorteado = document.getElementById('numero_sorteado')
const botao = document.getElementById('botao')

amostra_numero.textContent = volume.value //captura os valores do range
amostra_numero_fim.textContent = volume_fim.value

    
volume.addEventListener('input', function() { //ouve e passa pro "display" o numero que esta
    amostra_numero.textContent = this.value;
});
volume_fim.addEventListener('input', function() { //ouve e passa pro "display" o numero que esta
    amostra_numero_fim.textContent = this.value;
  });

  botao.addEventListener('click', function(){
    const inicio = Number(volume.value) //pega o numero de um range que foi pego e guarda
    const fim = Number(volume_fim.value)
    if(fim < inicio){//confere se o numero inicial é menor ue o final
        numero_sorteado.innerHTML = 'Número inicial é maior que o final! <br> Por favor, escolha outro número !'
        numero_sorteado.style.backgroundColor = 'red';
        numero_sorteado.style.color = 'white';
        numero_sorteado.style.padding = '10px';
        numero_sorteado.style.borderRadius = '10px';
      }else{
        const sorteado = Math.floor(Math.random() * (fim - inicio + 1)) + inicio // faz osorteio dos numeros escolhidos e pegos
        numero_sorteado.innerHTML = `O Número sorteado foi : ${sorteado}   `
        numero_sorteado.style.borderRadius = '10px';
        numero_sorteado.style.backgroundColor = 'green';
        numero_sorteado.style.color = 'white';
        numero_sorteado.style.padding = '10px';
        numero_sorteado.style.borderRadius = '10px';
    }
  })


  // Conversor de medidas
  const botao_converter = document.getElementById('botao-converter')
  let selecao_entrada = document.getElementById('escolha-entrada')
  let selecao_saida = document.getElementById('escolha-saida')
  let numero_entrada = document.getElementById('entrada_medida')
  let saida = selecao_saida.options[selecao_saida.selectedIndex]
  let entrada = selecao_entrada.options[selecao_entrada.selectedIndex]
  let convertido = document.getElementById('res')
    
  let valorum = entrada.value
  let valordois = saida.value

 
  
  botao_converter.addEventListener('click', function () {
  let medida = parseFloat(numero_entrada.value);
  let entrada = selecao_entrada.value;
  let saida = selecao_saida.value;
  

if (isNaN(medida)) {
 convertido.innerHTML ='Digite um número válido!'
 convertido.style.backgroundColor = 'red' 
 convertido.style.padding = '10px'
 convertido.style.borderRadius = '10px'
 return;

}

// milimetros

 else if (entrada === 'mm' && saida === 'cm'){
   let resmmcm = medida / 10
   convertido.innerHTML = resmmcm + ` cm`
    
 } else if (entrada === 'mm' && saida === 'm'){
   let resmmcm = medida / 1000
   convertido.innerHTML = resmmcm + ` m`
    
 }else if (entrada === 'mm' && saida === 'km'){
   let resmmcm = medida / 10000
   convertido.innerHTML = resmmcm + ` km`
    
   //centimetros
 }else if (entrada === 'cm' && saida === 'mm'){
   let resmmcm = medida * 10
   convertido.innerHTML = resmmcm + ` mm`
 }else if (entrada === 'cm' && saida === 'm'){
   let resmmcm = medida / 100
   convertido.innerHTML = resmmcm + ` m`
 }else if (entrada === 'cm' && saida === 'km'){
   let resmmcm = medida / 1000
   convertido.innerHTML = resmmcm + ` km`
   
   
   //metros
  }else if (entrada === 'm' && saida === 'mm'){
    let resmmcm = medida * 100
    convertido.innerHTML = resmmcm + ` mm`
    
    
  }else if (entrada === 'm' && saida === 'cm'){
   let resmmcm = medida * 100
   convertido.innerHTML = resmmcm + ` cm`
   
  }else if (entrada === 'm' && saida === 'km'){
    let resmmcm = medida / 1000
    convertido.innerHTML = resmmcm + ` km`
    
  //quilometros

  }else if (entrada === 'km' && saida === 'm'){
   let resmmcm = medida * 1000
   convertido.innerHTML = resmmcm + ` m`
    
 
 }else if (entrada === 'km' && saida === 'cm'){
   let resmmcm = medida * 100
   convertido.innerHTML = resmmcm + ` cm`
    
 }
 else if (entrada === 'km' && saida === 'mm'){
   let resmmcm = medida * 10000
   convertido.innerHTML = resmmcm + ` mm`
   
  }else if (entrada === saida){  
    let resmmcm = medida * 1
   convertido.innerHTML = resmmcm
   convertido.style.backgroundColor = 'green' 
  convertido.style.padding = '10px'
  convertido.style.color = 'white'
  convertido.style.borderRadius = '10px'
    
 }
  
  })

  //Calculatorrrrr

  let num_um = document.getElementById('valor_um')
  let num_dois = document.getElementById('valor_dois')

  let mais = document.getElementById('mais')
  let menos = document.getElementById('menos')
  let vezes = document.getElementById('vezes')
  let dividir = document.getElementById('dividir')
  let clear = document.getElementById('clear')
  
  let total = document.getElementById('total')
  
  
  mais.addEventListener('click', () => {
    
    const n1 = parseFloat(num_um.value)
    const n2 = parseFloat(num_dois.value)
    if(isNaN(n1) || isNaN(n2) ){
      total.innerHTML = "Insira um valor!"
    } else{
    let produto = n1 + n2
    total.innerHTML = produto
    }
  
})
  menos.addEventListener('click', () => {
    
    const n1 = parseFloat(num_um.value)
    const n2 = parseFloat(num_dois.value)
    if(isNaN(n1) || isNaN(n2) ){
      total.innerHTML = "Insira um valor!"
    } else{
    let produto = n1 - n2
    total.innerHTML = produto
    }
  
})
  vezes.addEventListener('click', () => {
    
    const n1 = parseFloat(num_um.value)
    const n2 = parseFloat(num_dois.value)
    if(isNaN(n1) || isNaN(n2) ){
      total.innerHTML = "Insira um valor!"
    } else{
    let produto = n1 * n2
    total.innerHTML = produto
    }
  
})
 dividir.addEventListener('click', () => {
    const n1 = parseFloat(num_um.value)
    const n2 = parseFloat(num_dois.value)
    if (n2 === 0 || n1 === 0 ) {
        total.innerHTML = "Erro: Divisão por 0"
    } else {
        total.innerHTML = n1 / n2
    }
})

clear.addEventListener('click' , () =>{
  num_um.value = 0
  num_dois.value = 0
  total.innerHTML = ''
})


////conversor de moedas

// Pegamos os elementos (o objeto em si)
const input_moeda = document.getElementById('input_moeda');
const btnMoeda = document.getElementById('btnMoeda');
const realRes = document.getElementById('realRes');
const dolarRes = document.getElementById('dolarRes');
const euroRes = document.getElementById('euroRes');
const selecionarMoeda = document.getElementById('selecionarMoeda');

btnMoeda.addEventListener('click', function() {
    // PEGUE O VALOR DENTRO DO EVENTO DE CLIQUE
    let valorMoedafim = parseFloat(input_moeda.value);
    let selecionado = selecionarMoeda.value;

    // Validação
    if (isNaN(valorMoedafim)) {
        realRes.innerHTML = 'Digite um número válido!';
        realRes.style.backgroundColor = 'red';
        realRes.style.padding = '10px';
        realRes.style.borderRadius = '10px';
        return;
    } else {
        realRes.style.backgroundColor = 'transparent'; // Limpa o erro se for válido
        dolarRes.style.backgroundColor = 'transparent'; // Limpa o erro se for válido
        euroRes.style.backgroundColor = 'transparent'; // Limpa o erro se for válido
    }

    // Taxas de câmbio (Exemplo aproximado para 2026)
    let taxaDolar = 5.29;
    let taxaEuro = 6.29;

    if (selecionado === 'real') {
        realRes.innerHTML = " ";
        dolarRes.innerHTML = "US$ " + (valorMoedafim / taxaDolar).toFixed(2);
        euroRes.innerHTML = "€ " + (valorMoedafim / taxaEuro).toFixed(2);
      
        dolarRes.style.backgroundColor = 'green';
        dolarRes.style.padding = '10px';
        dolarRes.style.color = 'white';
        dolarRes.style.borderRadius = '10px';
        euroRes.style.backgroundColor = 'green';
        euroRes.style.padding = '10px';
        euroRes.style.marginTop = '10px';
        euroRes.style.color = 'white';
        euroRes.style.borderRadius = '10px';
        
        
      } 
      else if (selecionado === 'dolar') {
        dolarRes.innerHTML = " ";
        realRes.innerHTML = "R$ " + (valorMoedafim * taxaDolar).toFixed(2);
        euroRes.innerHTML = "€ " + (valorMoedafim * (taxaDolar / taxaEuro)).toFixed(2);


        realRes.style.backgroundColor = 'green';
        realRes.style.padding = '10px';
        realRes.style.color = 'white';
        realRes.style.borderRadius = '10px';
        euroRes.style.backgroundColor = 'green';
        euroRes.style.padding = '10px';
        euroRes.style.marginTop = '10px';
        euroRes.style.color = 'white';
        euroRes.style.borderRadius = '10px';
        
        
      } 
      else if (selecionado === 'euro') {
        euroRes.innerHTML = " ";
        realRes.innerHTML = "R$ " + (valorMoedafim * taxaEuro).toFixed(2);
        dolarRes.innerHTML = "US$ " + (valorMoedafim * (taxaEuro / taxaDolar)).toFixed(2);
        
        realRes.style.backgroundColor = 'green';
        realRes.style.padding = '10px';
        realRes.style.color = 'white';
        realRes.style.borderRadius = '10px';
        dolarRes.style.backgroundColor = 'green';
        dolarRes.style.padding = '10px';
        dolarRes.style.marginTop = '10px';
        dolarRes.style.color = 'white';
        dolarRes.style.borderRadius = '10px';

    }
});

//gerador de senhas


const rangeSenha = document.getElementById('caracteresTotais')
const amostra = document.getElementById('amostra_caractere')
const checkMaiuscula = document.getElementById('letrasMaiusculas')
const checkMinuscula = document.getElementById('letras')
const checkNumeros = document.getElementById('numeros')
const checkSimbolos = document.getElementById('simbolos')
const senhaGerada = document.getElementById('senhaGerada')
const gerar = document.getElementById('gerar')

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz' 
const numeros = '0123456789' 
const simbolos = '!@#%¨&*_-+=-'

amostra.textContent = rangeSenha.value //captura os valores do range


    
rangeSenha.addEventListener('input', function() { //ouve e passa pro "display" o numero que esta
    amostra.textContent = this.value;
});

gerar.addEventListener('click', () => {
   let caracteres = '' 

   
   
   if (checkMaiuscula.checked) caracteres += letrasMaiusculas 
   if (checkMinuscula.checked) caracteres += letrasMinusculas 
   if (checkNumeros.checked) caracteres += numeros 
   if (checkSimbolos.checked) caracteres += simbolos 
   let senha = '' 
   for (let i = 0; i < rangeSenha.value; i++) { 
     const randomIndex = Math.floor(Math.random() * caracteres.length) 
     if (caracteres === '') {
       senhaGerada.innerHTML = 'Selecione pelo menos uma opção!'
        return }
    senha += caracteres[randomIndex] }
    senhaGerada.innerHTML = senha
   })