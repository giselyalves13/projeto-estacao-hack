let abrirDuvida = () =>{
    let duvida = document.querySelector('.form-duvida');
    let feedback = document.querySelector('.form-feedback');

    feedback.style.display = 'none';

    duvida.style.display = 'flex';
}
let abrirFeedback = () =>{
    let duvida = document.querySelector('.form-duvida');
    let feedback = document.querySelector('.form-feedback');

    duvida.style.display = 'none';
    feedback.style.display = 'block';
}
