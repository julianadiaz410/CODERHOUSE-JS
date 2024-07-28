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
		// alert('Bienvenido! \nIngresa tu datos del negocio por favor');
	} else if (tipoProveedor == 2) {
		crearProfesional();
		// alert('Bienvenido! \nIngresa tu datos profesionales por favor');
	} else {
		// alert('No ingresante un dato válido, intentalo nuevamente.');
	}
};
