let numeros = [10,20,300,6,7,13,45];

let contador = 0;

let numerosPares= [];

for( let numero of numeros){
	if(numero % 2 != 1){
		contador = contador + 1;
		numerosPares.push(numero);
	}
}

console.log(contador);

for(let numero of numerosPares){
	console.log(numero);
}