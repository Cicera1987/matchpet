import ReusableButton from "../../atoms/Buttons/ButtonDefault";
import Header from "../../organisms/Header";
import TemplateMatch from "../../template/Match/templateMatch";
import { Container, ContainerButton, ContainerRegras, ContainerValueRegra, TitleRegras } from "./styles";

const Regras = () => {
    return (
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
                    <ReusableButton color="#90D74A" title="Criar Regra" onClick={() => { }} />
                    <ReusableButton color="#F9D34C" title="Editar Regra" onClick={() => { }} />
                </ContainerButton>
            </Container>
        </TemplateMatch>


    )
}

export default Regras;