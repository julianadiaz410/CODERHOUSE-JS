document.addEventListener('DOMContentLoaded', () => {
	const accessBtn = document.getElementById('accessBtn');
	const profilePopup = document.getElementById('profilePopup');
	const providerPopup = document.getElementById('providerPopup');
	const closeProfilePopup = document.getElementById('closeProfilePopup');
	const closeProviderPopup = document.getElementById('closeProviderPopup');
	const submitProfile = document.getElementById('submitProfile');
	const submitProvider = document.getElementById('submitProvider');

	// Abre el popup de perfil cuando se hace clic en el botón de acceso
	accessBtn.addEventListener('click', (e) => {
		e.preventDefault();
		profilePopup.style.display = 'block';
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
	submitProfile.addEventListener('click', () => {
		const selectedProfile = document.querySelector(
			'input[name="profile"]:checked'
		);
		if (selectedProfile) {
			profilePopup.style.display = 'none';
			if (selectedProfile.value === '1') {
				providerPopup.style.display = 'block';
			} else if (selectedProfile.value === '2') {
				window.location.href = 'cliente.html'; // Página para cliente
			}
		} else {
			alert('Por favor selecciona una opción.');
		}
	});

	// Maneja la selección en el popup de proveedor
	submitProvider.addEventListener('click', () => {
		const selectedProvider = document.querySelector(
			'input[name="provider"]:checked'
		);
		if (selectedProvider) {
			providerPopup.style.display = 'none';
			if (selectedProvider.value === '1') {
				window.location.href = 'comercio.html'; // Página para comercio
			} else if (selectedProvider.value === '2') {
				window.location.href = 'servicio-profesional.html'; // Página para servicio profesional
			}
		} else {
			alert('Por favor selecciona una opción.');
		}
	});
});
