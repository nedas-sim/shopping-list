const ShoppingItem = ({ item, addToCart, inCart }) => {
  const panelClass = inCart ? "panel panel-success" : "panel panel-default";
  return (
    <div className="col-sm-6">
      <div className={panelClass}>
        <div className="panel-heading">{item.name}</div>
        <div className="panel-body">{item.description}</div>
        <div className="centered">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addToCart(item.id)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingItem;
