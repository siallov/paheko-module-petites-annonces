(() => {
	const apercu = document.querySelector('.annonce-photo-apercu');
	if (!apercu || typeof apercu.showModal !== 'function') return;
	const image = apercu.querySelector('img');
	const fermer = apercu.querySelector('.annonce-photo-fermer');

	document.addEventListener('click', event => {
		const bouton = event.target.closest('.annonce-photo-lien');
		if (!bouton) return;
		event.preventDefault();
		image.src = bouton.dataset.photo;
		image.alt = bouton.getAttribute('aria-label') || 'Photo de l’annonce';
		apercu.showModal();
	});

	fermer.addEventListener('click', () => apercu.close());
	apercu.addEventListener('click', event => {
		if (event.target === apercu) apercu.close();
	});
	apercu.addEventListener('close', () => image.removeAttribute('src'));
})();
