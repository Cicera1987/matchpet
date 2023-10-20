import { useState } from "react";
import ReusableButton from "../../atoms/Buttons/ButtonDefault";
import { InsertValue } from "../../molecules/modal/InsertValue";
import { InsertVariable } from "../../molecules/modal/InsertVariable";
import { RemoveValue } from "../../molecules/modal/RemoveValue";
import { RemoveVariable } from "../../molecules/modal/RemoveVariable";
import Header from "../../organisms/Header";
import TemplateMatch from "../../template/Match/templateMatch";
import { Container, ContainerButton, ContainerValor, ContainerValues, ContainerVariaveis, TitleValues, TitleVariaveis } from "./styles";

const Variaveis = () => {
    const [isOpenInsert, setIsOpenInsert] = useState(false)
    const [isOpenRemove, setIsOpenRemove] = useState(false)
    const [isOpenValue, setIsOpenValue] = useState(false)
    const [isOpenRemoveValue, setIsOpenRemoveValue] = useState(false)

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


    return (
        <>
            <TemplateMatch title="Variáveis" >
                <Header />
                <Container>

                    <ContainerVariaveis>
                        <TitleVariaveis> Variável </TitleVariaveis>
                        <ContainerValues>
                            <TitleValues> Raça </TitleValues>
                        </ContainerValues>
                    </ContainerVariaveis>

                    <ContainerValor>
                        <TitleVariaveis> Valor </TitleVariaveis>
                        <ContainerValues>
                            <TitleValues> Cachorro </TitleValues>
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
            RemoveVariable
            {isOpenInsert && <InsertVariable isOpenInsert={isOpenInsert} openModalInsert={openModalInsert} />}
            {isOpenRemove && <RemoveVariable isOpenRemove={isOpenRemove} openModalRemove={openModalRemove} />}
            {isOpenValue && <InsertValue isOpenValue={isOpenValue} openModalInsertValue={openModalInsertValue} />}
            {isOpenRemoveValue && <RemoveValue isOpenRemoveValue={isOpenRemoveValue} openModalRemoveValue={openModalRemoveValue} />}

        </>
    )
}

export default Variaveis;