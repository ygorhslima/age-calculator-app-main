/**
 * 
 * 
 * ## Visão Geral

### O Desafio

Os usuários devem ser capazes de:

* Visualizar a idade em anos, meses e dias após enviar uma data válida através do formulário
* Receber mensagens de erro de validação se:

  * Algum campo estiver vazio ao enviar o formulário
  * O número do dia não estiver entre 1 e 31
  * O número do mês não estiver entre 1 e 12
  * O ano estiver no futuro
  * A data for inválida, por exemplo: 31/04/1991 (abril tem apenas 30 dias)
* Visualizar o layout ideal da interface de acordo com o tamanho da tela do dispositivo
* Ver os estados de foco e de hover em todos os elementos interativos da página
* **Bônus**: Ver os números da idade animando até seu valor final quando o formulário for enviado

 */


const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const arrowButton = document.getElementById('btnCalc');
const yearsDisplay = document.getElementById('text-years');
const monthsDisplay = document.getElementById('text-months');
const daysDisplay = document.getElementById('text-days');
const resultado = document.getElementById("resultado");


// Adiciona event listeners para validação em tempo real (foco perdendo o campo)
arrowButton.addEventListener("click",()=>{
    let dia = Number.parseInt(dayInput.value)
    let mes = Number.parseInt(monthInput.value)
    let ano = Number.parseInt(yearInput.value)
    let ano_atual = new Date().getFullYear();
    let idade  = ano_atual - ano;


    resultado.innerHTML = `<p>você nasceu no dia ${dia}/${mes}/${ano} e em ${ano_atual} você tem ${idade} anos</p>`
})

dayInput.addEventListener("blur", validarDia())
monthInput.addEventListener("blur", validarMes())
yearInput.addEventListener("blur", validarAno())


function validarDia(){
   
}

function validarMes(){

}

function validarAno(){

}