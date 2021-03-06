import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box
}

body{
    width:100vw;
    min-height:100vh;
    font-family: 'Poppins', sans-serif;  
    overflow:hidden;
}
* a{
    color:inherit;
    text-decoration:none;
     cursor:pointer;
}
* button{
    cursor:pointer;
}
.hide-loading{
    opacity:0 !important;
    pointer-events:none;
}

`;

export default GlobalStyle;
