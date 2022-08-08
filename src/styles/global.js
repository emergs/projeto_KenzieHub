import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  @font-face {
    font-family:'Inter' ;
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  }

  :root{
    --color-primary:#FF577F;
    --color-primary-focus:#FF427F;
    --color-primary-negative:#59323F;

    --gray-4:#121214;
    --gray-3:#212529;
    --gray-2:#343B41;
    --gray-1:#868E96;
    --gray-0:#F8F9FA;

    --sucess:#3FE864;
    --negative:#E83F5B;

    --title1: bold 20px 'Inter' sans-serif;
    --title2: bold 18px 'Inter' sans-serif;
    --title3: bold 14px 'Inter' sans-serif;
    --headline: normal 12px 'Inter' sans-serif;
    --headline-bold: bold 12px 'Inter' sans-serif;
    --headline-italic: italic 12px 'Inter' sans-serif;
  }
  
  *{
    list-style:none;
    margin: 0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    background-color: var(--grey-0);
  }
`;

export default Global;
