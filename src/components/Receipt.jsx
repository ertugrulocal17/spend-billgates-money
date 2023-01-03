import React from "react";
import { useSelector } from "react-redux";
import { convertToDollars } from "../data";

const Receipt = () => {
  const items = useSelector(state => state.element.items);
  const filtered = items.filter(item => item.quantity > 0);
  let total = 0;
  filtered.forEach(item => {
    total += item.price * item.quantity;
  });

  return (
    <>
      {filtered.length > 0 && (
        <div className="spree-wrapper">
          <div className="spree-headline">Your Receipt</div>
          {filtered.map(item => (
            <div className="spree-items" key={item.id}>
              <div className="spree-item-name">{item.name}</div>
              <div className="spree-item-amount">x{item.quantity}</div>
              <div className="spree-item-cost">
                {convertToDollars(item.price)}
              </div>
            </div>
          ))}

          <div className="spree-total">
            <span>TOTAL</span>
            <div className="spree-total-money">{convertToDollars(total)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Receipt;
