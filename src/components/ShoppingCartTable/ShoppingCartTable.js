import React from "react";
import { connect } from "react-redux";
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBookRemovedFromCart
} from "../../actions";
import "./ShoppingCartTable.css";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total.toFixed(2)}</td>
        <td>
          <button className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" onClick={() => onDelete(id)} />
          </button>
          <button className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" onClick={() => onIncrease(id)} />
          </button>
          <button className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" onClick={() => onDecrease(id)} />
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal.toFixed(2)
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBookRemovedFromCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartTable);
