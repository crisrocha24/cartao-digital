
// ========================================
// PORTFÓLIO PESSOAL - CRISTINA ROCHA
// ========================================


// 1. LINK DO WHATSAPP

const whatsappLink =
    "https://wa.me/5585999203459?text=" +
    encodeURIComponent(
        "Olá, Cristina! Conheci seu portfólio e gostaria de conversar com você."
    );


// 2. LOCAL ONDE O QR CODE SERÁ EXIBIDO

const areaQRCode = document.getElementById("qrcode");


// 3. GERAR QR CODE

function gerarQRCode() {

    if (!areaQRCode) {
        console.error("Elemento do QR Code não encontrado.");
        return;
    }

    if (typeof QRCode === "undefined") {
        console.error("Biblioteca QRCode.js não foi carregada.");
        return;
    }

    new QRCode(areaQRCode, {
        text: whatsappLink,
        width: 180,
        height: 180,
        colorDark: "#202820",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H
    });

    console.log("QR Code gerado com sucesso!");
}


// 4. EXECUTAR A FUNÇÃO

gerarQRCode();
