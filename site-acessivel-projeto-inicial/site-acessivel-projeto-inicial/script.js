document.addEventListener('DOMContentLoaded', function () {
    let tamanhoAtualFonte = 1;

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        if (tamanhoAtualFonte < 0.5) tamanhoAtualFonte = 0.5; // Evita fonte minúscula demais
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
});
const contrasteBotao = document.getElementById('contraste');

contrasteBotao.addEventListener('click', function () {
    document.body.classList.toggle('alto-contraste');
});