document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('formProfesional');
	const cuerpoTabla = document.getElementById('cuerpoTabla');

	// Cargar los profesionales almacenados al cargar la página
	cargarProfesionales();

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		crearProfesional();
	});

	// Función para crear un profesional y almacenarlo en localStorage
	function crearProfesional() {
		const nombre = document.getElementById('nombre').value.trim();
		const profesion = document.getElementById('profesion').value.trim();
		const disponibilidad =
			document.getElementById('disponibilidad').value === 'true';
		const experiencia = parseInt(
			document.getElementById('experiencia').value.trim()
		);

		if (nombre === '' || profesion === '' || isNaN(experiencia)) {
			return; // No hacer nada si algún campo está vacío o inválido
		}

		let profesionales =
			JSON.parse(localStorage.getItem('perfilProfesional')) || [];
		profesionales.push({ nombre, profesion, disponibilidad, experiencia });
		localStorage.setItem('perfilProfesional', JSON.stringify(profesionales));

		form.reset(); // Limpiar el formulario
		cargarProfesionales(); // Actualizar la lista de profesionales
	}

	// Función para cargar y mostrar los profesionales almacenados en la tabla
	function cargarProfesionales() {
		let profesionales =
			JSON.parse(localStorage.getItem('perfilProfesional')) || [];
		cuerpoTabla.innerHTML = ''; // Limpiar la tabla antes de llenarla
		profesionales.forEach((profesional, index) => {
			const row = document.createElement('tr');
			row.innerHTML = `
                <td>${index + 1}</td>
                <td>${profesional.nombre}</td>
                <td>${profesional.profesion}</td>
                <td>${
									profesional.disponibilidad ? 'Disponible' : 'Ocupado'
								}</td>
                <td>${profesional.experiencia}</td>
            `;
			cuerpoTabla.appendChild(row);
		});
	}
});
