import styled from "styled-components";

const Headers = styled.div`
display: flex;
justify-content: center;
width: 100%;

.containerNavBar{
  width: 100%;
  max-width: 780px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  background-color:var(--gray-4);
  margin-bottom: 31.62px;
}

button{
  width: 80px;
  height: 32px;
  background-color: var(--gray-3);
  color:var(--gray-0);
}

`
export default Headers;