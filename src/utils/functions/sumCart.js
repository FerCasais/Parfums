export const SumCart= (items) =>
  items.map((item) => item.price * item.quantity).reduce((acc, curr) => acc + curr, 0);

  export const SumCartItems= (items) =>
  items.map((item) => item.quantity).reduce((acc, curr) => acc + curr, 0);