import React from "react";
import styled from "styled-components";

const CartItem = ({ price, quantity, title }) => {
  return (
    <CartItemDiv>
      <CartTitle>
        <div>{title}</div>
        <CloseButton>X</CloseButton>
      </CartTitle>
      <QuantityDiv>
        <label htmlFor="quantity">Quantity:</label>
        <QuantityInput
          type="text"
          id="quantity"
          name="quantity"
        ></QuantityInput>
      </QuantityDiv>
    </CartItemDiv>
  );
};

const CartItemDiv = styled.div`
  background-color: #4d004d;
`;

const QuantityInput = styled.input`
  width: 22px;
  margin-left: 10px;
`;

const CartTitle = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  border: none;
  outline: none;
  color: white;
  background-color: #4d004d;
`;

const QuantityDiv = styled.div`
  background-color: #330033;
  padding: 15px;
`;
export default CartItem;
