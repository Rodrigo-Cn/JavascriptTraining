var data = new Date();
var dia = data.getDate();
var semana1 = data.getDay();
var semana2;
var mes = data.getMonth();
var mes2;
var ano = data.getFullYear();
var hora = data.getHours();
var minutos = data.getMinutes();

switch(semana1){
    case 0:
        semana2 = "Domingo";
        break;
    case 1:
        semana2 = "Segunda-feira";
        break;
    case 2:
        semana2 = "Terça-feira";
        break;
    case 3:
        semana2 = "Quarta-feira";
        break;
    case 4:
        semana2 = "Quinta-feira";
        break;
    case 5:
        semana2 = "Sexta-feira";
        break;
    case 6:
        semana2 = "Sábado";
        break;
}

switch(mes){
    case 0:
        mes2 = "Janeiro";
        break;
    case 1:
        mes2 = "Fevereiro";
        break;
    case 2:
        mes2 = "Março";
        break;
    case 3:
        mes2 = "Abril";
        break;
    case 4:
        mes2 = "Maio";
        break;
    case 5:
        mes2 = "Junho";
        break;
    case 6:
        mes2 = "Julho";
        break;
    case 7:
        mes2 = "Agosto";
        break;
    case 8:
        mes2 = "Setembro";
        break;
    case 9:
        mes2 = "Outubro";
        break;
    case 10:
        mes2 = "Novembro";
        break;
    case 11:
        mes2 = "Dezembro";
        break;
}
var entrada = dia+' de '+mes2+' de '+ano+",        "+semana2+","+"      "+hora+":"+minutos;

var texto = document.querySelector(".text");

texto.textContent = entrada;