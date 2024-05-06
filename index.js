const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let nameHeroi;
  let xp;
  
  readline.question("Digite o nome do heroi: ", function(name) {
    nameHeroi = name;
    readline.question("Digite a quantidade de xp: ", function(xpValue) {
      xp = parseInt(xpValue);
      if(xp < 1000){
        console.log("O Herói " + nameHeroi + ", está no nível Ferro");
      } else if(xp >= 1000 && xp < 2000){
        console.log("O Herói " + nameHeroi + ", está no nível Bronze");
      } else if(xp >= 2000 && xp < 5000){
        console.log("O Herói " + nameHeroi + ", está no nível Prata");
      } else if(xp >= 5000 && xp < 7000){
        console.log("O Herói " + nameHeroi + ", está no nível Ouro");
      } else if(xp >= 7000 && xp < 8000){
        console.log("O Herói " + nameHeroi + ", está no nível Platina");
      } else if(xp >= 8000 && xp < 9000){
        console.log("O Herói " + nameHeroi + ", está no nível Ascendente");
      } else if(xp >= 9000 && xp < 10000){
        console.log("O Herói " + nameHeroi + ", está no nível Imortal");
      } else if(xp >= 10000){
        console.log("O Herói " + nameHeroi + ", está no nível Radiante");
      }
      readline.close();
    });
  });
  