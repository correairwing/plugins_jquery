$(document).ready(function(){
    $('#telefone').mask('(00)00000-0000');

    $('#cep').mask('00000-000');

    $('#cpf').mask('000.000.000-00')

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            name: 'Por favor, insira o seu nome.',
            telefone: 'Esse campo é obrigatório.',
            email: 'Esse campo é obrigatório.',
            cpf: 'Esse campo é obrigatório.',
            endereco: 'Esse campo é obrigatório.',
            cep: 'Esse campo é obrigatório.',
            
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})