import styled from "styled-components";

const Button = styled.button`
  width:150px;
  height:38px;
  border-radius: 4px;
  border: none;
  margin-top: 20px;
  width: 100%;
  color: var(--gray-0);
  font:var(--inputs);
  background-color: ${ props => props.colorPrimary ? '#FF577f': props.gray1 ? '#869E96':'#59323f '};
`
export default Button;