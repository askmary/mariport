import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const H1 = styled.h1`
  font-size: 3rem;
  color: #ff3030;
`;
export const Box = styled.div`
  border: 3px solid #ff3030;
  background: #ff3030;
  width: 60vw;
  height: 40vh;
  border-radius: 15px;
  display: flex;
  overflow: hidden;
  margin-top: 2em;
`;
export const Photo = styled.div`
  width: 60%;
  border-right: 2px dashed white;
`;
export const Img = styled.img`
  width: 100%;
  height: 40vh;
`;
export const Text = styled.div`
  width: 40%;
`;
export const Description = styled.p`
  font-size: 1.5rem;
  text-decoration: none;
  padding: 20px;
`;
export const Title = styled.h1`
  text-align: center;
  padding-top: 10px;
`;
