import ButtonModal from "../../../atoms/Buttons/ButtonModal";
import {
    Container,
    ContainerButton,
    ContainerFixed,
    ContainerModal,
    Overlay,
    TitleRegras,
    TitleHeader,
    Containervalidate,
    ContainerFixedInput,
    ContainerResult,
    ContainerButtonsValidate,
    Button
} from "./styles";

import { FiXCircle } from "react-icons/fi";
import ButtonRules from "../../../atoms/Buttons/ButtonRules";
import api from '../../../../api/index'
import { routes } from '../../../../router/index'

interface InsertVariableProps {
    isOpen: boolean;
    openModal: () => void;
}
import {InputVariables, Option} from "../../../atoms/Inputs/InputVariables";
import {useCallback, useState, useEffect} from "react";

export const ModalRegras = ({ isOpen, openModal }: InsertVariableProps) => {
    const [data, setData] = useState<Option[]>([])
    const [allValues, setAllValues] = useState<any[]>([])
    const [form, setForm] = useState<Record<string, any>>({
        request_01: '',
        request_02: '',
        request_03: '',
    })

    const Fetch = useCallback(async (page: number, limit: number) => {
        const { data } = await api.get(routes.variaveis.list, {
            params: {
                limit: 100,
                page: 1
            }
        })
        setData(data.map((props: any) => ({ label: props.name, value: props.id })))
        setAllValues(resolveMatriz(data.map((props: any) => props.Values)))
    }, [])

    useEffect(() => {
        Fetch(1, 100)
    }, [])

    function resolveMatriz(mtx: any[][]){
        let arr = []
        for(let i = 0; i < mtx.length; i++) {
            for(let j = 0; j < mtx[i].length; j++) {
                arr.push(mtx[i][j])
            }
        }
        return arr
    }    

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
                                    options={data}
                                    handleChange={(e) => setForm({ ...form, question1: e.target.value })}
                                />
                                <ContainerButtonsValidate>
                                    <h2>=</h2>
                                    <Button >&&</Button>
                                </ContainerButtonsValidate>
                                <InputVariables
                                    title={"Valor"}
                                    options={allValues.filter((item) => item.id_variable === Number(form.question1)).map((item) => ({label: item.name, value: item.id}))}
                                />

                                <InputVariables
                                    title={"Variável"}
                                    options={data}
                                    handleChange={(e) => setForm({ ...form, request_02: e.target.value })}
                                />

                                <ContainerButtonsValidate>
                                    <h2>=</h2>
                                    <Button>| |</Button>
                                </ContainerButtonsValidate>

                                <InputVariables
                                    title={"Valor"}
                                    options={allValues.filter((item) => item.id_variable === Number(form.request_02)).map((item) => ({ label: item.name, value: item.id }))}
                                />
                                <InputVariables
                                    title={"Variável"}
                                    options={data}
                                    handleChange={(e) => setForm({ ...form, request_03: e.target.value })}
                                />
                                <h2>=</h2>
                                <InputVariables
                                    title={"Valor"}
                                    options={allValues.filter((item) => item.id_variable === Number(form.request_03)).map((item) => ({ label: item.name, value: item.id }))}
                                />
                            </ContainerFixedInput>
                        </Containervalidate>
                        <Containervalidate>
                            <ButtonRules Bcolor="#FFFFFF" title="ENTÃO" onClick={() => { }} />
                            <ContainerFixedInput>
                                <ContainerResult>
                                    <h2>Rescultado  =  { } </h2>
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
