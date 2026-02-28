// dark e light mode

const lightModeBtn = document.querySelector('#lightModeBtn')
lightModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('lightMode')
})

//

//seleção dos elementos do HTML para exibição dos resultados futuros
        const resLength = document.querySelector('.length') //seleciona o elemento length do HTML
        const maxRes = document.querySelector('.max') //seleciona o elemento max do HTML
        const minRes = document.querySelector('.min') //seleciona o elemento min do HTML
        const sumRes = document.querySelector('.sum') //seleciona o elemento sum do HTML
        const mediaRes = document.querySelector('.media') //seleciona o elemento media do HTML

//sistema do input

const adicionarBtn = document.querySelector('#adicionar')
const numeroInput = document.querySelector('#numero')
const lista = document.querySelector('#lista')
const finalizarBtn = document.querySelector('#finalizar')

adicionarBtn.addEventListener('click', () => {
    const numero = parseInt(numeroInput.value)
    //se não for um número ou se for menor que um ou se for maior que 100...
    if (isNaN(numero) || numero < 1 || numero > 100) {
        alert('Por favor, digite um número válido entre 1 e 100.') //exibe isso
        return
    }
    else if (Array.from(lista.children) //se o número já tiver sido adicionado... 
        .some(item => parseInt(item.textContent) === numero)) { //evita o bug do 1 e 10 serem considerados iguais, convertendo o texto para número inteiro.
        alert('Número já adicionado. Por favor, digite um número diferente.') //exibe isso
        return
        //Em português está escrito assim: o array da lista e seus valores internos, se tiver algum
        //item do array for igual ao número digitado, transforme-o em número inteiro.
        //O input, naturalmente, transforma o número digitado em string, então é necessário convertê-lo
        //em número inteiro para a comparação.

        //Some é um método que percorre o array que verifica se pelo menos um elemento do array 
        //satisfazendo uma condição, retornando true ou false. 

        //Nesse caso, ele verifica se algum item da lista é igual ao número digitado, evitando 
        //que o mesmo número seja adicionado mais de uma vez.
    }

    else { //se o número for válido e não tiver sido adicionado...
        const numeroAdicionado = document.createElement('li') //cria um elemente de lista
        numeroAdicionado.textContent = numero //adiciona em "numeroAdicionado" o número digitado
        lista.appendChild(numeroAdicionado) //adiciona o elemento criado em "lista"
        numeroInput.value = '' //limpa o campo de input
    }
})

finalizarBtn.addEventListener('click', () => {
    //cria um array com os números da lista, convertendo o texto para números inteiros
    const numeros = Array.from(lista.children).map(item => parseInt(item.textContent))
    //se a lista estiver vazia...
    if (numeros.length < 2) {
        alert('Adicione números antes de finalizar.') //exibe isso.
    }
    else {
        const length = numeros.length //quantos números tem na lista

        const max = Math.max(...numeros) //maior numero da lista

        const min = Math.min(...numeros) //menor numero da lista

        let sum = 0 //variavel para armazenar a soma dos numeros da lista
        for (let i = 0; i < numeros.length; i++) { //for que percorre e soma o array da lista
            sum += numeros[i] //soma o numero atual do array com a soma anterior
        }

        const resMedia = sum / numeros.length //calculo da media

        //exibição dos resultados nos elementos selecionados
        resLength.textContent = `Temos ${length} números cadastrados.` //exibe a quantidade de numeros da lista
        maxRes.textContent = `O maior número da lista é ${max}.` //exibe o maior número da lista
        minRes.textContent = `O menor número da lista é ${min}.` //exibe o menor número da lista
        sumRes.textContent = `A soma dos números da lista é ${sum}.` //exibe a soma de todos os números da lista
        mediaRes.textContent = `A média dos números da lista é ${resMedia.toFixed(2)}.` //exibe a média dos números da lista
    }

})
