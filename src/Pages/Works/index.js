import React from "react";
import * as S from "./style";
import ToDoFlix from "./img/ToDoFlix.png";
import BeHappy from "./img/BeHappy.png";
import Calculadora from "./img/Calculadora.png";
import XFilmes from "./img/xfilmes.png";
import Timer from "./img/Timer.png";
import FridaKhalo from "./img/Frida-Kahlo.png";
import StarWars from "./img/Star-Wars.png";
import ODS from "./img/ods.png"

export default function Works() {
  const project = [
    {
      title: "Santa Cruz: ODS",
      url: "https://askmary.github.io/ods/",
      img: ODS,
      description:
        "Projeto criado com a proposta de desenvolver um site que relacionasse os Objetivos de Desenvolvimento Sustentáveis com meu bairro, Santa Cruz.",
    },
    {
      title: "ToDoFlix",
      url: "https://askmary.github.io/ToDoFlix/",
      img: ToDoFlix,
      description:
        "Projeto criado a fim de criar uma espécie de 'Netflix' onde é possível listar filmes já asisstidos, os que irão ser assistidos e os classificar.",
    },
    {
      title: "Be Happy",
      url: "https://askmary.github.io/Be-Happy/",
      img: BeHappy,
      description:
        "Este site foi desenvolvido com o objetivo de treinar o uso de API com React Hooks e é capaz de deixar seu dia mais feliz.",
    },
    {
      title: "Timer",
      url: "https://askmary.github.io/Timer/",
      img: Timer,
      description: "Este site é um cronômetro que conta os minutos e segundos.",
    },
    {
      title: "Calculadora",
      url: "https://askmary.github.io/Calculadora/",
      img: Calculadora,
      description:
        "Este site é uma calculadora, e foi criado a fim de treinar o uso do setState.",
    },
    {
      title: "Frida Khalo",
      url: "https://askmary.github.io/Frida-Kahlo/",
      img: FridaKhalo,
      description:
        "Este site foi desenvolvido a fim de homemagear uma artista importantíssima, Frida Khalo. Projeto para treinar HTML e CSS.",
    },
    {
      title: "Star Wars",
      url: "https://askmary.github.io/Star-Wars/",
      img: StarWars,
      description:
        "Desafio final do Módulo 1 do curso Vai na Web, o site utiliza apenas HTML e CSS, e promove o lançamento do novo jogo de Star Wras",
    },
    {
      title: "X Filmes",
      url: "https://askmary.github.io/xfilmes.com/",
      img: XFilmes,
      description:
        "Neste site você pode encontrar os filmes e séries mais populares no momento. Projeto criado a fim de treinar o uso de API com React.",
    },
  ];
  return (
    <S.Container>
      <S.H1>Portifólio</S.H1>
      {project.map((item) => (
        <a href={item.url}>
          <S.Box>
            <S.Photo>
              <S.Img src={item.img} />
            </S.Photo>
            <S.Text>
              <S.Title>{item.title}</S.Title>
              <S.Description>{item.description}</S.Description>
            </S.Text>
          </S.Box>
        </a>
      ))}
    </S.Container>
  );
}
