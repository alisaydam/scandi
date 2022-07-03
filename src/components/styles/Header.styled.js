import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: relative;
  max-width: 1140px;
  margin: auto;
`;

export const NavMenu = styled.ul`
  padding: 0;
  display: flex;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
`;

export const MenuItem = styled.li`
  padding: 0 16px;
  height: 80px;
  display: flex;
  align-items: center;
  font-weight: ${(props) => props.selected && 600};
  font-size: 16px;
  line-height: 120%;
  list-style: none;
  color: ${(props) => props.selected && "#5ECE7B"};
  border-bottom: ${(props) => (props.selected ? "#5ECE7B solid 2px" : "")};
  cursor: pointer;
  &:hover {
    color: #5ece7b;
  }
`;

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 80px;
  background: rgba(0, 0, 0, 0.2);
  z-index: 15;
`;

export const CardOverlay = styled.div`
  position: absolute;
  width: 325px;
  height: 680px;
  right: 20%;
  background: red;
  padding:32px; 16px 
`;

export const CurrencyMenu = styled.ul`
  position: absolute;
  top: 80px;
  right: 55px;
  padding: 10px 0;
`;

export const CurrencyMenuItem = styled.option`
  font-weight: 500;
  font-size: 18px;
  padding: 10px;
  list-style: none;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
`;

export const CurrencyIcon = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
`;

export const CartItemNumber = styled.div`
  position: absolute;
  height: 15px;
  width: 15px;
  display: flex;
  top: 25px;
  right: 7px;
  align-items: center;
  justify-content: center;
  z-index: 500;
  border-radius: 50%;
  z-index: 50;
  background: black;
`;
export const CartNumber = styled.p`
  color: white;
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 3px;
`;