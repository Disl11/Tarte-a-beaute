import { getProduct } from "../shared/api.js"; // Pour récupérer un produit depuis l’API
import { getIdFromUrl, refreshCartTooltip } from "../shared/utils.js"; // Utilitaires : récupérer l'ID dans l'URL et rafraîchir l'affichage du panier
import { isProductInCart, addProductToCart } from "../shared/domain.js"; // Fonctions liées au panier

// Quand la page est prête (HTML chargé)
// alors on démarre le code JS
document.addEventListener("DOMContentLoaded", async function () {
	// Rafraîchit l'affichage du panier (ex: le nombre d'articles dans une icône)
	refreshCartTooltip();

	// Récupère l’ID du produit depuis l’URL de la page
	const productId = getIdFromUrl();
	// Appelle l’API pour récupérer les informations du produit à partir de son ID (converti en nombre)
	const product = await getProduct(parseInt(productId, 10));

	const app = document.getElementById("app");

	const main = document.createElement("main");

	const container = document.createElement("div");
	container.className = "container";

	main.appendChild(container);

	app.appendChild(main);

	//image

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
	productImg.alt = "img";
	productImg.className = "product-img";

	productImageDiv.appendChild(productImg);

	container.appendChild(productImageDiv);

	//desciption product

	const section = document.createElement("div");
	section.className = "section";

	const productInfo = document.createElement("div");
	productInfo.className = "Produit-info";

	const nomPrix = document.createElement("div");
	nomPrix.className = "nom-prix";

	const nom = document.createElement("p");
	nom.className = "p-nom";
	nom.textContent = product.name;

	const prix = document.createElement("p");
	prix.className = "p-prix";
	prix.textContent = product.price + "€";

	const avis = document.createElement("p");
	avis.className = "Avis client";
	// Si une note existe, on l’affiche. Sinon, sa affiche aucune note.
	avis.textContent = product.note ? "Note:" + product.rating : "Aucune note";

	nomPrix.append(nom, prix, avis);

	productInfo.appendChild(nomPrix);

	const stock = document.createElement("p");
	stock.className = "p-stock";
	stock.textContent = "En stock:" + product.stock;

	productInfo.appendChild(stock);

	section.appendChild(productInfo);

	//button

	const btnDiv = document.createElement("div");
	btnDiv.className = "btn";

	const btn1 = document.createElement("button");
	btn1.className = "btn1";
	btn1.textContent = "ajouter";

	const btn2 = document.createElement("button");
	btn2.className = "btn2";
	btn2.textContent = "continuez vos achats";

	// Quand on clique sur ce bouton, on redirige vers index.html
	btn2.addEventListener("click", () => (window.location.href = "./index.html"));

	btnDiv.append(btn1, btn2);

	section.appendChild(btnDiv);

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
		// Affiche une alerte.
		alert("Retour a la page d'acceuil");
	});
});
