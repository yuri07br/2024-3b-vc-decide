const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: " Um jovem rapaz foi dar sua opiniao sobre a legalizaçao da maconha  e ele era a favor da maconha falou que se fosse legal existiria menos preconceito e tambem acabava com o trafico. voce e a favor da legalizaçao da maconha?",
        alternativas: [
            {
                texto:"Sim eu sou a favor",
                afirmacao: "concordo por que a maconha e igual cigarro se fosse legal não teria trafico."
            },
            {
                texto:" Não eu sou contra",
                afirmacao: "resultado 02"
            }   
        ]
    },
    {
        enunciado: "Enunciado 02",
        alternativas: [
            {
                texto: "alternativa 03",
                afirmacao: "resultado03"
            },
            {
                texto: "alternativa 04",
                afirmacao: "resultado 04"
            }
        ]
    },
    {
        enunciado: "Enunciado 03",
        alternativas: [
            {
                texto: "alternativa 05",
                afirmacao: "resultado 05"
            },
            {
                texto: "alternativa 06",
                afirmacao: "resultado 06"
            }
        ]
    },
    {
        enunciado: "Enunciado 04",
        alternativas: [
            {
                texto: "alternativa 07",
                afirmacao: "resultado 07"
            },
            {
                texto: "alternativa 08",
                afirmacao: "resultado 08"
            }
        ]
    },
    {
        enunciado: "Enunciado 05",
        alternativas: [
            {
                texto: "alternativa 09",
                afirmacao: "resultado 09"
            },
            {
                texto: "alternativa 10",
                afirmacao: "resultado 10"
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = " Inicio do texto... "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();