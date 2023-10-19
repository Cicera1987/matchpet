import { useState } from "react";
import ReusableButton from "../../atoms/Buttons/ButtonDefault";
import { InsertVariable } from "../../molecules/modal/InsertVariable";
import { RemoveVariable } from "../../molecules/modal/RemoveVariable";
import Header from "../../organisms/Header";
import TemplateMatch from "../../template/Match/templateMatch";
import { Container, ContainerButton, ContainerValor, ContainerVariaveis, TitleVariaveis } from "./styles";

const Variaveis = () => {
    const [isOpenInsert, setIsOpenInsert] = useState(false)
    const [isOpenRemove, setIsOpenRemove] = useState(false)

    const openModalInsert = () => {
        setIsOpenInsert((prev) => !prev);
    };

    const openModalRemove = () => {
        setIsOpenRemove((prev) => !prev);
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
                        <ReusableButton color="#90D74A" title="Criar Variavel" onClick={openModalInsert} />
                        <ReusableButton color="#E91C1C" title="Remover Variável" onClick={openModalRemove} />
                        <ReusableButton color="#90D74A" title="Criar Valor" onClick={() => { }} />
                        <ReusableButton color="#E91C1C" title="Remover Valor" onClick={() => { }} />
                    </ContainerButton>
                </Container>

            </TemplateMatch>
            RemoveVariable
            {isOpenInsert && <InsertVariable isOpenInsert={isOpenInsert} openModalInsert={openModalInsert} />}
            {isOpenRemove && <RemoveVariable isOpenRemove={isOpenRemove} openModalRemove={openModalRemove} />}

        </>
    )
}

export default Variaveis;