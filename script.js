const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const arrowButton = document.getElementById('btnCalc');

const yearsDisplay = document.getElementById('text-years');
const monthsDisplay = document.getElementById('text-months');
const daysDisplay = document.getElementById('text-days');

const resultado = document.getElementById("resultado");

// Adiciona event listeners para validação em tempo real (foco perdendo o campo)
arrowButton.addEventListener("click", calcularIdade);

function setError(inputElement, mensagem) {
    const container = inputElement.parentNode;
    let errorSpan = container.querySelector('.error-message');
    if (!errorSpan) {
        errorSpan = document.createElement('span');
        errorSpan.classList.add('error-message');
        container.appendChild(errorSpan);
    }
    errorSpan.textContent = mensagem;
    inputElement.classList.add('error-input');
    const label = container.querySelector('.lbl-age');
    label.classList.add('error-label');
    return false; // Indica que houve um erro
}

function clearError(inputElement) {
    const container = inputElement.parentNode;
    const errorSpan = container.querySelector('.error-message');
    if (errorSpan) {
        errorSpan.remove();
    }
    inputElement.classList.remove('error-input');
    const label = container.querySelector('.lbl-age');
    label.classList.remove('error-label');
    return true; // Indica que não houve erro
}

function validarDia(dia) {
    if (!dia.trim()) {
        return setError(dayInput, 'This field is required');
    }
    const diaNum = parseInt(dia);
    if (isNaN(diaNum) || diaNum < 1 || diaNum > 31) {
        return setError(dayInput, 'Must be a valid day');
    }
    return clearError(dayInput);
}

function validarMes(mes) {
    if (!mes.trim()) {
        return setError(monthInput, 'This field is required');
    }
    const mesNum = parseInt(mes);
    if (isNaN(mesNum) || mesNum < 1 || mesNum > 12) {
        return setError(monthInput, 'Must be a valid month');
    }
    return clearError(monthInput);
}

function validarAno(ano) {
    if (!ano.trim()) {
        return setError(yearInput, 'This field is required');
    }
    const anoNum = parseInt(ano);
    const anoAtual = new Date().getFullYear();
    if (isNaN(anoNum) || anoNum > anoAtual) {
        return setError(yearInput, 'Must be in the past');
    }
    return clearError(yearInput);
}

function calcularIdade() {
    const diaValido = validarDia(dayInput.value);
    const mesValido = validarMes(monthInput.value);
    const anoValido = validarAno(yearInput.value);

    if (diaValido && mesValido && anoValido) {
        const diaNasc = parseInt(dayInput.value);
        const mesNasc = parseInt(monthInput.value);
        const anoNasc = parseInt(yearInput.value);

        const dataNascimento = new Date(anoNasc, mesNasc - 1, diaNasc);
        const dataAtual = new Date();

        if (isNaN(dataNascimento.getTime())) {
            setError(dayInput, 'Must be a valid date');
            setError(monthInput, 'Must be a valid date');
            setError(yearInput, 'Must be a valid date');
            resultado.textContent = ''; // Limpa qualquer resultado anterior
            return;
        } else {
            clearError(dayInput);
            clearError(monthInput);
            clearError(yearInput);
        }

        let anos = dataAtual.getFullYear() - dataNascimento.getFullYear();
        let meses = dataAtual.getMonth() - dataNascimento.getMonth();
        let dias = dataAtual.getDate() - dataNascimento.getDate();

        if (meses < 0 || (meses === 0 && dias < 0)) {
            anos--;
            meses += 12;
        }

        if (dias < 0) {
            const ultimoDiaDoMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
            dias += ultimoDiaDoMesAnterior;
            meses--;
            if (meses < 0) {
                meses = 11;
            }
        }

        exibirResultado(anos, meses, dias, diaNasc, mesNasc, anoNasc);
    } else {
        resultado.textContent = ''; // Limpa o resultado em caso de erro
        yearsDisplay.textContent = '--';
        monthsDisplay.textContent = '--';
        daysDisplay.textContent = '--';
    }
}

function exibirResultado(anos, meses, dias, diaNasc, mesNasc, anoNasc) {
    yearsDisplay.textContent = anos;
    monthsDisplay.textContent = meses;
    daysDisplay.textContent = dias;
    resultado.textContent = `Você nasceu em ${diaNasc}/${mesNasc}/${anoNasc} e sua idade é ${anos} anos, ${meses} meses e ${dias} dias.`;
}