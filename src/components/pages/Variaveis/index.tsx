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
import { generateMultivaluedValues, generateNumericValues, generateUnivaluedValue } from "./logic";
import { Container, ContainerButton, ContainerValor, ContainerValues, ContainerVariaveis, TitleValues, TitleVariaveis } from "./styles";

export interface Payload {
    id: number;
    name: string;
    Values: PayloadRules[];

}

export interface PayloadRules {
    id: number;
    name: string;
    type: string;
    id_variable: number;
}


const Variaveis = () => {
    const [isOpenInsert, setIsOpenInsert] = useState(false)
    const [isOpenValue, setIsOpenValue] = useState(false)
    const [variables, setVariables] = useState<Payload[]>([])
    const [values, setValues] = useState<any[]>()
    const [rules, setRules] = useState<PayloadRules[]>([])

    const openModalInsert = () => {
        setIsOpenInsert((prev) => !prev);
    };
    const openModalInsertValue = () => {
        setIsOpenValue((prev) => !prev);
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
        fetchVariables({ limit: 100, page: 1 })
    }

    async function CreateRules(payload: PayloadRules) {
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
            fetchVariables({limit: 100, page: 1})
        } catch (error) {
            console.error("Error:", error);
        }
        
        fetchVariables({ limit: 100, page: 1 })
    }

    useEffect(() => {
        fetchVariables({ limit: 100, page: 1});
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
                                <ContainerValues key={variable.id} onClick={() => setValues(variable.Values)}>
                                    <TitleValues>{variable.name}</TitleValues>
                                </ContainerValues>
                            ))
                        ) : (
                            ''
                        )}
                    </ContainerVariaveis>
                    <ContainerValor>
                        {
                            values?.map((props) => (
                                <ContainerValues>
                                    <TitleValues>{props.name}</TitleValues>
                                </ContainerValues>
                            ))

                        }
                    </ContainerValor>
                    <ContainerButton>
                        <ReusableButton color="#90D74A" title="Criar Variavel" onClick={openModalInsert} />
                        <ReusableButton color="#F9D34C" title="Criar Valor" onClick={openModalInsertValue} />
                    </ContainerButton>
                </Container>
            </TemplateMatch>
            {isOpenInsert && <InsertVariable isOpenInsert={isOpenInsert} openModalInsert={openModalInsert} CreateVariable={CreateVariable} />}
            {isOpenValue && <InsertValue isOpenValue={isOpenValue} openModalInsertValue={openModalInsertValue} variables={variables} CreateRules={CreateRules} />}
        </>
    );
};

export default Variaveis;
