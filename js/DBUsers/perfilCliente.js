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
		let bienvenida = confirm(
			'Te gustaría que almacenemos tus datos en nuestro sitio?'
		);

		if (bienvenida == true) {
			alert('Almacenamos tus datos correctamente');

			const usuario = { nombre: nombre };
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
		usuariosInfo += `${index + 1}. Nombre: ${usuario.nombre}\n`;
	});
	let usuario = document.getElementsByClassName('listaClientes');
	usuario[0].innerHTML = JSON.stringify(perfilCliente)
		.replace(/[\[\]{""}]/g, ' ')
		.replace(/,/g, '<br>');
};

//EXPORTACIONES
export { perfilCliente };
