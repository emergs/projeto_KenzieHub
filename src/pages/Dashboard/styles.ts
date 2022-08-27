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
    width: 100%;
    border-bottom: 1px solid var(--gray-1);
    display: flex;
    justify-content: center;
  }

  header div{
    height: 131px;
    max-width: 780px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
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
    align-items:center;
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

  .div-update-tech{
    display: none;
  }

  .divTitleTechs{
    display: flex;
    justify-content:space-between;
    width: 100%;
    max-width: 780px;
  }

  .divTitleTechs button{
    width: 32px;
    height:32px;
    border-radius: 4px;
    border: none;
    color: var(--gray-0);
    background-color: var(--gray-3);
  }

  ul{
    width: 100%;
    max-width: 780px;
    background-color: var(--gray-3);
    display: flex;
    flex-direction: column;
    padding: 0 8.5px;
    border-radius: 4px;
    padding-top: 6px;
    padding-bottom: 22px;
  }

  li{
    height: 50px;
    background-color: var(--gray-4);
    margin-top: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 12px;
  }

  li span{
    color:var(--gray-0) ;
    width:100%;
    display: flex;
    font: var(--title3);
  }

  li span:last-child{
    font:var(--headline);
    display: flex;
    justify-content: flex-end;
  }

  .divContainerModal h2{
    font: var(--title3);
    color:var(--gray-0);
    width: 100%;
    height: 50px;
    padding-left: 20px;
    display: flex;
    align-items: center;
  }

`

const ContainerModal = styled.div`
  .titleTech{
    width: 296px;
    display: flex;
    justify-content: space-between;
    background-color: var(--gray-2);
    border-radius: 8px 8px 0px 0px;
  }

  form{
    border-radius: 0px 0px 8px 8px;
    box-shadow: none;
  }

  h2{
    font: var(--title3);
    color:var(--gray-0);
    width: 100%;
    height: 50px;
    padding-left: 20px;
    display: flex;
    align-items: center;
  }

  .titleTech button{
    font-size: 100%;
    width: 15px;
    margin-right: 20px;
    background: transparent;
    border: none;
    color: var(--gray-0);
  }
`

export {Main, ContainerModal};