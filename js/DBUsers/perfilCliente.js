// Perfil Cliente
const perfilCliente = [
	{
		nombre: 'Lucio Rodriguez',
		// Consumos: 1,
	},
];

// FUNCION CREAR UN USUARIO Y GUARDARLO
export const crearCliente = () => {
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

			const usuario = { nombre: nombre, profesion: profesion };
			perfilCliente.push(usuario);
		} else {
			alert('Gracias, sus datos no serán almacenados');
		}
	}
};

// FUNCION PARA MOSTRAR LOS USUARIOS ALMACENADOS
export const mostrarCliente = () => {
	let usuariosInfo = 'Lista De Clientes:\n\n';
	perfilCliente.forEach((usuario, index) => {
		usuariosInfo += `${index + 1}. Nombre: ${usuario.nombre}, Profesión: ${
			usuario.profesion
		}\n\n`;
	});
	console.log(usuariosInfo);
};

//EXPORTACIONES
export { perfilCliente };
