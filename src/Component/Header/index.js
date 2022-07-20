import React from "react";
import * as S from "./style";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home/index"
import About from "../../Pages/About/index"
import Works from "../../Pages/Works/index"

export default function Header() {
  return (
    <Router>
      <S.Navbar>
        <S.List>
          <S.ItemList>
            <S.Anchor to="/">HOME</S.Anchor>
          </S.ItemList>
          <S.ItemList>
            <S.Anchor to="/about">ABOUT</S.Anchor>
          </S.ItemList>
          <S.ItemList>
            <S.Anchor to="/works">WORKS</S.Anchor>
          </S.ItemList>
        </S.List>
      </S.Navbar>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/works" element= {<Works/>}/>
      </Routes>
    </Router>
  );
}
