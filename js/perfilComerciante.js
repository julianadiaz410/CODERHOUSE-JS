document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('formComerciante');
	const cuerpoTabla = document.getElementById('cuerpoTabla');

	// Cargar comerciantes almacenados al cargar la página
	cargarComerciantes();

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		crearComerciante();
	});

	// Función para crear un comerciante y almacenarlo en localStorage
	function crearComerciante() {
		const nombreProveedor = document
			.getElementById('nombreProveedor')
			.value.trim();
		const nombreComercio = document
			.getElementById('nombreComercio')
			.value.trim();
		const disponibilidad =
			document.getElementById('disponibilidad').value === 'true';
		const cuit = document.getElementById('cuit').value.trim();

		if (nombreProveedor === '' || nombreComercio === '' || cuit === '') {
			return; // No hacer nada si algún campo está vacío
		}

		let comerciantes =
			JSON.parse(localStorage.getItem('perfilComerciante')) || [];
		comerciantes.push({
			nombreProveedor,
			nombreComercio,
			disponibilidad,
			CUIT: cuit,
		});
		localStorage.setItem('perfilComerciante', JSON.stringify(comerciantes));

		form.reset(); // Limpiar el formulario
		cargarComerciantes(); // Actualizar la lista de comerciantes
	}

	// Función para cargar y mostrar los comerciantes almacenados en la tabla
	function cargarComerciantes() {
		let comerciantes =
			JSON.parse(localStorage.getItem('perfilComerciante')) || [];
		cuerpoTabla.innerHTML = ''; // Limpiar la tabla antes de llenarla
		comerciantes.forEach((comerciante, index) => {
			const row = document.createElement('tr');
			row.innerHTML = `
                <td>${index + 1}</td>
                <td>${comerciante.nombreProveedor}</td>
                <td>${comerciante.nombreComercio}</td>
                <td>${
									comerciante.disponibilidad ? 'Disponible' : 'Ocupado'
								}</td>
                <td>${comerciante.CUIT}</td>
            `;
			cuerpoTabla.appendChild(row);
		});
	}
});
