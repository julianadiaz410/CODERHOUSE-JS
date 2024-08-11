//Perfil proveedor Comerciante
const perfilComerciante = [
	{
		nombreProveedor: 'Agustín Aracena',
		nombreComercio: 'Di Roma',
		disponibilidad: false,
		// TipoComercio: 'Heladería',
		CUIT: '12-123123123-2',
	},
];

// FUNCION CREAR UN USUARIO Y GUARDARLO
export const crearComerciante = () => {
	let nombreProveedor = prompt('Por favor ingrese su nombre completo');

	let nombreComercio = prompt(
		'Hola ' + nombreProveedor + '. Por favor ingrese el nombre del comercio'
	);
	let disponibilidad = confirm(
		'Ingrese su disponibilidad: \n1. Aceptar: DISPONIBLE \n2. Cancelar: OCUPADO'
	);

	let CUIT = parseInt(prompt('Por favor ingrese su CUIT'));
	if (
		nombreProveedor == '' ||
		nombreProveedor == undefined ||
		nombreComercio == '' ||
		nombreComercio == undefined ||
		CUIT < 0 ||
		CUIT == undefined
	) {
		alert('Por favor, vuelva a crear los datos. Algo salió mal');
	} else {
		const usuario = {
			nombreProveedor: nombreProveedor,
			nombreComercio: nombreComercio,
			disponibilidad: disponibilidad,
			CUIT: CUIT,
		};
		perfilComerciante.push(usuario);
	}
};

// FUNCION PARA MOSTRAR LOS USUARIOS ALMACENADOS
export const mostrarComerciante = () => {
	let usuariosInfo = 'Lista De Comerciantes:\n\n';
	perfilComerciante.forEach((usuario, index) => {
		usuariosInfo += `${index + 1}. Nombre Comerciante: ${
			usuario.nombreProveedor
		}, Nombre del Comercio: ${usuario.nombreComercio}, Disponibilidad: ${
			usuario.disponibilidad == true ? 'Disponible' : 'Ocupado'
		}, CUIT: ${usuario.CUIT}\n\n`;
	});

	for (const perfilComercio of perfilComerciante) {
		let usuario = document.querySelector('.listaComerciante');
		let disponibilidadClass = perfilComercio.disponibilidad
			? 'disponible'
			: 'ocupado';

		usuario.innerHTML += `<div class="perfilComercio ${disponibilidadClass}">
			<p>Nombre del Comerciante: ${perfilComercio.nombreProveedor}</p>
			<p>Nombre del Comercio: ${perfilComercio.nombreComercio}</p>
			<p>Disponibilidad: ${
				perfilComercio.disponibilidad == true ? 'Disponible' : 'Ocupado'
			}</p>
			<p>CUIT: ${perfilComercio.CUIT}</p>
		</div>`;
	}
};

//EXPORTACIONES
export { perfilComerciante };
