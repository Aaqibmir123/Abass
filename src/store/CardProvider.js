import { useReducer } from "react";
import CardContext from "./CardContext";

const defaultCard = {
  items: [],
  totalamount: 0,
};
const reducer = (state, action) => {
  if (action.type === "Add") {
    const updatedItems = state.items.concat(action.item);
    const NewTotalAmount =
      state.totalamount + action.item.price * action.item.totalamount;
      return {
        items:updatedItems,
        totalamount:NewTotalAmount
      }
  }
  return defaultCard;
};
const CardProvider = (props) => {
  const [cardState, disPatch] = useReducer(reducer, defaultCard);

  const addItemhandler = (item) => {
    disPatch({ type: "Add", item: item });
  };

  const removeItemhandler = (id) => {
    disPatch({ type: "Remove", id: id });
  };
  const cardContext = {
    items: cardState.items,
    totalamount: cardState.totalamount,
    addItem: addItemhandler,
    removeItem: removeItemhandler,
  };
  return (
    <CardContext.Provider value={cardContext}>
      {props.children}
    </CardContext.Provider>
  );
};
export default CardProvider;
