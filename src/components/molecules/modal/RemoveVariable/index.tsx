import ButtonModal from "../../../atoms/Buttons/ButtonModal";
import { Container, ContainerButton, ContainerFixed, ContainerModal, InputVariable, InputValue, RadioLabel, RadioInput, ContainerRadio, ContainerInputs, ContainerTitle, Title } from "./styles";
import { FiXCircle } from "react-icons/fi";
import { Overlay, SelectVariable } from "../InsertValue/styles";
import { useState } from "react";
import { InputVariables } from "../../../atoms/Inputs/InputVariables";

interface InsertVariableProps {
    isOpenRemove: boolean;
}

export const RemoveVariable = ({ isOpenRemove }: InsertVariableProps) => {
    const [selectedVariable, setSelectedVariable] = useState<number | null>(null);

    return (
        <>
            <ContainerModal>
                <Container>
                    <FiXCircle size={30} onClick={()=> {}} />
                    <ContainerFixed>

                        <ContainerInputs>
                            <Title>
                                Variável
                                <InputVariables
                                    title={"Selecionar"}
                                    options={[]}    
                                    handleChange={(e: any) => setSelectedVariable(e.target.value)}
                                />

                            </Title>
                        </ContainerInputs>
                        <ContainerButton>
                            <ButtonModal color="#E91C1C" title="Remover" onClick={()=>{}} />
                            <ButtonModal color="#90D74A" title="voltar" onClick={()=>{}} />
                        </ContainerButton>
                    </ContainerFixed>
                </Container>
            </ContainerModal>
            <Overlay />
        </>
    );
};
