var sDatas = [
    ["01-01", "01-19", "CAPRICÓRNIO", "signo-astrologico-negro-de-capricornio.png"],
    ["01-21", , "82-18", "AQUÁRIO", "aquario.png"],
    ["02-19", "03-20", "PEIXES", "signo-astrologico-de-peixes.png"],
    ["03-21", "04-19", "ARIES", , "aries.png"],
    ["04-21", "05-20", "TOURO", "simbolo-do-signo-astrologico-de-touro.png"],
    ["05-21", "06-20", "GÊMEOS", "simbolo-do-signo-do-zodiaco-de-gemeos.png"],
    ["06-21", "07-22", "CÂNCER", "simbolo-do-signo-do-zodiaco-de-cancer.png"],
    ["07-23", "08-22", "LEÃO", "leao.png"],
    ["08-23", "09-22", "VIRGEM", "virgem.png"],
    ["09-23", "10-22", "LIBRA", "libra.png"],
    ["10-23", "11-21", "ESCORPIÃO", "escorpiao.png"],
    ["11-22", "12-21", "SAGITÁRIO", "sagitario.png"],
    ["12-22", "12-31", "CAPRICÓRNIO", "signo-astrologico-negro-de-capricornio.png"]
];
var lLimpar = false;

function exibir() {
    if (lLimpar = !lLimpar) {
        var dataDig = document.getElementById('data').value;

        var data = new Date(dataDig)

        var dia = data.getDate() + 1;
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var dataVetor;

        var novaData = new Date(mes + "-" + dia + "-" + ano);

        for (var i = 0; i < sDatas.length; i++) {
            dataVetor = sDatas[i][0] + "-" + ano;
            dataSig1 = new Date(dataVetor);
            dataVetor = sDatas[i][1] + "-" + ano;
            dataSig2 = new Date(dataVetor);

            if (novaData >= dataSig1 && novaData <= dataSig2) {
                document.getElementById('resposta').innerHTML = sDatas[i][2];

                document.getElementById('signoimgtds').src="imagens/"+sDatas[i][3];
                document.getElementById('botao').innerHTML="LIMPAR"
                document.getElementById('data').disabled=true;


            }
        }
    }else{
        document.getElementById('resposta').innerHTML="";
        document.getElementById('signoimgtds').src="imagens/signos.jpg";
        document.getElementById('botao').innerHTML="EXIBIR"
        document.getElementById('data').value=" ";
        document.getElementById('data').focus;
        document.getElementById('data').disabled=false;
    }
}