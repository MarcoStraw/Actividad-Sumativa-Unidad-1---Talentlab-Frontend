//Definiendo arreglos en Javascript

//Arreglo User

var arregloUser = new Array();
arregloUser[0] = "errorRut";
arregloUser[1] = "errorVerificador";
arregloUser[2] = "errorNombre";
arregloUser[3] = "errorApellido";
arregloUser[4] = "errorNacimiento";
arregloUser[5] = "errorDireccion";
arregloUser[6] = "errorComuna";
arregloUser[7] = "errorVehiculo";
arregloUser[8] = "errorMarca";
arregloUser[9] = "errorModelo";
arregloUser[10] = "errorAño";

//Definiendo la función validar()

function validar() {
    var entrada = new Array();
    entrada[0] = document.getElementById('rut').value;
    entrada[1] = document.getElementById('digitoverificador').value;
    entrada[2] = document.getElementById('nombre').value;
    entrada[3] = document.getElementById('apellido').value;
    entrada[4] = document.getElementById('nacimiento').value;
    entrada[5] = document.getElementById('direccion').value;
    entrada[6] = document.getElementById('comuna').value;
    entrada[7] = document.getElementById('vehiculo').value;
    entrada[8] = document.getElementById('marca').value;
    entrada[9] = document.getElementById('modelo').value;
    entrada[10] = document.getElementById('año').value;

    var error = new Array();
    error[0] = "<span style='color:red'>Ingrese el Rut!!</span>";
    error[1] = "<span style='color:red'>digito verificador invalido!!</span>";
    error[2] = "<span style='color:red'>Ingrese el nombre!!</span>";
    error[3] = "<span style='color:red'>Ingrese apellido!!</span>";
    error[4] = "<span style='color:red'>Ingrese fecha de nacimiento valida!!</span>";
    error[5] = "<span style='color:red'>Ingrese direccion!!</span>";
    error[6] = "<span style='color:red'>Ingrese comuna!!</span>";
    error[7] = "<span style='color:red'>Ingrese Tipo de Vehiculo</span>";
    error[8] = "<span style='color:red'>Ingrese Marca</span>";
    error[9] = "<span style='color:red'>Ingrrese Modelo</span>";
    error[10] = "<span style='color:red'>Ingrese Año valido!!</span>";

    //Definiendo un ciclo foreach Javascrit para la validación
    for (i in entrada) {
        var mensajeError = error[i];
        var valorArreglo = arregloUser[i];

        if (entrada[i] == "") {
            document.getElementById(valorArreglo).innerHTML = mensajeError;
        }

        else {
            document.getElementById(valorArreglo).innerHTML = "Campo válido";
        }


    }

}

function Calcular() {
    var motor = getElementById("motor")
    var exterior = getElementById("exterior")
    var valorTotal;

    if (motor = 1 && exterior == 1) {

        valorTotal = "$13.000"
    }

    else if (motor = 1 && exterior == 0) {

        valorTotal = "$8.000"
    }

    else if (motor = 0 && exterior == 1) {

        valorTotal = "$5.000"

    }
}

function validarTodos() {
    var contador = 0;
    for (i = 0; i < 11; i++) {
        var valorArreglo = arregloUser[i];
        if (document.getElementById(valorArreglo).innerHTML == "Campo válido") {
            contador++;
        }
    }
    if (contador == 7) {
        document.getElementById("mensajefinal").innerHTML = "Formulario validado!";
    }
}