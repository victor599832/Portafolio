const form = document.getElementById('Formulario');
let campos = document.querySelectorAll('.campos');
let Alerta = document.getElementById("Alerta");
document.querySelector('Textarea').value = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valido = true;
    campos.forEach(campo => {
        let tipo = campo.dataset.name;
        let error__name = campo.dataset.error;
        let error = document.querySelector(error__name);

        switch (tipo) {
            case 'nombre':
                    if (campo.value === "") {
                        error.style.display = 'block';
                        valido = false;
                    } else {
                        error.style.display = 'none';
                    }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(campo.value)) {
                    error.style.display = 'block';
                        valido = false;
                    } else {
                        error.style.display = 'none';
                    }
                break;
                case 'asunto':
                if (campo.value === "") {
                        error.style.display = 'block';
                        valido = false;
                    } else {
                        error.style.display = 'none';
                    }
                break;
                case 'mensaje':
                if (campo.value === "") {
                        error.style.display = 'block';
                        valido = false;
                    } else {
                        error.style.display = 'none';
                    }
                break;
            default:
                break;
        }
    });


    if (valido) {
        Alerta.classList.add('activa');
        emailjs.sendForm('service_lowo9bb','template_6sywnnn', this).then(() =>{
        setInterval(() => {
            Alerta.classList.remove('activa');
        }, 1000);
            form.reset();
        }, (err) => {
            alert('Error al enviar el mensaje: ' + JSON.stringify(err));
    });
    }
});

