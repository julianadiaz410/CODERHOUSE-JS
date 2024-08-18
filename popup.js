document.addEventListener('DOMContentLoaded', () => {
	const accessBtn = document.getElementById('accessBtn');
	const profilePopup = document.getElementById('profilePopup');
	const providerPopup = document.getElementById('providerPopup');
	const closeProfilePopup = document.getElementById('closeProfilePopup');
	const closeProviderPopup = document.getElementById('closeProviderPopup');
	const providerBtn = document.getElementById('providerBtn');
	const clientBtn = document.getElementById('clientBtn');
	const commerceBtn = document.getElementById('commerceBtn');
	const professionalServiceBtn = document.getElementById(
		'professionalServiceBtn'
	);

	// Abre el popup de perfil cuando se hace clic en el botón de acceso
	accessBtn.addEventListener('click', (e) => {
		e.preventDefault();
		profilePopup.style.display = 'flex';
	});

	// Cierra el popup de perfil
	closeProfilePopup.addEventListener('click', () => {
		profilePopup.style.display = 'none';
	});

	// Cierra el popup de proveedor
	closeProviderPopup.addEventListener('click', () => {
		providerPopup.style.display = 'none';
	});

	// Maneja la selección en el popup de perfil
	providerBtn.addEventListener('click', () => {
		profilePopup.style.display = 'none';
		providerPopup.style.display = 'flex';
	});

	clientBtn.addEventListener('click', () => {
		window.location.href = 'cliente.html'; // Página para cliente
	});

	// Maneja la selección en el popup de proveedor
	commerceBtn.addEventListener('click', () => {
		window.location.href = 'comercio.html'; // Página para comercio
	});

	professionalServiceBtn.addEventListener('click', () => {
		window.location.href = 'servicio-profesional.html'; // Página para servicio profesional
	});
});
