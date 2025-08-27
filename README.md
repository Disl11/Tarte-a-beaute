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


## *Product Loading*

* The product ID is retrieved from the URL.  
* Product data (name, price, stock, image, rating, etc.) is loaded using an external function.  
* This data is then used to build the product display.

---

*HTML Structure Creation*

* All elements (image, name, price, stock, rating, buttons) are generated with JavaScript.  
* A structure using `<main>` and `<div class="container">` is created dynamically.

---

*Displaying Product Information*

* The product’s name, price, available stock, and rating are clearly shown.  
* A default image is displayed if the original image link is broken.

---

*Button Handling*

* Two buttons are displayed:
  * **Add to cart**: disabled if the product is out of stock or already in the cart.  
  * **Continue shopping**: redirects to the homepage.
* Clicking **Add to cart** stores the product in the cart and disables the button.

---

*Accessibility & User Feedback*

* Alt text for images  
* Alert message during redirection  
* Cart icon is updated after adding a product

---

*Use of Shared Modules*

* The script uses other files to:
  * Load products (`api.js`)  
  * Manage cart state (`domain.js`, `state.js`)  
  * Get the product ID from the URL (`utils.js`)

