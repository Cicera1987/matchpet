import ButtonModal from "../../../atoms/Buttons/ButtonModal";
import { 
    Container, 
    ContainerButton, 
    ContainerFixed, 
    ContainerModal, 
    InputVariable, 
    InputValue, 
    RadioLabel, 
    RadioInput, 
    ContainerRadio, 
    ContainerTitle, 
    Overlay, 
    TitleRegras, 
    TitleHeader, 
    Containervalidate, 
    ContainerFixedInput, 
    ContainerInputs, 
    ContainerResult, 
    ContainerButtonsValidate, 
    Button} from "./styles";

import { FiXCircle } from "react-icons/fi";
import ButtonRules from "../../../atoms/Buttons/ButtonRules";

interface InsertVariableProps {
    isOpen: boolean;
    openModal: () => void;
}

import { InputVariables } from "../../../atoms/Inputs/InputVariables";

export const ModalRegras = ({ isOpen, openModal }: InsertVariableProps) => {
    return (
        <>
            <ContainerModal>
                <Container>
                    <TitleHeader>
                        <TitleRegras>Regra ID: Nome</TitleRegras>
                        <FiXCircle size={30} onClick={openModal} />
                    </TitleHeader>
                    <ContainerFixed>
                        <Containervalidate>
                            <ButtonRules Bcolor="#FFFFFF" title="SE" onClick={() => { }} />

                            <ContainerFixedInput>
                                <InputVariables
                                    title={"Variável"}
                                    options={["Variável 1", "Variável 2", "Variável 3"]}
                                    onChange={() => { }}
                                />
                                <ContainerButtonsValidate>
                                    <h2>=</h2>
                                    <Button >&&</Button>
                                </ContainerButtonsValidate>
                                <InputVariables
                                    title={"Valor"}
                                    options={["Valor 1", "Valor 2", "Valor 3"]}
                                    onChange={() => { }}
                                />
                            
                                <InputVariables
                                    title={"Variável"}
                                    options={["Variável 1", "Variável 2", "Variável 3"]}
                                    onChange={() => { }}
                                />
                                <ContainerButtonsValidate>
                                    <h2>=</h2>
                                    <Button>| |</Button>
                                </ContainerButtonsValidate>
                              
                                <InputVariables
                                    title={"Valor"}
                                    options={["Valor 1", "Valor 2", "Valor 3"]}
                                    onChange={() => { }}
                                />
                              
                                <InputVariables
                                    title={"Variável"}
                                    options={["Variável 1", "Variável 2", "Variável 3"]}
                                    onChange={() => { }}
                                />
                                <h2>=</h2>
                                <InputVariables
                                    title={"Valor"}
                                    options={["Valor 1", "Valor 2", "Valor 3"]}
                                    onChange={() => { }}
                                />
                            </ContainerFixedInput>
                        </Containervalidate>
                        <Containervalidate>
                            <ButtonRules Bcolor="#FFFFFF" title="ENTÃO" onClick={() => { }} />
                            <ContainerFixedInput>
                               <ContainerResult>
                                <h2>Rescultado  =  {} </h2>
                               </ContainerResult>
                            </ContainerFixedInput>
                        </Containervalidate>
                    </ContainerFixed>

                    <ContainerButton>
                        <ButtonModal color="#255111" title="Incluir" onClick={() => { }} />
                        <ButtonModal color="#F9D34C" title="Alterar" onClick={() => { }} />
                        <ButtonModal color="#E91C1C" title="Cancelar" onClick={openModal} />
                        <ButtonModal color="#90D74A" title="Salvar" onClick={() => { }} />
                    </ContainerButton>

                </Container>
            </ContainerModal>
            <Overlay />
        </>
    );
};
