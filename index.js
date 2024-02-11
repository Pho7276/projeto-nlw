const perguntas = [
    {
        pergunta: "Qual é o nome do episódio em que Gumball e Darwin descobrem a identidade secreta de Banana Joe?",
        respostas: [
            "O Segredo",
            "O Caso",
            "O Mistério",
        ],
        correta: 0
    },
    {
        pergunta: "Quem dubla a voz de Gumball na versão original em inglês?",
        respostas: [
            "Jacob Hopkins",
            "Logan Grove",
            "Nicolas Cantu",
        ],
        correta: 1
    },
    {
        pergunta: "Quantos irmãos Darwin tem na família Watterson?",
        respostas: [
            "Nenhum",
            "Um",
            "Dois",
        ],
        correta: 2
    },
    {
        pergunta: "Em qual episódio Gumball e Darwin viram super-heróis?",
        respostas: [
            "O Herói",
            "O Poder",
            "O Salvador",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a profissão do Sr. Small, o psicoterapeuta da escola?",
        respostas: [
            "Veterinário",
            "Terapeuta de Casais",
            "Conselheiro Estudantil",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome da mãe de Penny?",
        respostas: [
            "Sarah",
            "Polly",
            "Patricia",
        ],
        correta: 1
    },
    {
        pergunta: "Quem é o vilão principal no episódio 'O Senhor'?",
        respostas: [
            "Sr. Robinson",
            "Sr. Wilson",
            "Sr. Senhor",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do episódio em que Gumball e Darwin tentam consertar o vazamento no teto?",
        respostas: [
            "A Reparação",
            "A Solução",
            "A Gambiarra",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do gato que costuma fazer aparições nas sombras em alguns episódios?",
        respostas: [
            "Banana Bob",
            "Homem Sombrio",
            "Mr. Cuddles",
        ],
        correta: 1
    },
    {
        pergunta: "Quantos episódios têm 'O Incrível Mundo de Gumball' em sua série completa?",
        respostas: [
            "180",
            "220",
            "250",
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const TotalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + TotalDePerguntas

 //Loop Perguntas
for(const item of perguntas) {
const itemquiz = template.content.cloneNode(true)
itemquiz.querySelector('h3').textContent = item.pergunta



//Loop Respostas
for(let resposta of item.respostas) {
const dt = itemquiz.querySelector('dl dt').cloneNode(true)
dt.querySelector('span').textContent = resposta
dt.querySelector('input').setAttribute('name' , 'pergunta' + perguntas.indexOf(item))
dt.querySelector('input').value = item.respostas.indexOf(resposta)
dt.querySelector('input').onchange = (event) => {
    const EstaCorreta = event.target.value == item.correta
    corretas.delete(item)
    if(EstaCorreta) {
    corretas.add(item)
    }
    mostrarTotal.textContent = corretas.size + ' de ' + TotalDePerguntas
    }




itemquiz.querySelector('dl').appendChild(dt)
}



//Remover Resposta A
itemquiz.querySelector('dl dt').remove()




// Bota a pergunta na tela
quiz.appendChild(itemquiz)

}