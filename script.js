const form = document.getElementById('Formulario');
document.querySelector('Textarea').value = '';

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let Nombre = document.getElementById('Nombre').value;
    let Correo = document.getElementById('Email').value;
    let Asunto = document.getElementById('Asunto').value;
    let Mensaje = document.getElementById('Textarea').value;
    if (Nombre === '') {
        alert('Rellenalo');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Correo)) {
      alert('Por favor, ingresa un correo válido');
      return;
    }

     if (Asunto === '') {
        alert('Rellenalo');
        return;
    }

    if (Mensaje.length < 6 ) {
        alert('El mensaje debe tener almenos 6 Caracteres');
        return;
    }

    emailjs.sendForm('service_lowo9bb','template_6sywnnn', this).then(() =>{
        alert('¡Mensaje enviado con éxito!');
            form.reset();
        }, (err) => {
            alert('Error al enviar el mensaje: ' + JSON.stringify(err));
    });
   
});


