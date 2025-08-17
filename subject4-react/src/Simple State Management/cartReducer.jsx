function sum(items) {
  const total = items.reduce((s, item) => s + Number(item.price || 0), 0);
  return { total, itemCount: items.length };
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = { ...action.data, id: Date.now() };
      const items = [...state.items, item];
      return { items, ...sum(items) };
    }
    case "REMOVE_ITEM": {
      const itemToRemove = state.items.find((item) => item.id === action.data);
      if (!itemToRemove) return state;
      const items = state.items.filter((it) => it.id !== action.data);
      return { items, ...sum(items) };
    }
    case "CLEAR_CART": {
      return {
        items: [],
        total: 0,
        itemCount: 0,
      }
    }
    default:
      return state;
  }
}

export { cartReducer, sum };