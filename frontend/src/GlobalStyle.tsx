import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box
}
* a{
    color:inherit;
    text-decoration:none;
     cursor:pointer;
}
body{
    width:100vw;
    min-height:100vh;
    font-family: 'Poppins', sans-serif;  
}
* button{
    cursor:pointer;
}
.hide-loading{
    opacity:0 !important;
    pointer-events:none;
}
.App{
    width:100vw;
    height:100vh;
    overflow:hidden;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
}
`;

export default GlobalStyle;
