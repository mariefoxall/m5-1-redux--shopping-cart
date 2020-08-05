import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  const state = useSelector((state) => state);
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);

  let total = 0;

  storeItems.forEach((item) => {
    total = total + item.price * item.quantity;
  });

  return (
    <RightSide>
      <Divider />
      <CartDiv>
        <h1>Your Cart</h1>
        <p>{storeItems.length} item(s)</p>
        {storeItems.map((item) => {
          return (
            <Itemized key={item.id}>
              <CartItemList>
                <CartItem
                  price={item.price}
                  quantity={item.quantity}
                  title={item.title}
                  id={item.id}
                />
              </CartItemList>
            </Itemized>
          );
        })}
        <BottomPart>
          <Total>Total: ${total / 100}</Total>
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

const CartItemList = styled.div``;

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
