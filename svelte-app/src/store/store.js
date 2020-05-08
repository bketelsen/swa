import { writable } from 'svelte/store';

const state = {
  user: writable(null),
  products: writable([]),
};

const setUser = (user) => {
  state.user.set(user);
}

async function getUserInfo() {
  const response = await fetch("/.auth/me");
  const payload = await response.json();
  const { clientPrincipal } = payload;
  console.log(clientPrincipal);
  if(clientPrincipal !== null){
    setUser(clientPrincipal);
  }
  return clientPrincipal;
}

const getProducts = (products) => {
  state.products.update((old) => products);
};

const addProduct = (product) => {
  state.products.update((old) => {
    old.unshift(product);
    return old;
  });
};

const deleteProduct = (product) => {
  state.products.update((old) => [...old.filter((v) => v.id !== product.id)]);
};

const updateProduct = (product) => {
  state.products.update((old) => {
    const index = old.findIndex((v) => v.id === product.id);
    old.splice(index, 1, product);
    return [...old];
  });
};

export { state, setUser, getUserInfo, addProduct, getProducts, updateProduct, deleteProduct };
