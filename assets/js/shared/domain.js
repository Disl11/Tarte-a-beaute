// logique panier (add/update/remove/total)
// règles panier (bornage au stock, total)
import { getProduct } from "./api.js";
import { getCart, getOrders, saveCart, saveOrders } from "./state.js";
import { refreshCartTooltip } from "./utils.js";

// Cart

export const addProductToCart = async function (
  productId,
  refreshTooltip = false
) {
  const product = await getProduct(productId);

  const cart = getCart();

  const doesItExistInCart = cart.find(
    (productInCart) => productInCart.product.id === product.id
  );

  if (doesItExistInCart) {
    doesItExistInCart.numberInCart++;
    saveCart(cart);
  } else {
    cart.push({ product: product, numberInCart: 1 });
    saveCart(cart);
  }
  if (refreshTooltip) refreshCartTooltip();
};

export const removeProductFromCart = async function (productId) {
  const product = await getProduct(productId);

  const cart = getCart();

  const doesItExistInCart = cart.find(
    (productInCart) => productInCart.product.id === product.id
  );

  if (doesItExistInCart) {
    saveCart(
      cart.filter((productInCart) => productInCart.product.id !== product.id)
    );
  }
};

export const updateProductStockInCart = async function (productId, newStock) {
  const product = await getProduct(productId);

  const cart = getCart();

  const doesItExistInCart = cart.find(
    (productInCart) => productInCart.product.id === product.id
  );

  if (doesItExistInCart) {
    if (newStock === 0) {
      removeProductFromCart(product.id);
    } else {
      doesItExistInCart.numberInCart = newStock;
    }
    saveCart(cart);
  }
};

export const getNumberOfProductsInCart = () => getCart().length;

export const isProductInCart = (productId) =>
  getCart().find((product) => product.product.id === productId);

export const getTotalCartPrice = () =>
  parseFloat(
    getCart()
      .reduce(
        (acc, product) => (acc += product.product.price * product.numberInCart),
        0
      )
      .toFixed(2),
    10
  );

export const checkIfCartIsEmpty = function () {
  return getCart().length === 0;
};

export const checkIfCartProductsAreInStock = async function () {
  const cart = getCart();

  return cart.reduce(async (acc, cartItem) => {
    const curr = await getProduct(cartItem.product.id);
    return curr.stock ? acc : false;
  }, true);
};

// Orders

export const addOrder = function (order) {
  const orders = getOrders();
  orders.push(order);
  saveOrders(orders);
  saveCart([]);
  refreshCartTooltip();
};

export const checkIfOrderNumberExist = function (orderId) {
  const ordersFromCart = getOrders();
  return ordersFromCart.find(
    (orderFromCart) => orderFromCart.orderId === orderId
  )
    ? true
    : false;
};

export const getRandomOrderId = function () {
  let orderId;
  do {
    orderId = Math.round(Math.random() * 10000000000000000);
  } while (checkIfOrderNumberExist(orderId));
  return orderId;
};
