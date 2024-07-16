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
	{
		id: 1,
		profesion: 'Desarrollador De Software, Diseñador, Ciberseguridad',
		area: 'IT',
	},
	{ id: 2, profesion: 'Electricista, Plomero, Civil', area: 'Construcción' },
	{ id: 3, profesion: 'Maestro, Profesor', area: 'Educación' },
	{ id: 4, profesion: 'Contador, Adm. de Empresas', area: 'Empresas' },
	{ id: 5, profesion: 'Medico Clinico, Enfermero, Aux. médico', area: 'Salud' },
	{ id: 6, profesion: 'Abogacía, Cs. Políticas, legales', area: 'Derecho' },
];

// FUNCION BUSCAR PROFESION

const buscarProfesion = () => {
	let profesionBuscada = parseInt(
		prompt(
			JSON.bdUsuarios +
				'Escriba el número de la profesión que busca \n 1. Desarrollador De Software, Diseñador, Ciberseguridad \n 2. Electricista, Plomero, Civil \n 3. Maestro, Profesor \n 4. Contador, Adm. de Empresas \n 5. Medico Clinico, Enfermero, Aux. médico \n 6. Abogacía, Cs. Políticas, legales'
		)
	);

	switch (profesionBuscada) {
		case 1:
			alert('Dirijase a la sección de' + bdUsuarios.area);
			break;
		case 2:
			alert('Dirijase a la sección de' + bdUsuarios.area);
			break;
		case 3:
			alert('Dirijase a la sección de' + bdUsuarios.area);
			break;
		case 4:
			alert('Dirijase a la sección de' + bdUsuarios.area);
			break;
		case 5:
			alert('Dirijase a la sección de' + bdUsuarios.area);
			break;
		case 6:
			alert('Dirijase a la sección de' + bdUsuarios.area);
			break;
		default:
			alert('Escribiste una opcion no valda');
			break;
	}
};
buscarProfesion();

//USO DE CONDICIONAL SWITCH

// let buscandoTrabajo = prompt('Busca trabajo o ofrece trabajo?');

// switch (buscandoTrabajo) {
// 	case 'busco trabajo':
// 		alert('Dirijase al sitio de busqueda');
// 		break;
// 	case 'ofrezco trabajo':
// 		alert('Dirijase al sitio de ofertas');
// 		break;
// 	default:
// 		alert('Escribiste una opcion no valda');
// 		break;
// }
