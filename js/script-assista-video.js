let abrirDuvida = () =>{
    let duvida = document.querySelector('.form-duvida');
    let feedback = document.querySelector('.form-feedback');

    feedback.style.display = 'none';
    if(duvida.style.display == 'inline'){
        duvida.style.display = 'none';
    }else{
        duvida.style.display = 'inline';
    }
    
}
let abrirFeedback = () =>{
    let duvida = document.querySelector('.form-duvida');
    let feedback = document.querySelector('.form-feedback');

    duvida.style.display = 'none';
    if(feedback.style.display == 'block'){
        feedback.style.display = 'none';
    }else{
        feedback.style.display = 'block';
    }
}
