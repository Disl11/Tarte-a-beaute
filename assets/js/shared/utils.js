// helpers communs (DOM, formatage, URL id)
// sélection DOM, format prix, lecture id d'URL
import { getNumberOfProductsInCart } from "./domain.js";

export const clearInputValue = (input) => (input.value = "");

export const getIdFromUrl = () => window.location.href.split("=")[1];

export const refreshCartTooltip = function () {
  const productsInCart = getNumberOfProductsInCart();

  if (productsInCart) {
    if (!document.body.contains(document.querySelector(".cart-tooltip"))) {
      const tooltip = document.createElement("span");
      tooltip.classList.add("cart-tooltip");
      tooltip.textContent = productsInCart;
      document.querySelector(".cartBtn").appendChild(tooltip);
    } else {
      document.querySelector(".cart-tooltip").textContent = productsInCart;
    }
  } else {
    if (document.body.contains(document.querySelector(".cart-tooltip"))) {
      document.querySelector(".cart-tooltip").remove();
    }
  }
};

export const wipeMain = function () {
  const main = document.querySelector("main");
  main.innerHTML = "";
};

export const handleEmptyCart = function () {
  wipeMain();
  const cartEmptyTitle = document.createElement("h2");
  cartEmptyTitle.classList.add("emptyCart");
  cartEmptyTitle.textContent = "Votre panier est vide!";

  const cartEmptyBtn = document.createElement("button");
  cartEmptyBtn.classList.add("emptyCart");
  cartEmptyBtn.textContent = "Retourner à la liste de produits";
  cartEmptyBtn.addEventListener(
    "click",
    () => (window.location.href = "./index.html")
  );

  document.querySelector("main").append(cartEmptyTitle, cartEmptyBtn);
};
