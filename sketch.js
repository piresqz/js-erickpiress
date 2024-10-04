let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
  campoRomance = createCheckbox("Gosta de romance?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeRomance = campoRomance.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura, gostaDeRomance);

  fill(color(76, 0, 115))
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura, gostaDeRomance) {
  if (idade >= 10) {
    if (idade >= 16) {
      if (gostaDeRomance) {}
      return "50 Tons de cinza";
    } else {
      return "Oppenheimer";
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Gente grande 2";          
        } else{
         return "Tropa de Elite";
        }
      } else {
        if (gostaDeFantasia) {
          return "As aventuras de up";
        } else {
          return "Planeta dos macacos";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Como treinar seu dragão";
    } else {
      return "Carrosel";
    }
  }
}
