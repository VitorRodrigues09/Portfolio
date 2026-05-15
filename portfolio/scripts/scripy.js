const botao = document.getElementById("modoClaroEscuro");
console.log(botao);

let claro = true;

function trocarTema() {

    if (claro) {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        botao.textContent = "Modo Claro";

    } else {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        botao.textContent = "Modo Escuro";
    }

    claro = !claro;
}

botao.addEventListener("click", trocarTema);


'use strict';

const NOME = "Vitor Rodrigues";

let tituloProfissional =
"Designer de Jogos Profissional e Desenvolvedor de Software";

let minhaBio =
"Sou um designer de jogos profissional e desenvolvedor de software com mais de 10 anos de experiência. Tenho trabalhado em diversos projetos de jogos, desde jogos indie até grandes produções. Sou apaixonado por criar experiências de jogo envolventes e inovadoras, e estou sempre buscando aprender novas habilidades e técnicas para aprimorar meu trabalho. Além disso, sou um entusiasta da tecnologia e adoro explorar as últimas tendências em desenvolvimento de software e design de jogos.";

let anoFormatura = 2028;
let mesFormatura = 12;
let diaFormatura = 31;

let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;


let hoje = new Date(); //Dia atual

//Mês atual (getMonth() retorna de 0 a 11, por isso somamos 1)
let mesAtual = hoje.getMonth() + 1;

let anoAtual = hoje.getFullYear(); //Ano atual
let diaAtual = hoje.getDate(); //Dia atual


let indefinido;
let nulo = null;

let curso = {
    nome: "Sistemas de Informação",
    semestre: 3,
    disciplina: "Design focado no usuário"
};

function mostrarTipos() {

    console.log(typeof nulo);
    console.log(typeof indefinido);
    console.log(typeof anoFormatura);
    console.log(typeof minhaBio);
    console.log(typeof tituloProfissional);
    console.log(typeof NOME);
    console.log(typeof curso);
}

mostrarTipos();


function mostrarInformacoes() {

    document.getElementById("meuNome").innerText = NOME;

    document.getElementById("tituloProfissional").innerText =
        tituloProfissional;

    document.getElementById("minhaBio").innerText =
        minhaBio;

    document.getElementById("anoFormatura").innerText =
        "Ano de formatura: " + anoFormatura;
}

mostrarInformacoes();


function calcularTempoFormatura() {

    let anosRestantes = anoFormatura - anoAtual;
    let mesesRestantes = mesFormatura - mesAtual;
    let diasRestantes = diaFormatura - diaAtual;

    let elemento =
        document.getElementById("tempoRestanteParaFormatura");

    //Se ano para formatura for 0 ou <0 não que imprima os anos
    if (anosRestantes <= 0) {

        elemento.innerText = "-";

    } else if (anosRestantes === 1) {

        elemento.innerText =
        `Tempo restante para formatura: ${anosRestantes} ano`;

    } else {

        elemento.innerText =
        `Tempo restante para formatura: ${anosRestantes} anos`;
    }

    if (
        diasRestantes <= 0 &&
        mesesRestantes <= 0 &&
        anosRestantes <= 0
    ) {

        elemento.innerText = `Curso Concluído!`;
    }
}

calcularTempoFormatura();


function verificarNota() {

    let nota = 8;

    let aprovado =
    (nota >= 6) ? "Aprovado" : "Reprovado";

    document.write(`<p> Nota: ${nota} - ${aprovado} </p>`);
}

verificarNota();


function mostrarDiaSemana() {

    let diaSemana = 4;
    let diaEscrito;

    switch (diaSemana) {

        case 1:
            diaEscrito = "Domingo";
            break;

        case 2:
            diaEscrito = "Segunda-feira";
            break;

        case 3:
            diaEscrito = "Terça-feira";
            break;

        case 4:
            diaEscrito = "Quarta-feira";
            break;

        case 5:
            diaEscrito = "Quinta-feira";
            break;

        case 6:
            diaEscrito = "Sexta-feira";
            break;

        case 7:
            diaEscrito = "Sábado";
            break;

        default:
            diaEscrito = "Dia inválido";
    }

    document.write(`<p> Hoje é: ${diaEscrito} </p>`);
}

mostrarDiaSemana();


const btnVisual = document.getElementById("btn-visual");
const btnLogica = document.getElementById("btn-logica");
const resultadoQuiz = document.getElementById("resultado-quiz");

let pontosFront = 0;
let pontosBack = 0;

function estilizarResultado(cor) {

    resultadoQuiz.style.backgroundColor = cor;
    resultadoQuiz.style.padding = "12px";
    resultadoQuiz.style.borderRadius = "8px";
    resultadoQuiz.style.marginTop = "10px";
}

function exibirPerfil() {

    if (pontosFront > pontosBack) {

        resultadoQuiz.innerHTML = `
        <strong>🎨 Você tem perfil Front-End!</strong><br>
        Você curte criar interfaces, trabalhar com cores,
        layouts e a experiência do usuário.
        Tecnologias pra você: HTML, CSS, React, Vue.
        `;

        estilizarResultado("#e8f4fd");

    } else if (pontosBack > pontosFront) {

        resultadoQuiz.innerHTML = `
        <strong>⚙️ Você tem perfil Back-End!</strong><br>
        Você curte resolver problemas complexos,
        trabalhar com dados e fazer a mágica acontecer
        nos bastidores.
        Tecnologias pra você: Node.js, Python,
        bancos de dados.
        `;

        estilizarResultado("#e8f8f0");

    } else {

        resultadoQuiz.textContent =
        "🔄 Perfil Full Stack — você é dos dois!";
    }
}

function votarFront() {

    pontosFront++;
    exibirPerfil();
}

function votarBack() {

    pontosBack++;
    exibirPerfil();
}

btnVisual.addEventListener("click", votarFront);
btnLogica.addEventListener("click", votarBack);


function mostrarPares() {

    for (let i = 0; i <= 20; i++) {

        let pares =
        (i % 2 === 0) ? "Par" : "Ímpar";

        console.log(`${i} é ${pares}`);
    }
}

mostrarPares();


let object = {
    Nome: "Vitor",
    Idade: 24,
    Profissão: "Designer de Jogos"
};

function mostrarObjeto(objeto) {

    for (let chave in objeto) {

        document.write(
        `<p>${chave}: ${objeto[chave]}</p>`
        );
    }
}

mostrarObjeto(object);


let alunos = [
    "Vitória",
    "Beatriz",
    "Gabriel",
    "Vitor",
    "Leo"
];

function verificarPresenca() {

    for (let contem of alunos) {

        if (contem === "Vitor") {

            document.write(
            `<p> ${contem} - Presente!</p>`
            );

        } else {

            document.write(
            `<p> ${contem} - Ausente!</p>`
            );
        }
    }
}

verificarPresenca();


function pedirNumeroPar() {

    let num = prompt("Prompt 1 - Diga um número par");

    while (num % 2 !== 0) {

        num = prompt(
        "Ops, esse número não é par. Tente novamente:"
        );
    }

    do {

        num = prompt(
        "Prompt 2 - Diga um número par:"
        );

    } while (num % 2 !== 0);
}

pedirNumeroPar();


let qualidades = {
    Nome: "Vitor Rodrigues Andrade",
    Idade: 17,
    Profissão:
    "Sei desenhar, sou criativo, sou dedicado, sou amigável, sou um bom aluno"
};

mostrarObjeto(qualidades);


let projetos = [

  //Objeto de index 0

    {
        nome: "FORTNITE: Chapter 8 Map",

        tecnologias: ["Unreal Engine 5.7"],

        conhecimentos: [
            "Modelagem 3D",
            "Texturização",
            "Iluminação",
            "Design de Níveis"
        ],

        descricao:
        "Criação de um mapa completo para o jogo Fortnite, utilizando Unreal Engine 5.7. O projeto envolve modelagem 3D detalhada, texturização de acordo com o estilo do jogo, iluminação cartoonesca e design de níveis envolventes para proporcionar uma experiência de jogo imersiva que cative o jogador com os locais e cenários."
    },
];

function mostrarProjeto() {

    let titulo = document.createElement("h2");
    titulo.innerText = projetos[0].nome;

    let descricao = document.createElement("p");
    descricao.innerText = projetos[0].descricao;

    let tecnologias = document.createElement("ul");

    tecnologias.innerText =
    "Tecnologias Utilizadas: " +
    projetos[0].tecnologias.join(", ");

    document.body.appendChild(titulo);
    document.body.appendChild(descricao);
    document.body.appendChild(tecnologias);

    console.log(projetos[0].nome);
    console.log(projetos[0].tecnologias);
    console.log(projetos[0].descricao);
}

mostrarProjeto();


/*
Sintaxe padrão de uma Função
function nomeDaFuncao(parametro1, parametro2,...){
  return valorDeRetorno

}*/

function meuPeso(peso) {

    return function (altura) {

        return peso / altura ** 2;
    }
}

let imc = meuPeso(68)(1.67);

let imc2 = meuPeso(75);

console.log(imc);
console.log(imc2(1.80));
  
//let num = prompt("Diga um número par");
//while (num % 2 !== 0) {
//num = prompt("Ops, esse número não é par. Por favor, tente novamente");
//};
