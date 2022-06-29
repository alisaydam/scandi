import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
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
`;
