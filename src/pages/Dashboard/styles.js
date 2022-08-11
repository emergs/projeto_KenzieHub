import styled from "styled-components";

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  .navbar{
    height: 73px;
    border-bottom: 1px solid var(--gray-1);
    padding: 0 12px;
  }

  .navbar div{
    height: 100%; 
  }

  .navbar div button{
    margin-top: 0px;
  }

  header{
    height: 131px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    border-bottom: 1px solid var(--gray-1);
  }

  header h1{
    font:var(--title1);
    color: var(--gray-0);
  }

  header span{
    font:var(--headline-bold);
    color: var(--gray-1);
  }

  .main{
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    gap:10px;
    padding:37px 13px;
  }

  .main h2{
    font:var(--title1);
    color: var(--gray-0);
  }

  .main p{
    font:var(--title3);
    color: var(--gray-0);
  }
`
export default Main;