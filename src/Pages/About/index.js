import React from "react";
import * as S from "./style";
import Photo1 from "./img/photo.about.jpg";
import Photo2 from "./img/photo.about(2).jpg";

export default function About() {
  return (
    <S.Container>
      <S.Title>Quem é <S.Span>Mariana Melo</S.Span>?</S.Title>
      <div>
        <S.Photo src={Photo1}/>
        <S.BoxInfo>
          <S.Paragraph>
            Bom, quem sou eu? Sou uma jovem de 18 anos, vindo diretamente de
            Santa Cruz, Zona Oeste da cidade do Rio de Janeiro! Sempre muito
            ambiciosa, criativa e corajosa! Quando me deparei com a programação,
            em 2021, me apaixonei e decidi investir nesta área.
          </S.Paragraph>
        </S.BoxInfo>
      </div>
      <S.Box>
        <S.Photo2 src={Photo2}/>
        <S.BoxInfo2>
          <S.Paragraph>
            Inicialmente, me formei como técnica administrativa, porém, hoje,
            além de me dedicar a programação, curso Ensino Superior em
            Geografia, na UERJ, e busco me especializar cada vez mais na área da
            tecnologia e da educação, duas paixões minhas.
          </S.Paragraph>
        </S.BoxInfo2>
      </S.Box>
    </S.Container>
  )
}
