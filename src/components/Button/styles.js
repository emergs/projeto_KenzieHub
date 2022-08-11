import styled from "styled-components";

const Buttons = styled.button`
  width:150px;
  height:38px;
  border-radius: 4px;
  border: none;
  margin-top: 20px;
  width: 100%;
  color: var(--gray-0);
  background-color: ${ props => props.colorPrimary ? '#FF577f': props.gray1 ? '#869E86':'#59323f '};
`
export default Buttons;