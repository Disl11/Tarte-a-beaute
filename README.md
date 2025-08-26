# DOC - Ecommerce Tarte à Beauté

## Tarte à Beauté — Mini E-Commerce Shop

Front
-end web development project for a mini cosmetics shop, using HTML, CSS, and Vanilla JavaScript.

---

## Project Name
**TARTE À BEAUTÉ**

---

## Visual Identity

- **Color palette:**
  - `#fdecda` (light background)
  - `#c879ff`
  - `#FFFFFF` (white)

- **Font:**
  - *Amita* for headings
  - *Arial* for body text

---

## Data — Cart Structure

json
[
  {
    "product": {},
    "numberInCart": 2
  }
]

## The key to store or retrieve from localStorage: "cart"

*Script to enter in the console to add fake products for testing*
https://pastebin.com/z1yEA0PU


## *Description*

This project involves creating a mini online shop with a cart and ordering system, following best practices in **accessibility**, **eco-design**, and **responsive design** (mobile-first).

---

Main Features

- Home page listing products from a JSON file

- Search and filtering by name and category

- Add to cart from the product page

- Interactive cart with quantity management, removal, and dynamic total

- 3-step checkout: contact details, delivery, simulated payment

- Data persistence via localStorage

- Responsive & accessible design (keyboard navigation, ARIA, contrast…)

---

## Technologies Used

- HTML5 — Semantic structure

- CSS3 — Responsive, mobile-first

- Vanilla JavaScript — Cart logic, localStorage

- JSON — Mock API for product data

-----

 # Project Structure

------

/
├── assets/
│   ├── css/
│   │   └── style.css           
│   │
│   ├── js/
│   │   ├── shared/
│   │   │   ├── api.js           
│   │   │   ├── state.js         
│   │   │   ├── domain.js
│   │   │   └── utils.js         
│   │   │
│   │   └── pages/
│   │       ├── index.js         
│   │       ├── product.js       
│   │       ├── cart.js          
│   │       └── checkout.js      
│   │
│   ├── images/                  
│   └── fonts/
│
├── data/
│   └── products.json            
│
├── docs/                        
│
├── cart.html                    
├── checkout.html                
├── index.html                  
├── product.html                
└── README.md                    

------

## Methodology

Work done locally

Task management using Trello (Backlog → To Do → In Progress → Done)

Git workflow: main branch, dev branch, and one branch per featurefeature


# *Chargement du produit*

L'identifiant du produit est récupéré depuis l'URL.
Les données du produit (nom, prix, stock, image, note…) sont chargées via une fonction externe.
Ces données sont ensuite utilisées pour construire l'affichage.

# *Création de la structure HTML*

Tous les éléments (image, nom, prix, stock, note, boutons) sont générés en JavaScript.
Une structure en <main> et <div class="container"> est créée dynamiquement.

# *Affichage des informations*

Le nom, le prix, le stock disponible, et la note du produit sont affichés clairement.
Une image par défaut s'affiche si le lien de l'image est cassé.

# *Gestion des boutons*

Deux boutons sont affichés :

Ajouter au panier : désactivé si le produit est en rupture ou déjà ajouté.
Continuer vos achats : redirige vers la page d’accueil.
Un clic sur "Ajouter" enregistre le produit dans le panier et désactive le bouton.

# *Accessibilité et retours utilisateur*

Texte alternatif sur les images (alt)
Message d’alerte lors de la redirection
Mise à jour de l’icône panier après ajout

# *Utilisation de modules partagés*

Le script utilise d'autres fichiers pour :

Charger les produits (api.js)
Gérer l'état du panier (domain.js, state.js)
Obtenir l’ID depuis l’URL (utils.js)

---

## *Homepage Preview*

![ Homepage ](assets/images/landing_page.PNG)
![Homepage mobile-first](assets/images/landing_page_mobile.PNG)

---

## *Product Preview*

![Product page with products](assets/images/Product_page.PNG)
![Product page mobile-first](assets/images/Product_page_mobile.PNG)

---

## *Cart Preview*

![Cart page with products](assets/images/cart_page.PNG)
![Cart page mobile-first](assets/images/cart_page_mobile.PNG)

---

## *Checkout Preview*

![Checkout page](assets/images/checkout_page.PNG)
![Checkout page mobile-first](assets/images/checkout_page_mobile.PNG)

---

## *Checkout Success Preview*

![Checkout success page](assets/images/checkout-succes.PNG)
![Checkout success page mobile-first](assets/images/checkout-succes_mobile.PNG)
