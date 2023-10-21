import { useEffect, useState } from "react";
import api from "../../../api";
import { routes } from "../../../router";
import ReusableButton from "../../atoms/Buttons/ButtonDefault";
import { ModalRegras } from "../../molecules/modal/ModalRegras";
import Header from "../../organisms/Header";
import TemplateMatch from "../../template/Match/templateMatch";
import { Container, ContainerButton, ContainerRegras, ContainerValueRegra, TitleRegras } from "./styles";

const Regras = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [regras, setRegras] = useState([]);
    console.log('regras: ', regras);

    function openModal() {
        setIsOpen((prev) => !prev);
    }

    async function fetchRegras() {
        try {
            const response = await api.get(routes.regras.list);
            console.log("Response:", response);
            setRegras(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        fetchRegras();
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