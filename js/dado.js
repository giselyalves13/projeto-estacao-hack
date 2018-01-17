let numero = Math.random() * 6;
let numeroArredondado = Math.ceil(numero);

let chute = 2;

if(numeroArredondado == chute){
	console.log(`você acertou,  valor do  dado: ${numeroArredondado}, seu chute: ${chute}`);	
}else{
	console.log(`você errou,  valor do  dado: ${numeroArredondado}, seu chute: ${chute}`);
}



