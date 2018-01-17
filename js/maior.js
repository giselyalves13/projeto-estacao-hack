let numeros = [10,20,300,6,700,13,45];
let total = 0;

let maior = 0;

for(let numero of numeros){
	if(maior < numero){
		maior = numero;
	}
}
console.log(`O maior numero: ${maior}`);