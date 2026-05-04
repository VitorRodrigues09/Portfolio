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

