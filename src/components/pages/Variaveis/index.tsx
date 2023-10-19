import { useState } from "react";
import ReusableButton from "../../atoms/Buttons/ButtonDefault";
import { InsertVariable } from "../../molecules/modal/InsertVariable";
import { RemoveVariable } from "../../molecules/modal/RemoveVariable";
import Header from "../../organisms/Header";
import TemplateMatch from "../../template/Match/templateMatch";
import { Container, ContainerButton, ContainerValor, ContainerVariaveis, TitleVariaveis } from "./styles";

const Variaveis = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenOne, setIsOpenOne] = useState(false)

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const openModalOne = () => {
        setIsOpenOne(true);
    };

    const closeModalOne = () => {
        setIsOpenOne(false);
    };


    return (
        <>
            <TemplateMatch title="Variáveis" >
                <Header />
                <Container>
                    <ContainerVariaveis>
                        <TitleVariaveis> Variável </TitleVariaveis>
                    </ContainerVariaveis>

                    <ContainerValor>
                        <TitleVariaveis> Valor </TitleVariaveis>
                    </ContainerValor>
                    <ContainerButton>
                        <ReusableButton color="#90D74A" title="Criar Variavel" onClick={openModal} />
                        <ReusableButton color="#E91C1C" title="Remover Variável" onClick={openModalOne} />
                        <ReusableButton color="#90D74A" title="Criar Valor" onClick={() => { }} />
                        <ReusableButton color="#E91C1C" title="Remover Valor" onClick={() => { }} />
                    </ContainerButton>
                </Container>

            </TemplateMatch>
            RemoveVariable
            {isOpen && <InsertVariable isOpen={isOpen} closeModal={closeModal} />}
            {isOpenOne && <RemoveVariable isOpenOne={isOpenOne} closeModalOne={closeModalOne} />}

        </>
    )
}

export default Variaveis;