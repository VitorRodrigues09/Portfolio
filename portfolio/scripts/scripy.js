const botao = document.getElementById("modoClaroEscuro");
console.log(botao);

let claro = true;
botao.addEventListener("click", function () {
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
);

const NOME = "Vitor Rodrigues";
let tituloProfissional = "Designer de Jogos Profissional e Desenvolvedor de Software";
let minhaBio = "Sou um designer de jogos profissional e desenvolvedor de software com mais de 10 anos de experiência. Tenho trabalhado em diversos projetos de jogos, desde jogos indie até grandes produções. Sou apaixonado por criar experiências de jogo envolventes e inovadoras, e estou sempre buscando aprender novas habilidades e técnicas para aprimorar meu trabalho. Além disso, sou um entusiasta da tecnologia e adoro explorar as últimas tendências em desenvolvimento de software e design de jogos.";
let anoFormatura = 2028;
let mesFormatura = 12;
let diaFormatura = 31;
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;

let hoje = new Date(); //Dia atual
let mesAtual = hoje.getMonth() + 1; //Mês atual (getMonth() retorna de 0 a 11, por isso somamos 1)
let anoAtual = hoje.getFullYear(); //Ano atual
let diaAtual = hoje.getDate(); //Dia atual

let indefinido;
let nulo = null;
let curso = {
        nome: "Sistemas de Informação",
        semestre: 3,
        disciplina: "Design focado no usuário"
}

console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de formatura: " + anoFormatura;
document.getElementById("tempoRestanteParaFormatura").innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos`;

//Se ano para formatura for 0 ou <0 não que imprima os anos
if (anoFormatura - anoAtual <= 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = "-";
} else if (anoFormatura - anoAtual === 1) {
    document.getElementById("tempoRestanteParaFormatura")
    .innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} ano`;
} else {
    document.getElementById("tempoRestanteParaFormatura")
    .innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos`;   
};

let diasRestantes = diaFormatura - diaAtual;
let mesesRestantes = mesFormatura - mesAtual;
let anosRestantes = anoFormatura - anoAtual;

if (diasRestantes <= 0 && mesesRestantes <= 0 && anosRestantes <= 0) {
        document.getElementById("tempoRestanteParaFormatura").innerText = `Curso Concluído!`;
};

let nota = 8;
let aprovado = (nota >= 6)? "Aprovado" : "Reprovado";

document.write(`<p> Nota: ${nota} - ${aprovado} </p>`);

let diaSemana = 4;

switch (diaSemana) {
     case 1: diaEscrito = "Domingo"; break;
     case 2: diaEscrito = "Segunda-feira"; break;
     case 3: diaEscrito = "Terça-feira"; break;
     case 4: diaEscrito = "Quarta-feira"; break;
     case 5: diaEscrito = "Quinta-feira"; break;
     case 6: diaEscrito = "Sexta-feira"; break;
     case 7: diaEscrito = "Sábado"; break;
     default: diaEscrito = "Dia inválido";

}

document.write(`<p> Hoje é: ${diaEscrito} </p>`)

const btnVisual      = document.getElementById("btn-visual");
const btnLogica      = document.getElementById("btn-logica");
const resultadoQuiz  = document.getElementById("resultado-quiz");

btnVisual.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>🎨 Você tem perfil Front-End!</strong><br>
    Você curte criar interfaces, trabalhar com cores, layouts e a experiência do usuário.
    Tecnologias pra você: HTML, CSS, React, Vue.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f4fd";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});

btnLogica.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>⚙️ Você tem perfil Back-End!</strong><br>
    Você curte resolver problemas complexos, trabalhar com dados e fazer a mágica acontecer nos bastidores.
    Tecnologias pra você: Node.js, Python, bancos de dados.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f8f0";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});


let pontosFront  = 0;
let pontosBack   = 0;

btnVisual.addEventListener("click", function() {
  pontosFront++;
  exibirPerfil();
});

btnLogica.addEventListener("click", function() {
  pontosBack++;
  exibirPerfil();
});

function exibirPerfil() {
  if (pontosFront > pontosBack) {
    resultadoQuiz.textContent = "🎨 Perfil Front-End!";
  } else if (pontosBack > pontosFront) {
    resultadoQuiz.textContent = "⚙️ Perfil Back-End!";
  } else {
    resultadoQuiz.textContent = "🔄 Perfil Full Stack — você é dos dois!";
  }
}

