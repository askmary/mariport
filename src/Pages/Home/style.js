import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 34em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Social = styled.div`
  width: 6em;
  height: 25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const Img = styled.img`
  width: 4em;
  cursor: pointer;
  transition: 1s all;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Text = styled.div`
  width: 44%;
`;
export const Title = styled.h1`
  font-size: 7rem;
  letter-spacing: 15px;
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @-webkit-keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
export const Title2 = styled.h1`
  font-size: 7rem;
  width: 40%;
  letter-spacing: 15px;
`;
export const Span = styled.span`
  color: #ff3030;
`;
export const BoxImg = styled.figure`
  width: 25vw;
  height: 55vh;
  border-radius: 80%;
  background: #ff3030;
`;
export const Photo = styled.img`
  border: #ff3030 3px solid;
  border-radius: 80%;
  width: 25vw;
  height: 55vh;
  object-fit: cover;
`;
