const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "",
        alternativa: [
            {
            texto:"m autismo, para que suas necesidades sejam atendidas corretamente.",
            afirmacao:""
            },
            {
            texto:".",
            afirmacao:""
            }
        ]
    },
    {
        enunciado: "Ryan completou 12 anos e sua mãe percebeu que ele tinha uma boa audição e gostava de escutar música, decidiu colocá-lo em uma escola de música, que instrumento Ryan deveria tocar?",
        alternativa: [
            {
            texto:"Flauta, pois é o instrumento favorito de Ryan, mas ele tem bastante dificuldade para tocar.",
            afirmacao:""
            },
            {
            texto:"",
            afirmacao:""
            }
        ]
    },
    {
        enunciado: "Com 19 anos, Ryan conheceu Isadora, uma garota muito bondoza que cuidava de crianças autistas, Ryan queria chamâ-la para sair, mas seus amigos disseram que não uma boa ideia, o que Ryan deve fazer?",
        alternativa: [
                {
                texto:"A3",
                afirmacao:""
                },
                {
                texto:"A3",
                afirmacao:""
                }
        ]
    },
    {
        enunciado: "Pergunta 04",
        alternativa: [
                {
                texto:"A4",
                afirmacao:""
                },
                {
                texto:"A4",
                afirmacao:""
                }
        ]
    },
    {
        enunciado: "Pergunta 05",
        alternativa: [
                {
                texto:"A5",
                afirmacao:""
                },
                {
                texto:"A5",
                afirmacao:""
                }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }

}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado (){
    caixaPerguntas.textContent = "Início do texto"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostrarPerguntas();
