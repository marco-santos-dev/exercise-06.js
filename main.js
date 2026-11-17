// 6. Etanol ou gasolina? Leia o preço dos dois combustíveis. Se o etanol custar até 70% do preço da gasolina, ele compensa. Exiba qual abastecer e a diferença percentual.

const ethanolPrice = Number(prompt("Preço do etanol por litro:"));
const gasolinePrice = Number(prompt("Preço da gasolina por litro:"));

const ethanolRatio = (ethanolPrice / gasolinePrice) * 100;
const percentageDifference = Math.abs(100 - ethanolRatio);

if (ethanolRatio <= 70) {
    console.log(`Abasteça com etanol. Ele custa ${percentageDifference.toFixed(2)}% menos que a gasolina.`);
} else {
    console.log(`Abasteça com gasolina. O etanol custa ${ethanolRatio.toFixed(2)}% do preço da gasolina.`);
}