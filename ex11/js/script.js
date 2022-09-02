
let results = [];

for (let i = 0; i < 36000; i++) {
   let alreadyIn;
   let dice1 = Math.floor(Math.random() * (7 - 1) + 1);
   let dice2 = Math.floor(Math.random() * (7 - 1) + 1);

   for (let y = 0; y < results.length; y++) {
      if(results[y][0] == dice1 + dice2) {
         results[y][1] +=1;
         alreadyIn = true;
      }
   }

   if(!alreadyIn) {
     results.push([(dice1+dice2),1]);
     alreadyIn = false;
   }
}

console.log("¿Qué valor ha salido de la suma de dados en 36000 tiradas?\n [suma, veces]\n");
console.log(results);
