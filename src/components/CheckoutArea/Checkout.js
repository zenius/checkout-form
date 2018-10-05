import React from "react";
import { OrderSummary } from "./OrderSummary";
import { PaymentForm } from "./PaymentForm";

export const Checkout = function(props) {
  const { discount, tax, price, duration, onSubmit } = props;
  return (
    <div className="Checkout">
      <OrderSummary
        duration={duration}
        price={price}
        discount={discount}
        tax={tax}
      />
      <PaymentForm onSubmit={onSubmit} />
    </div>
  );
};
