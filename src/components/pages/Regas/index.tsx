import { useState } from "react";
import ReusableButton from "../../atoms/Buttons/ButtonDefault";
import { ModalRegras } from "../../molecules/modal/ModalRegras";
import Header from "../../organisms/Header";
import TemplateMatch from "../../template/Match/templateMatch";
import { Container, ContainerButton, ContainerRegras, ContainerValueRegra, TitleRegras } from "./styles";

const Regras = () => {
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen((prev) => !prev);
    }



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