import styled from "styled-components";

export const Container = styled.div`
   width: 60%;
  height: 80%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 1rem;
`;

export const ContainerRegras = styled.div`
  width: 60%;
  height: 85%;
  border: solid 3px #D9D9D9;
  border-radius: 10px;
  padding: 1rem;

  :hover {
    background-color: #D9D9D9;
  }

    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const ContainerValueRegra = styled.div`
  width: 90%;
  height: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-left: 1rem;
  background-color: #BCB8B1;
  border-radius: 10px;
  padding: 1rem;
`;

export const ContainerButton = styled.div`
    width: 25%;
    height: 90%;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2em;
`;

export const TitleRegras = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: #000000;
    top: 0;
`;
