import { useEffect, useState } from "react";
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
    type: string | null;
    values: {
        id: number;
        name: string;
        type: string;
        id_variable: number;
    }[];
}


const Regras = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [regras, setRegras] = useState([]);
    
    function openModal() {
        setIsOpen((prev) => !prev);
    }

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

    function generateUnivaluedValue(valueName: any) {
        return [{ id: 1, name: valueName }];
    }

    async function fetchRegras({ limit, page }:any) {
        try {
            const response = await api.get(routes.regras.list, {
                params: {
                    limit,
                    page
                }
            });
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
                        <ContainerValueRegra>
                            <TitleRegras>
                                Regra 01
                            </TitleRegras>
                            <TitleRegras>
                                Cachorro
                            </TitleRegras>
                        </ContainerValueRegra>
                    </ContainerRegras>
                    <ContainerButton>
                        <ReusableButton color="#90D74A" title="Criar Regra" onClick={openModal} />
                        <ReusableButton color="#F9D34C" title="Editar Regra" onClick={() => { }} />
                    </ContainerButton>
                </Container>
            </TemplateMatch>

            {isOpen && <ModalRegras isOpen={isOpen} openModal={openModal} />}
        </>
    )
}

export default Regras;