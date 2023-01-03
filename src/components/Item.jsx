import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convertToDollars } from "../data";
import { product } from "../features/elementSlice";
const Item = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const [salable, setSalable] = useState("disabled");
  const [buyable, setBuyable] = useState("");
  const value = useSelector(state => state.element.value);
  const dispatch = useDispatch();

  const sellItem = () => setQuantity(Number(quantity) - 1);

  const buyItem = () => setQuantity(Number(quantity) + 1);

  // dispatch product action
  useEffect(() => {
    dispatch(product({ id: item.id, quantity }));
  }, [quantity, dispatch, item.id]);
  // Sell button is disabled if quantity is 0
  useEffect(() => {
    if (quantity > 0) setSalable("");
    else setSalable("disabled");
  }, [quantity]);

  // Buy button is disabled if value is less than item price
  useEffect(() => {
    if (item.price > value) setBuyable("disabled");
    else setBuyable("");
  }, [value, item.price]);

  // assign max quantity
  const handleChange = count => {
    const maxQuantity = Math.floor(value / item.price) + quantity;
    if (count && count > 0) {
      if (count > maxQuantity && value > 0) setQuantity(maxQuantity);
      else setQuantity(count);
    } else {
      setQuantity(0);
    }
  };

  return (
    <div className="item-wrapper">
      <img src={item.image} alt="" className="item-img" />
      <div className="item-name">{item.name}</div>
      <div className="item-cost">{convertToDollars(item.price)}</div>
      <div className="item-controls">
        <button disabled={salable} className="item-sell" onClick={sellItem}>
          Sell
        </button>
        <input
          type="number"
          pattern="\d*"
          className="item-input"
          value={quantity}
          onChange={e => handleChange(parseInt(e.target.value))}
        />
        <button className="item-buy" onClick={buyItem} disabled={buyable}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default Item;
