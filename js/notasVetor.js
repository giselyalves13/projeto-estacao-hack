let alunos = [
	{
		nome:'enzo',
		nota:8
	},
	{
		nome:'Valentina',
		nota: 7
	},
	{
		nome:'Fernanda',
		nota: 5
	},
	{
		nome:'Caique',
		nota: 2
	},
	{
		nome:'Marcelo',
		nota: 10
	}
]

let notas = 0;

for(let aluno of alunos){
	notas = aluno.nota + notas;
}

let media = notas / alunos.length;

console.log(notas);
console.log(media);
