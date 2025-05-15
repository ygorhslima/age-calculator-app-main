
/*
 Visualização da Idade: Anos, Meses e Dias

Este formulário permitirá aos usuários inserir uma data e visualizar sua idade em anos, meses e dias. O sistema incluirá validações robustas para garantir a precisão e a integridade dos dados inseridos.

### Requisitos Funcionais

* **Entrada de Data**: O usuário poderá inserir uma data de nascimento através de um formulário.
* **Cálculo da Idade**: Após a submissão de uma data válida, o sistema calculará e exibirá a idade do usuário em:
    * Anos
    * Meses
    * Dias

### Validações Necessárias

O formulário exibirá mensagens de erro caso alguma das seguintes condições seja verdadeira:

* **Campos Vazios**: Qualquer campo (dia, mês ou ano) estiver vazio no momento da submissão.
* **Dia Inválido**: O número do dia não estiver entre 1 e 31.
* **Mês Inválido**: O número do mês não estiver entre 1 e 12.
* **Ano Futuro**: O ano inserido for uma data futura.
* **Data Inválida**: A combinação de dia, mês e ano não formar uma data válida (por exemplo, 31 de abril de 1991, já que abril tem 30 dias).

### Requisitos de Interface do Usuário (UI)

* **Layout Responsivo**: A interface deve apresentar um layout otimizado que se adapte à tela do dispositivo do usuário (desktop, tablet, mobile).
* **Estados Interativos**: Todos os elementos interativos na página (campos de entrada, botões, etc.) devem ter:
    * **Estados de Hover**: Indicação visual quando o mouse estiver sobre o elemento.
    * **Estados de Foco**: Indicação visual quando o elemento estiver selecionado ou em foco (por exemplo, ao navegar com a tecla Tab).

### Bônus

* **Animação dos Números**: Ao submeter o formulário com uma data válida, os números que exibem a idade (anos, meses e dias) devem animar de forma suave até atingir seus valores finais.

---

Este resumo detalha os requisitos essenciais para o desenvolvimento dessa funcionalidade, abrangendo desde a entrada de dados e validações até a experiência do usuário e animações.
*/
document.addEventListener("DOMContentLoaded",()=>{
    const inputDay = document.getElementById("day")
    const inputMonth = document.getElementById("month")
    const inputYear = document.getElementById("year")

    const spanText_years = document.getElementById("text-years");
    const spanText_months = document.getElementById("text-months");
    const spanText_days = document.getElementById("text-days");

    const btnCalc = document.getElementById("btnCalc");

 

    /**FUNÇÃO DO CÁLCULO DE IDADE */
    function calcularIdade(dataNascimentoStr){
        const [year,month,day] = dataNascimentoStr.split('-').map(Number);
        const aniversario = new Date(year,month - 1, day)
        const hoje = new Date();

        let anos = hoje.getFullYear() - aniversario.getFullYear(); 
        let meses = hoje.getMonth() - aniversario.getMonth();
        let dias = hoje.getDate() - aniversario.getDate()

        /**ajustar se o dia atual ele for menor que o dia do aniversário */
        if(dias < 0){
            meses--;
            dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
        }

        /**ajusta se o mês atual for menor que o mês do aniversário */
        if(meses < 0){
            anos--;
            meses += 12;
        }
        return {anos, meses,dias}
    }

    btnCalc.addEventListener("click",(e)=>{
        e.preventDefault();
        
        /**PEGA OS VALORES DOS INPUTS */
        const day = inputDay.value;
        const month = inputMonth.value;
        const year = inputYear.value

         const dataNascimentoFormatada = `${year}-${month}-${day}`;

         const idade = calcularIdade(dataNascimentoFormatada);

         spanText_years.textContent = idade.anos
         spanText_months.textContent = idade.meses
         spanText_days.textContent = idade.anos
    })

})
