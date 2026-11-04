document.addEventListener('DOMContentLoaded', function () {
	const don = document.querySelector('input[name="don"]');
	const lignePrix = document.getElementById('ligne-prix');
	const prix = document.getElementById('f_prix');
	const texteDon = document.getElementById('texte-option-don');

	if (!don || !lignePrix || !prix || !texteDon) return;

	function mettreAJourOptionDon() {
		lignePrix.hidden = don.checked;
		texteDon.textContent = don.checked
			? "Vous pouvez mettre un montant de vente si vous changez d'avis"
			: "Cliquer ici pour proposer votre annonce sans paiement";
		if (don.checked) prix.value = '';
	}

	don.addEventListener('change', mettreAJourOptionDon);
	mettreAJourOptionDon();
});
