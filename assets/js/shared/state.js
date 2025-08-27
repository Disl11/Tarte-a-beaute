// localStorage (cart, checkout, lastOrder)
// lire/écrire cart, checkoutDraft, lastOrder dans localStorage
export const getCart = () => JSON.parse(localStorage.getItem("cart")) ?? [];

export const saveCart = (data) =>
  localStorage.setItem("cart", JSON.stringify(data));

export const getOrders = () => JSON.parse(localStorage.getItem("orders")) ?? [];

export const saveOrders = (data) =>
  localStorage.setItem("orders", JSON.stringify(data));
