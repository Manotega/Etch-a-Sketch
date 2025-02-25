const container =  document.querySelector("section");
const botaoGrid = document.querySelector("#enviar");
const blackButton = document.querySelector("#blackButton");
const grayButton = document.querySelector("#grayButton");
const eraserButton = document.querySelector("#eraserButton");
const colorButton = document.querySelector("#colorButton");
const rainbowButton = document.querySelector("#rainbowButton");
const erro = document.querySelector("#erro");

let corQuadrado = "black"

blackButton.addEventListener("click", () => {
    corQuadrado = "black";
})
grayButton.addEventListener("click", () => {
    corQuadrado = "gray";
})
eraserButton.addEventListener("click", () => {
    corQuadrado = "white";
})
colorButton.addEventListener("click", () => {
    corQuadrado = getRandomColor();
})
rainbowButton.addEventListener("click", () => {
    corQuadrado = "rainbow";
})

function definirTamanhoGrid(tamanhoGrid) {
    let tamanhoQuadrado = 500 / tamanhoGrid;

    for (let i = 0; i < tamanhoGrid**2; i++) {
        const quadrado = document.createElement("div");

        quadrado.style.width = `${tamanhoQuadrado}px`;
        quadrado.style.height = `${tamanhoQuadrado}px`;
        container.appendChild(quadrado);

        quadrado.addEventListener("mouseenter", () => {
            if (corQuadrado === "rainbow") {
                quadrado.style.backgroundColor = getRandomColor();
            } else {
            quadrado.style.backgroundColor = corQuadrado;
            }

            let opacidade = parseFloat(quadrado.style.opacity) || 0;
            opacidade = (opacidade) + 0.2;
            quadrado.style.opacity = opacidade;
        })
    }
}

botaoGrid.addEventListener("click", () => {
    let valor = document.querySelector("input").value;
    while (valor > 64 || valor < 2 && valor !== 0) {
        erro.innerHTML = ""
        const mensagemErro = document.createElement("p");
        mensagemErro.textContent = "ESCOLHA UM VALOR ENTRE 2 E 64";
        erro.appendChild(mensagemErro);
        valor = 0;
    }

    if (1 < valor && valor < 64) {
        erro.innerHTML = ""
    }
    container.innerHTML = ""
    definirTamanhoGrid(valor);
})

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}