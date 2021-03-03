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
    display:flex;
    justify-content:center;
    align-items:center;
}
* button{
    cursor:pointer;
}
`;

export default GlobalStyle;
