export const useProduct = (products) => {
  const totalPrice = products.reduce((total, curr) => total + curr);
  return { totalPrice };
};
