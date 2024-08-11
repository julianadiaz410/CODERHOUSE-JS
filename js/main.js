// //IMPORTACIONES
import { login } from './login.js';
import { mostrarCliente, perfilCliente } from './DBUsers/perfilCliente.js';
import {
	mostrarComerciante,
	perfilComerciante,
} from './DBUsers/perfilComerciante.js';
import {
	mostrarProfesional,
	perfilProfesional,
} from './DBUsers/perfilProfesional.js';

const boton = document.getElementById('entrar');
boton.addEventListener('click', () => {
	login();
	mostrarCliente();
	mostrarComerciante();
	mostrarProfesional();
});

localStorage.setItem('Cliente', JSON.stringify(perfilCliente));
localStorage.setItem('Comerciante', JSON.stringify(perfilComerciante));
localStorage.setItem('Profesional', JSON.stringify(perfilProfesional));
