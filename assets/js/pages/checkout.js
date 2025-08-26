// # logique checkout (étapes, validations, confirm)
// validations coordonnées, choix livraison, paiement simulé, revalidation stock, calcul total, génération orderId, sauvegardes et confirmation

import {
  addOrder,
  checkIfCartIsEmpty,
  getRandomOrderId,
  getTotalCartPrice,
} from "../shared/domain.js";
import { getCart } from "../shared/state.js";
import {
  handleEmptyCart,
  refreshCartTooltip,
  wipeMain,
} from "../shared/utils.js";

if (!checkIfCartIsEmpty()) {
  refreshCartTooltip();
  manageRequiredFields();

  const totalCartPrice = getTotalCartPrice();
  const isDelyveryFree = totalCartPrice > 50 ? true : false;
  document.querySelector(
    ".subtotal"
  ).textContent = `sous-total ${totalCartPrice}€`;
  document.querySelector(".delivery-fee").textContent = `frais de livraison: ${
    isDelyveryFree ? "Gratuit" : "3.5€"
  }`;

  document.querySelector(".total").textContent = `Total: ${
    isDelyveryFree ? totalCartPrice : totalCartPrice + 3.5
  }€`;

  const deliveryDate = document.createElement("p");
  deliveryDate.textContent = `Livraison prévue le ${getDatePlusDays(3)}`;
  deliveryDate.style.textAlign = "right";
  document.querySelector(".step-2 h3").after(deliveryDate);

  let coordinatesFormData = {};
  const step1 = document.querySelector(".step-1");
  const coordinatesForm = step1.querySelector("form");
  coordinatesForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(coordinatesForm);
    coordinatesFormData = Object.fromEntries(data);
    step1.classList.remove("active");
    step2.classList.add("active");
    manageRequiredFields();
  });

  let paymentFormData = {};
  const step2 = document.querySelector(".step-2");
  const paymentForm = step2.querySelector("form");

  document.querySelector(".back-btn").addEventListener("click", () => {
    step1.classList.add("active");
    step2.classList.remove("active");
    manageRequiredFields();
  });

  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(paymentForm);
    paymentFormData = Object.fromEntries(data);
    if (validateExpiryDate(paymentFormData["expiration-date"])) {
      const order = {
        coordinates: coordinatesFormData,
        paymentInfo: paymentFormData,
        pricePaid: totalCartPrice > 50 ? totalCartPrice : totalCartPrice + 3.5,
        products: getCart(),
        orderId: getRandomOrderId(),
        estimatedDeliveryDate: getDatePlusDays(3),
      };
      addOrder(order);
      handleSucces(order);
    } else {
      alert("La date d'expiration est dépassée");
    }
  });

  function manageRequiredFields() {
    document.querySelectorAll(".step:not(.active)").forEach((step) => {
      step.querySelectorAll("input").forEach((input) => {
        input.removeAttribute("required");
      });
    });

    document.querySelectorAll(".step.active").forEach((step) => {
      step.querySelectorAll("input").forEach((input) => {
        input.setAttribute("required", "");
      });
    });
  }

  function getDatePlusDays(days) {
    const today = new Date();
    today.setDate(today.getDate() + days);

    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Les mois commencent à 0
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  }

  function validateExpiryDate(value) {
    const [month, year] = value.split("/");
    const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
    const now = new Date();
    return expiry > now;
  }

  function handleSucces(order) {
    wipeMain();
    const succesTemplate = document.getElementById("succes-template");
    const succes = succesTemplate.content.cloneNode(true);
    document.querySelector("main").appendChild(succes);
    document.querySelector(
      ".p-succes:nth-child(1)"
    ).textContent = `Numero de commande : ${order.orderId}`;
    document.querySelector(
      ".p-succes:nth-child(2)"
    ).textContent = `Adresse de livraison : ${order.coordinates.address}`;
    document.querySelector(
      ".p-succes:nth-child(3)"
    ).textContent = `Total de votre commande : ${order.pricePaid}€`;
    document.querySelector(
      ".p-succes:nth-child(4)"
    ).textContent = `Email : ${order.coordinates.email}`;
    document.querySelector(
      ".p-succes:nth-child(5)"
    ).textContent = `Numero de téléphone : ${order.coordinates.phone}`;
  }
} else {
  handleEmptyCart();
}
