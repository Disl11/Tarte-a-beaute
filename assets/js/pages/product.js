// Importation des fonctions utiles depuis d'autres fichiers
import { getProduct } from "../shared/api.js"; // Pour récupérer un produit depuis l’API
import { getIdFromUrl, refreshCartTooltip } from "../shared/utils.js"; // Utilitaires : récupérer l'ID dans l'URL et rafraîchir l'affichage du panier
import { isProductInCart, addProductToCart } from "../shared/domain.js"; // Fonctions liées au panier

// Écouteur d’événement : on attend que toute la page soit chargée
document.addEventListener("DOMContentLoaded", async function () {
	// Rafraîchit l'affichage du panier (ex: le nombre d'articles dans une icône)
	refreshCartTooltip();

	// Récupère l’ID du produit depuis l’URL de la page
	const productId = getIdFromUrl();
	// Appelle l’API pour récupérer les informations du produit à partir de son ID (converti en nombre)
	const product = await getProduct(parseInt(productId, 10));

	// Récupère le conteneur principal de l'application dans le HTML
	const app = document.getElementById("app");

	// Crée la balise <main> pour structurer le contenu principal
	const main = document.createElement("main");

	// Crée une div avec la classe CSS "container"
	const container = document.createElement("div");
	container.className = "container";

	// Ajoute la div container à l'intérieur de <main>
	main.appendChild(container);

	// Ajoute l’élément <main> dans le DOM, dans l’élément #app
	app.appendChild(main);

	// ----------------------------
	// Création de la partie image
	// ----------------------------

	// Crée une div pour afficher l'image du produit
	const productImageDiv = document.createElement("div");
	productImageDiv.className = "Produit-image";

	// Crée la balise <img> pour l’image
	const productImg = document.createElement("img");
	productImg.src = product.image_link; // Met l’URL de l’image reçue depuis l’API
	productImg.onerror = function () {
		// Si l’image ne se charge pas, affiche une image par défaut
		this.onerror = null;
		this.src = "./assets/images/noproductpic.png";
	};
	productImg.alt = "img"; // Texte alternatif (utile pour l’accessibilité)
	productImg.className = "product-img"; // Classe CSS

	// Ajoute l’image dans sa div
	productImageDiv.appendChild(productImg);

	// Ajoute la div image dans le container principal
	container.appendChild(productImageDiv);

	// -----------------------------
	// Création de la section infos
	// -----------------------------

	const section = document.createElement("div");
	section.className = "section";

	// Contient les infos du produit : nom, prix, stock
	const productInfo = document.createElement("div");
	productInfo.className = "Produit-info";

	// Div pour regrouper nom + prix + avis
	const nomPrix = document.createElement("div");
	nomPrix.className = "nom-prix";

	// Nom du produit
	const nom = document.createElement("p");
	nom.className = "p-nom";
	nom.textContent = product.name;

	// Prix du produit
	const prix = document.createElement("p");
	prix.className = "p-prix";
	prix.textContent = product.price + "€";

	// Note / Avis client
	const avis = document.createElement("p");
	avis.className = "Avis client";
	// Si une note existe, on l’affiche. Sinon, on dit qu’il n’y a pas de note.
	avis.textContent = product.note ? "Note:" + product.rating : "Aucune note";

	// Ajoute les 3 éléments dans la div nomPrix
	nomPrix.append(nom, prix, avis);

	// Ajoute nomPrix dans productInfo
	productInfo.appendChild(nomPrix);

	// Stock disponible
	const stock = document.createElement("p");
	stock.className = "p-stock";
	stock.textContent = "En stock:" + product.stock;

	// Ajoute le stock dans la div infos
	productInfo.appendChild(stock);

	// Ajoute toutes les infos dans la section principale
	section.appendChild(productInfo);

	// ----------------------------
	// Création des boutons
	// ----------------------------

	const btnDiv = document.createElement("div");
	btnDiv.className = "btn";

	// Bouton pour ajouter au panier
	const btn1 = document.createElement("button");
	btn1.className = "btn1";
	btn1.textContent = "ajouter";

	// Bouton pour continuer les achats (retour à la page d’accueil)
	const btn2 = document.createElement("button");
	btn2.className = "btn2";
	btn2.textContent = "continuez vos achats";

	// Quand on clique sur ce bouton, on redirige vers index.html
	btn2.addEventListener("click", () => (window.location.href = "./index.html"));

	// Ajoute les boutons dans leur div
	btnDiv.append(btn1, btn2);

	// Ajoute la div des boutons dans la section
	section.appendChild(btnDiv);

	// Ajoute toute la section dans le container
	container.appendChild(section);

	// ----------------------------
	// Gestion des états des boutons
	// ----------------------------

	// Si le produit est en rupture de stock
	if (product.stock === 0) {
		btn1.disabled = true; // désactive le bouton
		btn1.textContent = "Rupture"; // change le texte
	}
	// Si le produit est déjà dans le panier
	else if (isProductInCart(product.id)) {
		btn1.disabled = true;
		btn1.textContent = "Déjà dans le panier";
	}

	// ----------------------------
	// Événement : ajout au panier
	// ----------------------------

	btn1.addEventListener("click", function () {
		addProductToCart(product.id, true, true); // ajoute le produit
		btn1.disabled = true; // désactive le bouton pour éviter les doublons
		btn1.textContent = "Ajouté"; // indique que le produit a été ajouté
	});

	// ----------------------------
	// Événement : continuer les achats
	// ----------------------------

	btn2.addEventListener("click", function () {
		// Affiche une alerte (optionnel)
		alert("Vous allez continuer vers l'achat !");
	});
});
