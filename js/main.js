//BASE DE DATOS AREAS DE TRABAJO

const bdAreas = ['Plomero', 'Electricista', 'Ingeniero'];

//FUNCION PARA QUE EL USUARIO INGRESE SUS DATOS

const usuarios = () => {
	let nombre = prompt('Por favor ingrese su nombre completo');

	if (nombre == '' || nombre == undefined) {
		alert('No ingresó su nombre');
	} else {
		let profesion = prompt(
			'Hola ' + nombre + '. Por favor ingrese su profesion'
		);
		let bienvenida = confirm(
			'Nos alegra que tu profesión sea ' +
				profesion +
				'. Te gustaría que almacenemos tus datos en nuestro sitio?'
		);

		if (bienvenida == true) {
			alert('Almacenamos tus datos correctamente');
		} else {
			alert('No podemos almacenar tus datos');
		}
	}
};

usuarios();

// FUNCION BUSCAR PROFESION

const buscarProfesion = () => {
	for (let index = 0; index < areas.length; index++) {
		let element = array[index];
	}
};

//USO DE CONDICIONAL SWITCH

let buscandoTrabajo = prompt('Busca trabajo o ofrece trabajo?');

switch (buscandoTrabajo) {
	case 'busco trabajo':
		alert('Dirijase al sitio de busqueda');
		break;
	case 'ofrezco trabajo':
		alert('Dirijase al sitio de ofertas');
		break;
	default:
		alert('Escribiste una opcion no valda');
		break;
}

//FUNCION PARA MOSTRAR LA CANTIDAD DE INGENIEROS

function 
