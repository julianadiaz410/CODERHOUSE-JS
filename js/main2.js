// ARRAY PARA ALMACENAR LOS USUARIOS
const bdUsuarios = [
	{
		nombre: 'Juliana Díaz',
		profesion: 'Ingeniera Industrial',
	},
];

// FUNCION CREAR UN USUARIO Y GUARDARLO
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

			const usuario = { nombre: nombre, profesion: profesion };
			bdUsuarios.push(usuario);
		} else {
			alert('Gracias, sus datos no serán almacenados');
		}
	}
};

// FUNCION PARA MOSTRAR LOS USUARIOS ALMACENADOS
const mostrarUsuarios = () => {
	let usuariosInfo = 'Usuarios Almacenados:\n';
	bdUsuarios.forEach((usuario, index) => {
		usuariosInfo += `${index + 1}. Nombre: ${usuario.nombre}, Profesión: ${
			usuario.profesion
		}\n`;
	});
	alert(usuariosInfo);
};

// FUNCION BUSCAR PROFESION
const buscarProfesion = () => {
	let ultimoUsuario = bdUsuarios[bdUsuarios.length - 1];
	let profesionBuscada = parseInt(
		prompt(
			`${ultimoUsuario.nombre}, escribe sólo el número de la profesión que busca:\n` +
				`1. Desarrollador De Software, Diseñador, Ciberseguridad\n` +
				`2. Electricista, Plomero, Civil\n` +
				`3. Maestro, Profesor\n` +
				`4. Contador, Adm. de Empresas\n` +
				`5. Medico Clinico, Enfermero, Aux. médico\n` +
				`6. Abogacía, Cs. Políticas, legales`
		)
	);

	switch (profesionBuscada) {
		case 1:
			alert('Diríjase a la sección de IT');
			break;
		case 2:
			alert('Diríjase a la sección de Construcción');
			break;
		case 3:
			alert('Diríjase a la sección de Educación');
			break;
		case 4:
			alert('Diríjase a la sección de Empresas');
			break;
		case 5:
			alert('Diríjase a la sección de Salud');
			break;
		case 6:
			alert('Diríjase a la sección de Derecho');
			break;
		default:
			alert('Escribiste una opción no válida');
			break;
	}
};

// Crear usuarios y mostrar usuarios almacenados
crearUsuarios();
mostrarUsuarios();
buscarProfesion();
