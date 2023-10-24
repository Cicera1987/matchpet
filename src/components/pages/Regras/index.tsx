import { useEffect, useState, useMemo } from "react";
import api from "../../../api";
import { routes } from "../../../router";
import ReusableButton from "../../atoms/Buttons/ButtonDefault";
import { ModalRegras } from "../../molecules/modal/ModalRegras";
import Header from "../../organisms/Header";
import TemplateMatch from "../../template/Match/templateMatch";
import { Container, ContainerButton, ContainerRegras, ContainerValueRegra, TitleRegras } from "./styles";


export interface Payload {
    id: number;
    name: string;
    values: {
        id: number;
        operator: string
        value: string
        type: string;
        id_rule: number
        id_variable: number;
    }[];
}

const Regras = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [regras, setRegras] = useState<Payload[]>([]);

    function openModal() {
        setIsOpen((prev) => !prev);
    }

    async function fetchRegras({ limit, page }: any) {
        try {
            const response = await api.get(routes.regras.list, {
                params: {
                    limit,
                    page
                }
            });
            console.log(response.data);
            setRegras(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchRegras(
            {
                limit: 1000,
                page: 1
            }
        );
    }, [])

    return (
        <>
            <TemplateMatch title="Regras" >
                <Header />
                <Container>
                    <ContainerRegras>
                        {regras.map((item: any) => (
                            <ContainerValueRegra>
                                <TitleRegras>
                                    Regra {item.id}
                                </TitleRegras>
                                <TitleRegras>
                                    {item.name}
                                </TitleRegras>
                            </ContainerValueRegra>
                        ))}
                    </ContainerRegras>
                    <ContainerButton>
                        <ReusableButton color="#90D74A" title="Criar Regra" onClick={openModal} />
                        <ReusableButton color="#F9D34C" title="Editar Regra" onClick={() => { }} />
                    </ContainerButton>
                </Container>
            </TemplateMatch>
            {isOpen && <ModalRegras {...{ isOpen, openModal, fetchRegras, regras}} />}
        </>
    )
}

export default Regras;