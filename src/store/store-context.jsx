import React from "react";

const StoreContext = React.createContext({
  months: [],
  balance: {},
  addItem: (item) => {},
  removeItem: (id, monthId, type, amount) => {},
});

export default StoreContext;
