import React from "react";
import styled from "styled-components";

const CartItem = () => {
  return (
    <CartItemDiv>
      <div>THING TO BUY: </div>
      <Quantity type="text" id="quantity" name="quantity"></Quantity>
    </CartItemDiv>
  );
};

const CartItemDiv = styled.div`
  display: flex;
`;

const Quantity = styled.input`
  width: 22px;
  margin-left: 10px;
`;
export default CartItem;
