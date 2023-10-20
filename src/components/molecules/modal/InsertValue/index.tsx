import ButtonModal from "../../../atoms/Buttons/ButtonModal";
import { Container, ContainerButton, ContainerFixed, ContainerModal, InputVariable, InputValue, RadioLabel, RadioInput, ContainerRadio, ContainerInputs, ContainerTitle, Overlay } from "./styles";
import { FiXCircle } from "react-icons/fi";

interface InsertVariableProps {
    isOpenValue: boolean;
    openModalInsertValue: () => void;
}

export const InsertValue = ({ isOpenValue, openModalInsertValue }: InsertVariableProps) => {
    return (
        <>
        <ContainerModal>
            <Container>
                <FiXCircle size={30} onClick={openModalInsertValue}/>
                <ContainerFixed>

                    <ContainerInputs>
                        <ContainerTitle>
                            Variável
                            <InputVariable type="text" placeholder="Selecionar" />
                        </ContainerTitle>
                        <ContainerTitle>
                            Valor
                            <InputValue type="text" placeholder="Infome o valor" />
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
