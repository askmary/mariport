import React from "react"
import * as S from "./style"
import MyPhoto from "./img/photo.home.png"
import Instagram from "./img/instagram.png"
import LinkdeIn from "./img/linkedin.png"
import WhatsApp from "./img/whatsapp.png" 

export default function Home(){
    return(
            <S.Container>
                <S.Text>
                    <S.Title>Hello<S.Span>.</S.Span></S.Title>
                    <S.Title2>I am Mariana</S.Title2>
                </S.Text>
                <S.BoxImg>
                    <S.Photo src={MyPhoto} alt="Mariana Melo"/>
                </S.BoxImg>
                <S.Social>
                    <a href="https://www.instagram.com/askmary_/" target="_blank">
                    <S.Img src={Instagram} alt="Instagram"/>
                    </a>
                    <a href="https://wa.me/5521980230663" target="_blank">
                    <S.Img src={WhatsApp} alt="WhatsApp"/>
                    </a>
                    <a href="https://www.linkedin.com/in/mariana-melo-79a509218" target="_blank">
                    <S.Img src={LinkdeIn} alt="LinkedIn"/>
                    </a>
                </S.Social>
            </S.Container>
    )
}