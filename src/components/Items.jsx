import { useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import Receipt from "./Receipt";

const Items = () => {
  const items = useSelector(state => state.element.items);
  const value = useSelector(state => state.element.value);
  const numberFormatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
  });
  return (
    <>
      <div className="money-bar">${numberFormatter.format(value)}</div>
      <div className="items">
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <Receipt />
    </>
  );
};

export default Items;
