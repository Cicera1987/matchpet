import styled from "styled-components";

export const ContainerModal = styled.div<{ width?: string }>`
  width: ${({ width }) => (width ? width : '50em')};
  height: 450px;
  border-radius: 16px;
  background-color: #FFFFFF;
  position: absolute;
  display: flex;
  padding-top: 1em;
  top: 60%;
  left: 40%;
  transform: translate(-24%, -50%);
  z-index: 10;
  fill: #000000 50% ;
  box-shadow: 0px 5px 10px 10px #BCB8B1;
`

export const Container = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

 
`;
export const ContainerFixed = styled.div`
    width: 90%;
    height: 70%;
    border: 2px solid #BCB8B1;
    border-radius: 10px;
    -webkit-box-shadow: inset 0px 0px 5px 0px #BCB8B1;
    -moz-box-shadow: inset 0px 0px 5px 0px #BCB8B1;
    box-shadow: inset 0px 0px 5px 0px #BCB8B1;
    top: 0;
    margin-top: -1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
`

export const Containervalidate = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1em;

    h1{
        font-size: 25px;
        font-weight: 700;
        color: red;
        margin-top: 0;
    }
`


export const ContainerButton = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-end;
    justify-content: space-around;
    padding-top: 1em;
    align-items: center;
    gap: 1em;
`;
export const InputVariable = styled.input`
  width: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 10px;

`;

export const InputValue = styled.input`
  width: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 10px;
`;
export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px; 
 
`;

export const RadioInput = styled.input`
  margin-right: 5px;
 
 
`;

export const ContainerRadio = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
    font-weight: 700;
    margin-bottom: 10px;
`

export const ContainerTitle = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-size: 25px;
    font-weight: 700;


`
export const TitleRegras = styled.p`
    font-size: 22px;
    font-weight: 700;
    color: #000000;
    top: 0;
`;

export const TitleHeader = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    align-items: center;
    text-align: center;

  > svg {
    cursor: pointer;
    background-color: #353535;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #D9D9D9;
  }

`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  overflow: auto;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 5;
`
export const ContainerFixedInput = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-wrap: wrap; 
    align-items: flex-start;
    justify-content: space-between;
`;



export const ContainerInputs = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

`

export const ContainerResult = styled.div`
    width: 100%;
    height: 40px;
    background-color: #BCB8B1;
    border-radius: 10px;

    h2{
        font-size: 20px;
        font-weight: 700;
        color: #353535;
        top: 0;
        margin-left: 10px;
        margin-top: 10px;
    }

`

export const ContainerButtonsValidate = styled.div`
    width: 2em;
    padding:2em 0em 0em 0em;
    height: 20%;
    gap: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #000000;
  

`

export const Button = styled.button`
  width: 40px;
  height: 20px;
  border: none;
  background-color: #FFFFFF;
  color: #000000;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  margin-bottom: 2px;

  &:hover {
    color:  #BCB8B1;
  }
`

