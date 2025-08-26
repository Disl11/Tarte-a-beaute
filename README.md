# DOC - Ecommerce Tarte à Beauté

## Tarte à Beauté — Mini E-Commerce Shop

Front-end web development project for a mini cosmetics shop, using HTML, CSS, and Vanilla JavaScript.

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

---

##  *Project Structure*


#/
#├── assets/
#│   ├── css/
#│   │   └── style.css            # Main style file
#│   │
#│   ├── js/
#│   │   ├── shared/
#│   │   │   ├── api.js           # Loading products
#│   │   │   ├── state.js         # localStorage management
#│   │   │   ├── domain.js
#│   │   │   └── utils.js         # Utility functions
#│   │   │
#│   │   └── pages/
#│   │       ├── index.js         # JS for the homepage
#│   │       ├── product.js       # JS for the productpage
#│   │       ├── cart.js          # JS for the cartpage
#│   │       └── checkout.js      # JS the checkoutpage
#│   │
#│   ├── images/                  # logo
#│   └── fonts/
#│
#├── data/
#│   └── products.json            # Simulated product data
#│
#├── docs/                        # Mockups, zoning and wireframe
#│
#├── cart.html                    # cartpage
#├── checkout.html                # checkoutpage
#├── index.html                   # homepage
#├── product.html                 #  productpage
#└── README.md                    # Project documentation


## Methodology

Work done locally

Task management using Trello (Backlog → To Do → In Progress → Done)

Git workflow: main branch, dev branch, and one branch per featurefeature

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
