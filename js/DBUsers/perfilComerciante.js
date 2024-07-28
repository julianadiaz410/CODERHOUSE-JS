//Perfil proveedor Comerciante
const perfilComerciante = [
	{
		nombreProveedor: 'Agustín Aracena',
		nombreComercio: 'Di Roma',
		TipoComercio: 'Heladería',
		CUIT: '12-123123123-2',
	},
];

// FUNCION CREAR UN USUARIO Y GUARDARLO
export const crearComerciante = () => {
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
			perfilComerciante.push(usuario);
		} else {
			alert('Gracias, sus datos no serán almacenados');
		}
	}
};

// FUNCION PARA MOSTRAR LOS USUARIOS ALMACENADOS
export const mostrarComerciante = () => {
	let usuariosInfo = 'Lista De Comerciantes:\n\n';
	perfilComerciante.forEach((usuario, index) => {
		usuariosInfo += `${index + 1}. Nombre: ${usuario.nombre}, Profesión: ${
			usuario.profesion
		}\n\n`;
	});
	console.log(usuariosInfo);
};

//EXPORTACIONES
export { perfilComerciante };
