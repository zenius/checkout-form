import React from "react";
import { Input } from "./Input";
import { ExpiryDate } from "./ExpiryDate";
import { Button } from "./Button";

export const PaymentForm = function(props) {
  const { onSubmit } = props;
  return (
    <div className="PaymentForm">
      <form onSubmit={onSubmit}>
        <div className="Title">Payment Form</div>
        <Input
          type="text"
          label="NAME ON CREDIT CARD"
          name="userName"
          placeholder="Zenius Lama"
        />
        <Input
          type="number"
          label="CREDIT CARD NUMBER"
          name="creditCardNumber"
          placeholder="0000 0000 0000 0000"
        />
        <ExpiryDate />
        <Button name="CheckoutButton" />
      </form>
    </div>
  );
};
