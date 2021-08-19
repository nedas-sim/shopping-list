import React from "react";

const CartItem = ({ item, plus, minus, remove }) => {
  const minusButtonClass =
    item.count <= 1
      ? "btn btn-primary cartButton disabled"
      : "btn btn-primary cartButton";
  return (
    <div className="panel panel-default">
      <div className="panel-heading">{item.name}</div>
      <div className="panel-body">Items in the cart: {item.count}</div>
      <div className="centered">
        <button
          type="button"
          className="btn btn-primary cartButton"
          onClick={() => plus(item.id)}
        >
          <span className="glyphicon glyphicon-plus"></span>
        </button>
        <button
          type="button"
          className={minusButtonClass}
          onClick={() => minus(item.id)}
          disabled={item.count <= 1}
        >
          <span className="glyphicon glyphicon-minus"></span>
        </button>
        <button
          type="button"
          className="btn btn-primary cartButton"
          onClick={() => remove(item.id)}
        >
          <span className="glyphicon glyphicon-remove"></span>
        </button>
      </div>
    </div>
  );
};

const Cart = ({ items, plus, minus, remove }) => {
  items.sort((a, b) => a.id - b.id);
  return (
    <>
      {items.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          plus={plus}
          minus={minus}
          remove={remove}
        />
      ))}
    </>
  );
};

export default Cart;
