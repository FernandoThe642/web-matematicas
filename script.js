 //Operaciones Básicas 
 function toggleSections(i) {
    var sections = document.querySelectorAll('.ejemplo'+i);
    sections.forEach(function(section) {
        if (section.style.display === 'block') {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
}

//Calculadora
 
 let display = document.getElementById('pantalla');

    function agregar(valor) {
        pantalla.value += valor;
    }

    function limpiarPantalla() {
        pantalla.value = '';
    }

    function calcular() {
        try {
            pantalla.value= eval(pantalla.value);
        } catch (error) {
            pantalla.value = 'Error';
        }
    }

 
    