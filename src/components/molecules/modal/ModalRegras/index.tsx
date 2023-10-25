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
    ContainerButtonsValidate,
    Button
} from "./styles";
import { FiXCircle } from "react-icons/fi";
import ButtonRules from "../../../atoms/Buttons/ButtonRules";
import api from '../../../../api/index'
import { routes } from '../../../../router/index'
import { InputVariables, Option } from "../../../atoms/Inputs/InputVariables";
import { useCallback, useState, useEffect } from "react";
import { Payload } from "../../../pages/Regras";

interface InsertVariableProps {
    isOpen: boolean;
    openModal: () => void;
    fetchRegras({ limit, page }: any): Promise<void>
    regras: Payload[]
    selectedRule: Payload | null
}

interface IConditions {
    id: number;
    operator: string
    value: string
    type: string;
    id_rule: number
    id_variable: number;
}

export const ModalRegras = ({ isOpen, openModal, fetchRegras, regras, selectedRule }: InsertVariableProps) => {
    const [data, setData] = useState<Option[]>([])
    const rule = regras.length > 0 ? regras[regras.length - 1].id : 1
    const [allValues, setAllValues] = useState<any[]>([])
    const [lastID, setLastId] = useState<number>(rule)



    const newdata = data.filter((item) => item.label !== "Animal")
        .map((props: any) => ({ label: props.label, value: props.value }))
    const newdataAnimaL = data.filter((item) => item.label === "Animal")
        .map((props: any) => ({ label: props.label, value: props.value }))

    const [form, setForm] = useState<Record<string, any>>({})


    function BuilderCondition(operator: string, valor: string, type: 'IF' | 'THEN', id_variable: string) {
        return {
            operator: operator,
            value: valor,
            type: type,
            id_rule: lastID + 1,
            id_variable: Number(id_variable)
        } as IConditions
    }

    function BuilderConditionUpdate(operator: string, valor: string, type: 'IF' | 'THEN', id_variable: string) {
        return {
            operator: operator,
            value: valor,
            type: type,
            id_rule: lastID,
            id_variable: Number(id_variable)
        } as IConditions
    }

    function constructorPayload(form: Record<string, any>) {
        const arr = []

        for (var i = 1; i < 5; i++) {
            if (i == 4) {
                arr.push(BuilderCondition(form[`operator${i}`], form[`valuevariable${i}`], 'THEN', form[`variable${i}`]))
                break
            }
            if (form.hasOwnProperty(`operator${i}`) && form.hasOwnProperty(`valuevariable${i}`) && form.hasOwnProperty(`variable${i}`)) {
                let temp = BuilderCondition(form[`operator${i}`], form[`valuevariable${i}`], 'IF', form[`variable${i}`])
                arr.push(temp)
            }
        }

        return arr
    }

    function constructorPayloadUpdate(form: Record<string, any>) {
        const arr = []

        for (var i = 1; i < 5; i++) {
            if (i == 4) {
                arr.push(BuilderConditionUpdate(form[`operator${i}`], form[`valuevariable${i}`], 'THEN', form[`variable${i}`]))
                break
            }
            if (form.hasOwnProperty(`operator${i}`) && form.hasOwnProperty(`valuevariable${i}`) && form.hasOwnProperty(`variable${i}`)) {
                let temp = BuilderConditionUpdate(form[`operator${i}`], form[`valuevariable${i}`], 'IF', form[`variable${i}`])
                arr.push(temp)
            }
        }

        return arr
    }


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



    async function CreateRules(name: string, form: Record<string, any>) {
        const Conditionals = constructorPayload(form)

        try {
            await api.post(routes.regras.postRules, {
                name: form.valuevariable4,
                Condition: Conditionals
            });
            return fetchRegras({ limit: 1000, page: 1 })
        } catch (error) {
            console.error("Error:", error);
        }

    }

    async function handleUpdateRule(name: string, form: Record<string, any>) {

        const Conditionals = constructorPayloadUpdate(form)
        if (selectedRule?.id) {
            try {
                await api.put(routes.regras.updateRule(Number(selectedRule.id)), {
                    idRule: selectedRule.id,
                    name: form.valuevariable4,
                    Condition: Conditionals
                });
                return fetchRegras({ limit: 1000, page: 1 })

            } catch (error) {
                console.error('Erro ao atualizar a regra:', error);
            }
        }

    }


    function resolveMatriz(mtx: any[][]) {
        let arr = []
        for (let i = 0; i < mtx.length; i++) {
            for (let j = 0; j < mtx[i].length; j++) {
                arr.push(mtx[i][j])
            }
        }
        return arr
    }

    useEffect(() => {
        Fetch(1, 100)
    }, [])


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
                                <>
                                    <InputVariables
                                        title={"Selecione"}
                                        options={newdata}
                                        handleChange={(e) => setForm({ ...form, variable1: e.target.value })}
                                    />
                                    <ContainerButtonsValidate>
                                        <h2>=</h2>
                                        <Button value="&&" onClick={(e: any) => setForm({ ...form, operator1: '&&' })}>&&</Button>
                                        <Button value="||" onClick={(e: any) => setForm({ ...form, operator1: '||' })} >||</Button>
                                        <Button value="||" onClick={(e: any) => setForm({ ...form, operator1: '' })} >Nenhum</Button>
                                    </ContainerButtonsValidate>
                                    <InputVariables
                                        title={"Selecione"}
                                        options={allValues.filter((item) => item.id_variable === Number(form.variable1)).map((item) => ({ label: item.name, value: item.name }))}
                                        handleChange={(e) => setForm({ ...form, valuevariable1: e.target.value })}
                                    />
                                </>

                                <>
                                    <InputVariables
                                        title={"Selecione"}
                                        options={newdata}
                                        handleChange={(e) => setForm({ ...form, variable2: e.target.value })}
                                    />

                                    <ContainerButtonsValidate>
                                        <h2>=</h2>
                                        <Button value="&&" onClick={(e: any) => setForm({ ...form, operator2: '&&' })}>&&</Button>
                                        <Button value="||" onClick={(e: any) => setForm({ ...form, operator2: '||' })} >||</Button>
                                        <Button value="||" onClick={(e: any) => setForm({ ...form, operator2: '' })} >Nenhum</Button>
                                    </ContainerButtonsValidate>

                                    <InputVariables
                                        title={"Selecione"}
                                        options={allValues.filter((item) => item.id_variable === Number(form.variable2)).map((item) => ({ label: item.name, value: item.name }))}
                                        handleChange={(e) => setForm({ ...form, valuevariable2: e.target.value })}
                                    />
                                </>
                                <>
                                    <InputVariables
                                        title={"Selecione"}
                                        options={newdata}
                                        handleChange={(e) => setForm({ ...form, variable3: e.target.value })}
                                    />
                                    <h2>=</h2>
                                    <InputVariables
                                        title={"Selecione"}
                                        options={allValues.filter((item) => item.id_variable === Number(form.variable3)).map((item) => ({ label: item.name, value: item.name }))}
                                        handleChange={(e) => setForm({ ...form, valuevariable3: e.target.value, operator3: 'nao possui condição' })}
                                    />
                                </>
                            </ContainerFixedInput>
                        </Containervalidate>
                        <Containervalidate>
                            <ButtonRules Bcolor="#FFFFFF" title="ENTÃO" onClick={() => { }} />
                            <ContainerFixedInput>

                                <InputVariables
                                    title={"Selecione"}
                                    options={newdataAnimaL}
                                    handleChange={(e) => setForm({ ...form, variable4: e.target.value })}
                                />
                                <Button value="=">=</Button>
                                <InputVariables
                                    title={"Selecione"}
                                    options={allValues.filter((item) => item.id_variable === Number(form.variable4)).map((item) => ({ label: item.name, value: item.name }))}
                                    handleChange={(e) => setForm({ ...form, valuevariable4: e.target.value, operator4: '=' })}
                                />

                            </ContainerFixedInput>
                        </Containervalidate>
                    </ContainerFixed>

                    <ContainerButton>
                        <ButtonModal
                            color="#F9D34C"
                            title="Alterar"
                            onClick={() => {
                                handleUpdateRule("Regras", form)
                                openModal()
                            }}
                        />
                        <ButtonModal
                            color="#E91C1C"
                            title="Cancelar"
                            onClick={openModal} />
                        <ButtonModal
                            color="#90D74A"
                            title="Salvar"
                            onClick={() => {
                                CreateRules('Regra', form)
                                openModal()
                            }
                            }
                        />
                    </ContainerButton>

                </Container>
            </ContainerModal>
            <Overlay />
        </>
    );
};
