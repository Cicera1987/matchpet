import ButtonModal from "../../../atoms/Buttons/ButtonModal";
import { Container, ContainerButton, ContainerFixed, ContainerModal, InputVariable, InputValue, RadioLabel, RadioInput, ContainerRadio, ContainerInputs, ContainerTitle, Title } from "./styles";
import { FiXCircle } from "react-icons/fi";
import { Overlay } from "../InsertValue/styles";

interface InsertVariableProps {
    isOpenRemoveValue: boolean;
    openModalRemoveValue: () => void;
}

export const RemoveValue = ({ isOpenRemoveValue, openModalRemoveValue }: InsertVariableProps) => {
    return (
        <>
        <ContainerModal>
            <Container>
                <FiXCircle size={30} onClick={openModalRemoveValue} />
                <ContainerFixed>

                    <ContainerInputs>
                        <Title>
                            Variável
                            <span><p>{"VAR1"}</p></span>
                        </Title>
                        <ContainerTitle>
                            Valor
                            <InputValue type="text" placeholder="Informe o valor" />
                        </ContainerTitle>
                    </ContainerInputs>

                    <ContainerRadio>
                        <RadioLabel>
                            <RadioInput type="radio" name="variableType" value="numerica" />
                            Numérica
                        </RadioLabel>
                        <RadioLabel>
                            <RadioInput type="radio" name="variableType" value="multivalorada" />
                            Multivalorada
                        </RadioLabel>
                        <RadioLabel>
                            <RadioInput type="radio" name="variableType" value="univalorada" />
                            Univalorada
                        </RadioLabel>
                    </ContainerRadio>

                    <ContainerButton>
                        <ButtonModal color="#E91C1C" title="Remover" onClick={() => { }} />
                        <ButtonModal color="#90D74A" title="Adicionar" onClick={() => { }} />
                    </ContainerButton>

                </ContainerFixed>
            </Container>
        </ContainerModal>
        <Overlay/>
        </>
    );
};
