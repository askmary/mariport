import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "./Component/Header/index"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    color:white;
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    text-decoration:none;
  }
  body{
    width:100%;
    background:#1C1C1C;
  }
`
export default function App(){
  return(
    <>
    <GlobalStyle/>
    <Header/>
    </>
  )
}
