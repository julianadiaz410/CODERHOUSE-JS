//ARRAY PARA ALMACENAR LOS USUARIOS
const bdUsuarios = [
	{
		nombre: 'Juliana',
		profesion: 'Ingeniera',
	},
];

//FUNCION CREAR UN USUARIO Y GUARDARLO
const crearUsuarios = () => {
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

			const usuarios = { nombre: nombre, profesion: profesion };
			bdUsuarios.push(usuarios);
		} else {
			alert('Gracias, sus datos no serán almacenados');
		}
	}
};

crearUsuarios();

console.log(bdUsuarios);

//ARRAY PARA ALMACENAR POFESIONES

const bdProfesiones = [
	{ profesion: 'Plomero', area: 'Construccion' },
	{ profesion: 'Electricista', area: 'Construccion' },
	{ profesion: 'Ingeniero Civil', area: 'Construcción' },
	{ profesion: 'Ingeniero Mecanico', area: 'Mecanica' },
	{ profesion: 'Medico Clinico', area: 'Salud' },
];

// FUNCION BUSCAR PROFESION

const buscarProfesion = () => {
	let profesionBuscada = parseInt (prompt(
		'Escriba la numero de la profesión que busca \n 1. Plomero \n 2. Electricista \n 3 Ingeniero Civil \n 4 Ingeniero Mecanico \n 5 Medico Clinico'
	));

	switch (profesionBuscada) {
		case 1:
			alert("Dirijase a la sección de Construcción");
			break;
			case 2:
				alert("Dirijase a la sección de Construcción");
				break;
			case 3:
				alert("Dirijase a la sección de Construcción");
				break;
			case 4:
				alert("Dirijase a la sección de Mecánica");
				break;
			case 4:
				alert("Dirijase a la sección de Salud");
				break;
			default:
			alert('Escribiste una opcion no valda');
			break;
}

buscarProfesion();


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

//FUNCION PARA MOSTRAR LA CANTIDAD DE USUARIOS
// const mostrarUsuarios = () => {
// 	console.log(bdUsuarios);
// };
// mostrarUsuarios();

// //BASE DE DATOS AREAS DE TRABAJO

// const bdAreas = ['Plomero', 'Electricista', 'Ingeniero'];
