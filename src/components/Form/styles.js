import styled from 'styled-components';

const Forms = styled.form`
width: 296px;
background-color: var(--gray-3);
display:flex;
flex-direction:column;
padding-top: 33.58px;
padding-bottom: 19.96px;
padding-left: 17.99px;
padding-right: 14.05px;
border-radius: 3.2px;
box-shadow: 0px 0px 8px 2px var(--gray-2);

h2{
  font:var(--title1);
  color:var(--gray-0);
  margin-bottom: 18px;
}  

span{
  font:var(--headline-italic);
  color: var(--gray-0);
}

label{
  color: var(--gray-0);
  margin-top: 21.32px;
  text-align: start;
}

input, select{
  width:100%;
  height: 38.38px;
  margin-top: 17.86px;
  border-radius: 3.2px;
  border: none;
  background-color:var(--gray-2);
  color: var(--gray-0);
  padding-left: 13px;
  font:var(--inputs);
}

input::placeholder{
  color:var(--gray-0);
}

select{
  padding-left: 13px;
}

/* button{
  margin-top: 20px;
  width: 100%;
  background-color: var(--color-primary-negative);
} */
  
`
export default Forms;