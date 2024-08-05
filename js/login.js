import { crearCliente } from './DBUsers/perfilCliente.js';
import { crearComerciante } from './DBUsers/perfilComerciante.js';
import { crearProfesional } from './DBUsers/perfilProfesional.js';

//FUNCION PRINCIPAL PARA LOGUEARSE
export const login = () => {
	let user = parseInt(
		prompt(
			'Pon el número del perfil al que quieres ingresar: \n1. Proveedor / Servicio \n2. Cliente / Consumidor'
		)
	);
	if (user == 1) {
		proveedor();
	} else if (user == 2) {
		crearCliente();
	} else {
		alert('No ingresante un dato válido, que tengas buen día!');
		let boton = document.querySelector('.boton');
		// boton.click = () => {
		// 	if (user == 1 || user == 2) {
		// 		alert('Todo ok');
		// 	} else {
		// 		// let info = document.querySelector('.informacion');
		// 		// info.innerHTML = `<h3>o se puede mostrar nada</h3>N`;
		// 		alert('No podés ver la información, porque debés loguearte');
		// 	}
		// };
		boton.onkeyup = () => {
			console.log('keyup');
		};
	}
};

//FUNCION SECUNDARIA PARA LOGUEARSE COMO PROVEEDOR
export const proveedor = () => {
	let tipoProveedor = parseInt(
		prompt(
			'Pon el número del perfil al que quieres ingresar: \n1. Comercio \n2. Servicio Profesional'
		)
	);
	if (tipoProveedor == 1) {
		crearComerciante();
	} else if (tipoProveedor == 2) {
		crearProfesional();
	} else {
	}
};
