import { useEffect, useState } from "react";
import api from "../../../api";
import { routes } from "../../../router";
import ReusableButton from "../../atoms/Buttons/ButtonDefault";
import { InsertValue } from "../../molecules/modal/InsertValue";
import { InsertVariable } from "../../molecules/modal/InsertVariable";
import { RemoveValue } from "../../molecules/modal/RemoveValue";
import { RemoveVariable } from "../../molecules/modal/RemoveVariable";
import Header from "../../organisms/Header";
import TemplateMatch from "../../template/Match/templateMatch";
import { Container, ContainerButton, ContainerValor, ContainerValues, ContainerVariaveis, TitleValues, TitleVariaveis } from "./styles";

export interface Payload {
    id: number;
    name: string;
    values: PayloadRules[];
    
}

export interface PayloadRules {
        id: number;
        name: string;
        type: string;
        id_variable: number;
    }


const Variaveis = () => {
    const [isOpenInsert, setIsOpenInsert] = useState(false)
    const [isOpenRemove, setIsOpenRemove] = useState(false)
    const [isOpenValue, setIsOpenValue] = useState(false)
    const [isOpenRemoveValue, setIsOpenRemoveValue] = useState(false)
    const [variables, setVariables] = useState<Payload[]>([])
    const [rules, setRules] = useState<PayloadRules[]>([])

   
    function generateNumericValues() {
        const values = [];
        for (let i = 10; i <= 100; i += 10) {
            values.push({
                id: i,
                name: i.toString()
            });
        }
        return values;
    }

    function generateMultivaluedValues() {
        const values = [
            { id: 1, name: "Réptil" },
            { id: 2, name: "Felino" },
            { id: 3, name: "Canino" },
            { id: 4, name: "Oviparo" },
            { id: 5, name: "Roedor" }
        ];
        return values;
    }

    function generateUnivaluedValue(valueName:string, id:number) {
        return [{ id: id, name: valueName }];
    }

    const openModalInsert = () => {
        setIsOpenInsert((prev) => !prev);
    };

    const openModalRemove = () => {
        setIsOpenRemove((prev) => !prev);
    };
    const openModalInsertValue = () => {
        setIsOpenValue((prev) => !prev);
    };

    const openModalRemoveValue = () => {
        setIsOpenRemoveValue((prev) => !prev);
    };

    const fetchVariables = async ({ limit, page }: any) => {
        try {
            const { data } = await api.get(routes.variaveis.list, {
                params: {
                    limit,
                    page
                }
            });
            setVariables(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    async function CreateVariable({ payload }: { payload: Payload }) {
        try {

            const response = await api.post(routes.variaveis.postVariables, {
                id: payload.id,
                name: payload.name,
                
            });
            if (response.status === 200) {
                const { data } = response;
                setVariables(data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    async function CreateRules({ payload }: { payload: PayloadRules }) {
        try {

            let values = [];

            if (payload?.type === "numerica") {
                values = generateNumericValues();
            } else if (payload?.type === "multivalorada") {
                values = generateMultivaluedValues();
            } else if (payload?.type === "univalorada") {
                values = generateUnivaluedValue(payload.name, payload.id_variable);
            }

            const response = await api.put(routes.variaveis.addValue, {
                name: payload?.name,
                id_variable: payload?.id_variable,
                type: payload?.type
                
            });
            if (response.status === 200) {
                const { data } = response;
                setRules(data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    useEffect(() => {
        fetchVariables({
            limit: 1000,
            page: 1
        });
    }, []);

    return (
        <>
            <TemplateMatch title="Variáveis">
                <Header />
                <Container>
                    <ContainerVariaveis>
                        <TitleVariaveis> Variável </TitleVariaveis>
                        {Array.isArray(variables) ? (
                            variables.map((variable) => (
                                <ContainerValues key={variable.id}>
                                    <TitleValues>{variable.name}</TitleValues>
                                </ContainerValues>
                            ))
                        ) : (
                            ''
                        )}
                    </ContainerVariaveis>
                    <ContainerValor>
                        <TitleVariaveis> Valor </TitleVariaveis>
                                <ContainerValues>  
                                        <TitleValues></TitleValues>                             
                                </ContainerValues>
                    </ContainerValor>
                    <ContainerButton>
                        <ReusableButton color="#90D74A" title="Criar Variavel" onClick={openModalInsert} />
                        <ReusableButton color="#E91C1C" title="Remover Variável" onClick={openModalRemove} />
                        <ReusableButton color="#90D74A" title="Criar Valor" onClick={openModalInsertValue} />
                        <ReusableButton color="#E91C1C" title="Remover Valor" onClick={openModalRemoveValue} />
                    </ContainerButton>
                </Container>
            </TemplateMatch>
            {isOpenInsert && <InsertVariable isOpenInsert={isOpenInsert} openModalInsert={openModalInsert} CreateVariable={CreateVariable} />}
            {isOpenRemove && <RemoveVariable isOpenRemove={isOpenRemove} openModalRemove={openModalRemove} />}
            {isOpenValue && <InsertValue isOpenValue={isOpenValue} openModalInsertValue={openModalInsertValue} variables={variables} CreateRules={CreateRules} />}
            {isOpenRemoveValue && <RemoveValue isOpenRemoveValue={isOpenRemoveValue} openModalRemoveValue={openModalRemoveValue} />}
        </>
    );
};

export default Variaveis;
