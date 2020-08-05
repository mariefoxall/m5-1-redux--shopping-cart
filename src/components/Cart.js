import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";

const Cart = () => {
  return (
    <RightSide>
      <Divider />
      <CartDiv>
        <h1>Your Cart</h1>
        <p>1 item</p>
        <Itemized>
          <CartTitle>
            <div>Here's the stuff you want:</div>
            <CloseButton>X</CloseButton>
          </CartTitle>
          <CartItemList>
            <CartItem />
          </CartItemList>
        </Itemized>
        <BottomPart>
          <Total>Total: $12.34</Total>
          <PurchaseButton>Purchase</PurchaseButton>
        </BottomPart>
      </CartDiv>
    </RightSide>
  );
};
const RightSide = styled.div`
  display: flex;
  width: 30%;
  height: 100vh;
  position: fixed;
  right: 0;
  box-sizing: border-box;
`;

const CartDiv = styled.div`
  background-color: #4d004d;
  margin-left: 5px;
  padding: 20px;
  color: white;
  width: 100%;
  position: relative;
  box-sizing: border-box;
`;

const Divider = styled.div`
  border-left: 1px dashed red;
  width: 5px;
`;
const Itemized = styled.div`
  border: 1px dashed white;
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
const CartItemList = styled.div`
  background-color: #330033;
  padding: 15px;
`;

const TopPart = styled.div``;

const BottomPart = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 90%;
`;

const Total = styled.div`
  color: white;
`;

const PurchaseButton = styled.button`
  background-color: #ff406e;
  color: white;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 5px 10px;
`;

export default Cart;
