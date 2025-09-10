import { createSlice } from '@reduxjs/toolkit';

const saveToLocalStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state));
};

const loadFromLocalStorage = () => {
  const saved = localStorage.getItem('cart');
  return saved ? JSON.parse(saved) : { items: [], total: 0 };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadFromLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.total = state.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
      saveToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      state.total = state.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
      saveToLocalStorage(state);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item && quantity >= 1) {
        item.quantity = quantity;
        state.total = state.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
        saveToLocalStorage(state);
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;