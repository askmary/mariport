import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  width: 100%;
  height: 6em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const List = styled.ul`
  width: 20em;
  display: flex;
  justify-content: space-around;
  list-style: none;
  font-size: 1.5rem;
`
export const ItemList = styled.li`
  font-weight: 300;
  cursor: pointer;
  transition: 1s all;
  &:hover {
   color: #ff3030;
   transform: scale(1.1);
 }
`
export const Anchor = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #ff3030;
  }
`
