import styled from 'styled-components';


export const Btn = styled.button`
  background-color: ${props => props.color};
  margin-top: 20px;
   align-items: center;
    background-color: #fff;
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  max-width: 100%;
  padding: 2px 24px;
  position: relative;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  z-index: 0;

  &:hover {
background: #F6F9FE;
  color: #174ea6;
  }

   &:focus {
 outline: none;
  border: 2px solid #4285f4;
  }

  &:active {
box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
  }
`;

export const Inp = styled.input`
  padding: 5px;
  width: 240px;
  font-size: 16px;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #ffffff;
  color: #000000;
  border-style: solid;
  border-radius: 0px;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  text-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);

  &:focus {
    outline: none;
  }
`;