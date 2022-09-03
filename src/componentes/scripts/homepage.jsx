export default function Video() {
  function aleatorioInteiro(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = aleatorioInteiro(1, 8);

  escolhaVideo(rndInt);

  function escolhaVideo(rndInt) {
    switch (rndInt) {
      case 1:
        document.getElementById("videoJanela").src =
          "https://www.youtube.com/embed/YFXHfEqMcis";
        break;
      case 2:
        document.getElementById("videoJanela").src =
          "https://www.youtube.com/embed/3Yh_6_zItPU";
        break;
      case 3:
        document.getElementById("videoJanela").src =
          "https://www.youtube.com/embed/9GgxinPwAGc";
        break;
      case 4:
        document.getElementById("videoJanela").src =
          "https://www.youtube.com/embed/nW948Va-l10";
        break;
      case 5:
        document.getElementById("videoJanela").src =
          "https://www.youtube.com/embed/b9EkMc79ZSU";
        break;
      case 6:
        document.getElementById("videoJanela").src =
          "https://www.youtube.com/embed/rrwycJ08PSA";
        break;
      case 7:
        document.getElementById("videoJanela").src =
          "https://www.youtube.com/embed/OkTEQwsE8l4";
        break;
      case 8:
        document.getElementById("videoJanela").src =
          "https://www.youtube.com/embed/_InqQJRqGW4";
        break;
    }
  }
}
