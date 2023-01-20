import styled from 'styled-components';


export const ItemsUl = styled.ul`
  list-style-type: none;
  text-align: center;
  font-family: 'Arial Black', Gadget, sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  word-spacing: 1px;
  color: #000000;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
`;

export const ItemsList = styled.li`
  background-color: ${props => props.color};
  height: 40px;
  border-radius: 25px;
  margin-top: 15px;
  width: 240px;
`;