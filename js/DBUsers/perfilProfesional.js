//Perfil proveedor Profesional
const perfilProfesional = [
	{
		nombre: 'Juliana Díaz',
		profesion: 'Ingeniera Industrial',
		disponibilidad: false,
		// reputacion: 8,
		// consumos: 1,
		experiencia: 3,
		// carteraClientes: 1,
		// habilidades: 'Bilingüe',
		// integraciones: 'LinkedIn',
	},
];

// FUNCION CREAR UN USUARIO Y GUARDARLO
export const crearProfesional = () => {
	let nombre = prompt('Por favor ingrese su nombre completo');

	let profesion = prompt('Hola ' + nombre + '. Por favor ingrese su profesion');
	let disponibilidad = confirm(
		'Ingrese su disponibilidad: \n1. Aceptar: DISPONIBLE \n2. Cancelar: OCUPADO'
	);

	let experiencia = parseInt(
		prompt('Ingrese la cantidad de años en experiencia \nEj: 1, 2, 3... n.')
	);
	if (
		nombre == '' ||
		nombre == undefined ||
		nombre === 0 ||
		profesion == '' ||
		profesion == undefined ||
		disponibilidad == '' ||
		disponibilidad == undefined ||
		experiencia < 0 ||
		experiencia == undefined
	) {
		alert('Por favor, vuelva a crear los datos. Algo salió mal');
	} else {
		const usuario = {
			nombre: nombre,
			profesion: profesion,
			disponibilidad: disponibilidad,
			experiencia: experiencia,
		};
		perfilProfesional.push(usuario);
	}
};

// FUNCION PARA MOSTRAR LOS USUARIOS ALMACENADOS
export const mostrarProfesional = () => {
	let usuariosInfo = 'Lista De Profesionales:\n\n';
	perfilProfesional.forEach((usuario, index) => {
		usuariosInfo += `${index + 1}. Nombre: ${usuario.nombre}, Profesión: ${
			usuario.profesion
		}, Disponibilidad: ${
			usuario.disponibilidad == true ? 'Disponible' : 'Ocupado'
		}, Experiencia: ${usuario.experiencia}\n\n`;
	});
	//Podría haber utilizado el innerHTML=+
	for (const perfilProfesion of perfilProfesional) {
		let usuario = document.querySelector('.listaProfesional');
		let disponibilidadClass = perfilProfesion.disponibilidad
			? 'disponible'
			: 'ocupado';
		usuario.innerHTML = `<div class="perfilProfesion ${disponibilidadClass}">
		<p>Nombre del Profesional: ${perfilProfesion.nombre}</p><p>Profesión: ${
			perfilProfesion.profesion
		}</p><p>Disponiblidad: ${
			perfilProfesion.disponibilidad == true ? 'Disponible' : 'Ocupado'
		}</p><p>Experiencia: ${perfilProfesion.experiencia}</p>`;
	}
};

//EXPORTACIONES
export { perfilProfesional };
