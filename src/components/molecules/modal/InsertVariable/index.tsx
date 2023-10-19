import ButtonModal from "../../../atoms/Buttons/ButtonModal";
import { Container, ContainerButton, ContainerFixed, ContainerModal, InputVariable, InputValue, RadioLabel, RadioInput, ContainerRadio, ContainerInputs, ContainerTitle } from "./styles";
import { FiXCircle } from "react-icons/fi";

interface InsertVariableProps {
    isOpen: boolean;
    closeModal: () => void;
}

export const InsertVariable = ({ isOpen, closeModal }: InsertVariableProps) => {
    return (
        <ContainerModal>
            <Container>
                <FiXCircle size={30} onClick={closeModal} />
                <ContainerFixed>

                    <ContainerInputs>
                        <ContainerTitle>
                            Variável
                            <InputVariable type="text" placeholder="Digite a variável" />
                        </ContainerTitle>
                        <ContainerTitle>
                            Valor
                            <InputValue type="text" placeholder="Digite o valor" />
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
    );
};
