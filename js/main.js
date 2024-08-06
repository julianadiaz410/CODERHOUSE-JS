// //IMPORTACIONES
import { login } from './login.js';
import { mostrarCliente } from './DBUsers/perfilCliente.js';
import { mostrarComerciante } from './DBUsers/perfilComerciante.js';
import { mostrarProfesional } from './DBUsers/perfilProfesional.js';

login();
mostrarCliente();
mostrarComerciante();
mostrarProfesional();

const frutas = [
	{
		nombre: 'naranja',
		tamaño: 'mediano',
	},
	{
		nombre: 'pera',
		tamaño: 'chico',
	},
];

// frutas.forEach((el, ))
