function calcularTiempo(){
    
    let timeD = new Date();

    let horasD = timeD.getHours();
    let minutosD = timeD.getMinutes();
    let segundosD = timeD.getSeconds();


    horasD = horasD < 10 ? "0" + horasD : horasD;
    minutosD = minutosD < 10 ? "0" + minutosD : minutosD;
    segundosD= segundosD < 10 ? "0" + segundosD : segundosD ;

    amPMHours = ((horasD + 11) % 12 + 1),
    amPM = (horasD < 12) || (horasD == 24)  ? 'AM' : 'PM';

    let pantallaRelojD = amPMHours + ":" + minutosD + ":" + segundosD + " " + amPM;
    let relojDigital = document.querySelector(".relojDigital")
    relojDigital.innerHTML = pantallaRelojD;

}

setInterval(calcularTiempo, 1000);