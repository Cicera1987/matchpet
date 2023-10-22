import styled from "styled-components";

export const ContainerModal = styled.div<{ width?: string }>`
  width: ${({ width }) => (width ? width : '30em')};
  height: 230px;
  border-radius: 16px;
  background-color: #FFFFFF;
  position: absolute;
  display: flex;
  padding-top: 1em;
  top: 60%;
  left: 45%;
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

  > svg{
    cursor: pointer;
    background-color: #353535;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: #D9D9D9;
  }
`;
export const ContainerFixed = styled.div`
    width: 95%;
    height: 90%;

`
export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
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

export const SelectVariable = styled.select`
  width: 172px;
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
export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90px;
    padding: 1em;
    
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

