import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeItem } from "../actions";
import { updateQuantity } from "../actions";

const CartItem = ({ price, quantity, title, id }) => {
  const dispatch = useDispatch();
  return (
    <CartItemDiv>
      <CartTitle>
        <div>{title}</div>
        <CloseButton onClick={() => dispatch(removeItem({ id, title, price }))}>
          X
        </CloseButton>
      </CartTitle>
      <QuantityDiv>
        <label htmlFor="quantity">Quantity:</label>
        <QuantityInput
          onChange={(ev) => {
            const quantityValue = Number(ev.target.value);
            dispatch(updateQuantity({ id, quantity: quantityValue }));
          }}
          type="text"
          id="quantity"
          name="quantity"
          value={quantity}
        ></QuantityInput>
      </QuantityDiv>
    </CartItemDiv>
  );
};

const CartItemDiv = styled.div`
  background-color: #4d004d;
`;

const QuantityInput = styled.input`
  width: 25px;
  margin-left: 10px;
`;

const CartTitle = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  border-radius: 5px;
  border: none;
  outline: none;
  color: white;
  background-color: #4d004d;
  &:hover {
    cursor: pointer;
    background-color: #ff406e;
  }
`;

const QuantityDiv = styled.div`
  background-color: #330033;
  padding: 15px;
`;
export default CartItem;
