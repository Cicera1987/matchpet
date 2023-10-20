import styled from "styled-components";
export const Container = styled.div`
  width: 80%;
  height: 80%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 1rem;
`;

export const ContainerVariaveis = styled.div`
  width: 250px;
  height: 480px;
  border: solid 3px #D9D9D9;
  border-radius: 10px;
  padding: 1rem;
`;

export const ContainerValor = styled.div`
  width: 250px;
  height: 480px;
  border: solid 3px #D9D9D9;
  border-radius: 10px;
  padding: 1rem;
`;

export const ContainerButton = styled.div`
    width: 180px;
    height: 480px;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2em;
`;

export const TitleVariaveis = styled.h4`
  font-size: 1.3rem;
  font-weight: 500;
  color: #000000;
  top: 0;
  margin-top: auto;
`;
