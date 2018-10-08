import React from "react";

export const OrderSummary = function(props) {
  const { duration, price, discount, tax } = props;
  var initialTotal = duration * price;
  var _discount = Math.floor((initialTotal / 100) * discount);
  var subTotal = initialTotal - _discount;
  var _tax = Math.floor((subTotal / 100) * tax);
  var total = subTotal + _tax;
  return (
    <div className="OrderSummary">
      <div className="Title">Order Summary</div>
      <table>
        <tbody>
          <tr>
            <td>320 x {duration} </td>
            <td> {initialTotal} GBP</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>{_discount} GBP</td>
          </tr>
          <tr>
            <td>SubTotal</td>
            <td>{subTotal} GBP</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>{_tax} GBP</td>
          </tr>
        </tbody>
      </table>
      <div className="Total">
        <div className="TotalLabel">Total</div>
        <div className="Amount">
          {total} <small>GBP</small>
        </div>
      </div>
    </div>
  );
};
