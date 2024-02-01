import React, { useReducer } from "react";
import StoreContext from "./store-context";

/**
 * A Store Provider to add, remove, sort items and to calculate the balance of the household book. All data is saved in local storage.
 */

let defaultStoreState = {
  months: [],
  balance: {
    revenue: 0,
    expenses: 0,
    balance: 0,
  },
};

const defState = JSON.parse(localStorage.getItem("items"));
if (defState) {
  defaultStoreState = defState;
}

const sortItems = (items) => {
  return items.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    } else if (b.date > a.date) {
      return 1;
    } else {
      return 0;
    }
  });
};

const calculateBalancePerMonth = (items) => {
  let balance = 0;
  console.log(balance);
  items.map((item) => {
    if (item.type === "revenue") {
      balance += parseInt(item.amount);
      console.log(balance);
    } else {
      balance -= parseInt(item.amount);
      console.log(balance);
    }
  });
  console.log(balance);
  return balance;
};

const calculateTheOverallBalance = (balance, item, actType) => {
  let updatedRevenue = balance.revenue;
  let updatedExpenses = balance.expenses;
  let updatedBalance = balance.balance;
  if (actType === "add") {
    if (item.type === "revenue") {
      updatedRevenue += item.amount;
      updatedBalance += item.amount;
    } else {
      updatedExpenses += item.amount;
      updatedBalance -= item.amount;
    }
  } else if (actType === "remove") {
    if (item.type === "revenue") {
      updatedRevenue -= item.amount;
      updatedBalance -= item.amount;
    } else {
      updatedExpenses -= item.amount;
      updatedBalance += item.amount;
    }
  }
  return {
    revenue: updatedRevenue,
    expenses: updatedExpenses,
    balance: updatedBalance,
  };
};

const storeReducer = (state, action) => {
  if (action.type === "ADD") {
    const dateOfItem = new Date(action.item.date);
    const idOfItem = `${dateOfItem.getFullYear()}-${dateOfItem.getMonth() + 1}`;

    let existingStoreMonthIndex = state.months.findIndex(
      (month) => month.id === idOfItem
    );
    const existingStoreMonth = state.months[existingStoreMonthIndex];

    let updatedMonths = [...state.months];

    if (existingStoreMonth) {
      const existingStoreItems = existingStoreMonth.items;
      const existingStoreId = existingStoreMonth.id;
      const updatedStoreItems = [...existingStoreItems, action.item];
      const sortedStoreItems = sortItems(updatedStoreItems);
      const balance = calculateBalancePerMonth(sortedStoreItems);
      let updatedMonth = {
        items: sortedStoreItems,
        id: existingStoreId,
        monthBalance: balance,
      };
      updatedMonths[existingStoreMonthIndex] = updatedMonth;
    } else {
      updatedMonths.push({
        items: [action.item],
        id: idOfItem,
        monthBalance:
          action.item.type === "revenue"
            ? +action.item.amount
            : -action.item.amount,
      });
    }
    let updatedBalance = calculateTheOverallBalance(
      state.balance,
      action.item,
      "add"
    );

    localStorage.setItem(
      "items",
      JSON.stringify({
        months: updatedMonths,
        balance: updatedBalance,
      })
    );

    return {
      months: updatedMonths,
      balance: updatedBalance,
    };
  }

  if (action.type === "REMOVE") {
    const monthIndex = state.months.findIndex((month) => {
      return month.id === action.monthId;
    });
    let updatedItems = state.months[monthIndex].items.filter(
      (item) => item.id !== action.id
    );
    let updatedMonths = [...state.months];
    console.log(updatedItems);
    const balance = calculateBalancePerMonth(updatedItems);
    console.log(balance);
    if (updatedItems.length > 0) {
      updatedMonths[monthIndex] = {
        items: updatedItems,
        id: action.monthId,
        monthBalance: balance,
      };
    } else {
      updatedMonths.splice(monthIndex, 1);
    }

    let updatedBalance = calculateTheOverallBalance(
      state.balance,
      action.item,
      "remove"
    );

    localStorage.setItem(
      "items",
      JSON.stringify({
        months: updatedMonths,
        balance: updatedBalance,
      })
    );

    return {
      months: updatedMonths,
      balance: updatedBalance,
    };
  }

  return defaultStoreState;
};

const StoreProvider = (props) => {
  const [storeState, dispatchStoreAction] = useReducer(
    storeReducer,
    defaultStoreState
  );

  const addItemToStoreHandler = (item) => {
    dispatchStoreAction({ type: "ADD", item: item });
  };

  const removeItemFromStoreHandler = (id, monthId, type, amount) => {
    dispatchStoreAction({ type: "REMOVE", id: id, monthId: monthId, item: {type: type, amount: amount} });
  };

  const storeContext = {
    months: storeState.months,
    balance: storeState.balance,
    addItem: addItemToStoreHandler,
    removeItem: removeItemFromStoreHandler,
  };

  return (
    <StoreContext.Provider value={storeContext}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
