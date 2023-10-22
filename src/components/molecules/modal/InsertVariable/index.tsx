import ButtonModal from "../../../atoms/Buttons/ButtonModal";
import { Container, ContainerButton, ContainerFixed, ContainerModal, InputVariable, InputValue, RadioLabel, RadioInput, ContainerRadio, ContainerInputs, ContainerTitle } from "./styles";
import { FiXCircle } from "react-icons/fi";
import { Overlay } from "../InsertValue/styles";
import { useState } from "react";

interface InsertVariableProps {
    isOpenInsert: boolean;
    openModalInsert: () => void;
    CreateVariable: (Promise: any) => void;
}


export const InsertVariable = ({ isOpenInsert, openModalInsert, CreateVariable }: InsertVariableProps) => {

    const [name, setName] = useState('')

    return (
        <>
            <ContainerModal>
                <Container>
                    <FiXCircle size={30} onClick={openModalInsert} />
                    <ContainerFixed>

                        <ContainerInputs>
                            <ContainerTitle>
                                Variável
                                <InputVariable
                                    type="text"
                                    placeholder="Digite a variável"
                                    value={name}
                                    onChange={(e: any) => setName(e.target.value)}
                                />
                            </ContainerTitle>
                            
                        </ContainerInputs>

                        <ContainerRadio>
                            <RadioLabel>
                                <RadioInput disabled={true} type="radio" name="variableType" value="numerica" />
                                Numérica
                            </RadioLabel>
                            <RadioLabel>
                                <RadioInput disabled={true} type="radio" name="variableType" value="multivalorada" />
                                Multivalorada
                            </RadioLabel>
                            <RadioLabel>
                                <RadioInput disabled={true} type="radio" name="variableType" value="univalorada" />
                                Univalorada
                            </RadioLabel>
                        </ContainerRadio>

                        <ContainerButton>
                            <ButtonModal color="#E91C1C" title="Remover" onClick={() => { }} />
                            <ButtonModal
                                color="#90D74A"
                                title="Adicionar"
                                onClick={() => {
                                    const updatedPayload = {
                                        name: name,
                                    };
                                    CreateVariable({ payload: updatedPayload });
                                }}
                            />
                        </ContainerButton>

                    </ContainerFixed>
                </Container>
            </ContainerModal>
            <Overlay />
        </>
    );
};


