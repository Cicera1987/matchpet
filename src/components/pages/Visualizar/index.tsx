import { useEffect, useState } from "react";
import api from "../../../api";
import { routes } from "../../../router";
import Header from "../../organisms/Header";
import TemplateMatch from "../../template/Match/templateMatch";
import { Container, ContainerResult, ContainerVisualizar } from "./styles";

export interface Payload {
    id: number;
    name: string;
    Condition: {
        id: number;
        operator: string;
        value: string;
        type: string;
        id_rule: number;
        id_variable: number;
    }[];
}

const Visualizar = () => {
    const [visible, setVisible] = useState<Payload[]>([]);



    async function fetchVisible({ limit, page }: any) {
        try {
            const response = await api.get(routes.regras.list, {
                params: {
                    limit,
                    page
                }
            });
            setVisible(response.data);
        } catch (error) {
            console.error(error);
        }
    }



    useEffect(() => {
        fetchVisible(
            {
                limit: 1000,
                page: 1
            }
        );
    }, [])

    return (
        <TemplateMatch title="Visualizar">
            <Header />
            <Container>
                <ContainerVisualizar>
                    {visible ? (
                        visible.map((item) => (
                            <ContainerResult key={item.id}>
                                <div>    <p>{item.name} <span>{item.id}</span></p> </div>
                                {item.Condition ? (
                                    item.Condition.map((value) => (
                                    
                                        <div key={value.id}>
                                            <div style={{padding: "20px 10px 5px 15px"}}>
                                                <p>Condição {value.id}</p>
                                                </div>
                                            <div>
                                             
                                                <p>{value.operator}</p>
                                            </div>

                                            <div>
                                                
                                                <p> {value.value}</p>
                                            </div>
                                            <div>
                                                <p>{value.type}</p>
                                            </div>


                                        </div>
                                    ))
                                ) : null}
                            </ContainerResult>
                        ))
                    ) : null}

                </ContainerVisualizar>
            </Container>
        </TemplateMatch>


    )
}

export default Visualizar;