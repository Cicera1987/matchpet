import ButtonModal from "../../../atoms/Buttons/ButtonModal";
import { Container, ContainerButton, ContainerFixed, ContainerModal, InputVariable, InputValue, RadioLabel, RadioInput, ContainerRadio, ContainerInputs, ContainerTitle, Overlay, SelectVariable } from "./styles";
import { FiXCircle } from "react-icons/fi";
import { useState } from "react";

interface InsertVariableProps {
    isOpenValue: boolean;
    openModalInsertValue: () => void;
    CreateRules: (Promise: any) => void;
    variables: any;
}
interface Option {
    label: string;
    value: string;
}

export const InsertValue = ({ isOpenValue, openModalInsertValue, CreateRules, variables }: InsertVariableProps) => {
    const [selectedVariable, setSelectedVariable] = useState('');
    const [value, setValue] = useState('');
    const [type, setType] = useState('');



    const options: Option[] = [
        { label: 'Numérica', value: 'Numérica' },
        { label: 'Multivalorada', value: 'Multivalorada' },
        { label: 'Univalorada', value: 'Univalorada' },
    ];


    return (
        <>
            <ContainerModal>
                <Container>
                    <FiXCircle size={30} onClick={openModalInsertValue} />
                    <ContainerFixed>

                        <ContainerInputs>
                            <ContainerTitle>
                                Variável
                                <SelectVariable
                                    name="variable"
                                    id="variable"
                                    placeholder="Selecionar"
                                    value={selectedVariable}
                                    onChange={(e: any) => setSelectedVariable(e.target.value)}
                                >
                                    <option value="" disabled selected>Selecione</option>
                                    {variables.map((variable: any) => (
                                        <option key={variable.id}
                                            value={variable.id}>
                                            {variable.name}
                                        </option>
                                    ))}
                                </SelectVariable>
                            </ContainerTitle>
                            <ContainerTitle>
                                Valor
                                <InputValue
                                    type="text"
                                    placeholder="Infome o valor"
                                    value={value}
                                    onChange={(e: any) => setValue(e.target.value)}
                                />
                            </ContainerTitle>
                        </ContainerInputs>

                        <ContainerRadio>
                            {options.map((option) => (
                                <RadioLabel key={option.value}>
                                    <RadioInput
                                        type="radio"
                                        name="variableType"
                                        value={option.value}
                                        onChange={(e: any) => setType(e.target.value)}
                                    />
                                    {option.label}
                                </RadioLabel>
                            ))}
                        </ContainerRadio>
                        <ContainerButton>
                            <ButtonModal color="#E91C1C" title="Cancelar" onClick={() => openModalInsertValue()} />
                            <ButtonModal
                                color="#90D74A"
                                title="Adicionar"
                                onClick={() => {
                                    const rulesPayload = {
                                        name: value,
                                        type: type,
                                        id_variable: Number(selectedVariable)
                                    }
                                    CreateRules(rulesPayload);
                                    openModalInsertValue()
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
