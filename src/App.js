import React from "react";
import Cart from "./components/Cart";
import ShoppingItem from "./components/ShoppingItem";

const generateItem = (i) => {
  return {
    id: i + 1,
    name: "abc" + (i + 1),
    description: "desc_abc" + (i + 1),
  };
};

let items = [...Array(12).keys()];
items = items.map((i) => generateItem(i));

class App extends React.Component {
  state = {
    items: [],
  };

  handleAddToCart = (id) => {
    const item = this.state.items.find((item) => item.id === id);
    const newItem = item
      ? {
          ...item,
          count: item.count + 1,
        }
      : {
          id,
          name: items.find((item) => item.id === id).name,
          count: 1,
        };

    this.setState(
      {
        items: [...this.state.items.filter((item) => item.id !== id), newItem],
      },
      () => {
        console.log(this.state.items);
      }
    );
  };

  handlePlus = (id) => {
    const item = this.state.items.find((item) => item.id === id);
    const newItem = {
      ...item,
      count: item.count + 1,
    };

    this.setState({
      items: [...this.state.items.filter((item) => item.id !== id), newItem],
    });
  };

  handleMinus = (id) => {
    const item = this.state.items.find((item) => item.id === id);
    const newItem = {
      ...item,
      count: item.count - 1,
    };

    this.setState({
      items: [...this.state.items.filter((item) => item.id !== id), newItem],
    });
  };

  handleRemove = (id) => {
    this.setState({
      items: [...this.state.items.filter((item) => item.id !== id)],
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Item List</h1>
        <div className="col-sm-8">
          <div className="row">
            {items.map((item) => (
              <ShoppingItem
                key={item.id}
                item={item}
                addToCart={this.handleAddToCart}
                inCart={this.state.items.some((i) => i.id === item.id)}
              />
            ))}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="sticky">
            <Cart
              items={this.state.items}
              plus={this.handlePlus}
              minus={this.handleMinus}
              remove={this.handleRemove}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
