document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('formCliente');
	const cuerpoTabla = document.getElementById('cuerpoTabla');

	// Cargar clientes almacenados al cargar la página
	cargarClientes();

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		crearCliente();
	});

	// Función para crear un cliente y almacenarlo en localStorage
	function crearCliente() {
		const nombreInput = document.getElementById('nombre');
		const nombre = nombreInput.value.trim();

		if (nombre === '') {
			return; // No hacer nada si el nombre está vacío
		}

		let clientes = JSON.parse(localStorage.getItem('perfilCliente')) || [];
		clientes.push({ nombre });
		localStorage.setItem('perfilCliente', JSON.stringify(clientes));

		nombreInput.value = ''; // Limpiar el campo de entrada

		cargarClientes(); // Actualizar la lista de clientes
	}

	// Función para cargar y mostrar los clientes almacenados en la tabla
	function cargarClientes() {
		let clientes = JSON.parse(localStorage.getItem('perfilCliente')) || [];
		cuerpoTabla.innerHTML = ''; // Limpiar la tabla antes de llenarla
		clientes.forEach((cliente, index) => {
			const row = document.createElement('tr');
			row.innerHTML = `<td>${index + 1}</td><td>${cliente.nombre}</td>`;
			cuerpoTabla.appendChild(row);
		});
	}
});
