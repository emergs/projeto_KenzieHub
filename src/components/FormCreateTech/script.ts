import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--gray-4);
  border-radius: 8px;

  div {
    width: 296px;
    display: flex;
    justify-content: space-between;
    background-color: var(--gray-2);
    border-radius: 8px 8px 0px 0px;
  }

  form {
    border-radius: 0px 0px 8px 8px;
    box-shadow: none;
  }

  h2 {
    font: var(--title3);
    color: var(--gray-0);
    width: 100%;
    height: 50px;
    padding-left: 20px;
    display: flex;
    align-items: center;
  }

  div button {
    font-size: 100%;
    width: 15px;
    margin-right: 20px;
    background: transparent;
    border: none;
    color: var(--gray-0);
  }
`;
