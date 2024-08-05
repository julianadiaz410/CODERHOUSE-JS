//IMPORTACIONES
import { bdUsuarios } from './usuarios.js';

// FUNCION BUSCAR PROFESION
export const buscarProfesion = () => {
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
