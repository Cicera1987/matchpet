import Header from "../../organisms/Header";
import TemplateMatch from "../../template/Match/templateMatch";
import { Container, ContainerVisualizar } from "./styles";

const Visualizar = () => {
    return (
        <TemplateMatch title="Visualizar" >
            <Header />
            <Container>
                <ContainerVisualizar>

                </ContainerVisualizar>
                
            </Container>
        </TemplateMatch>


    )
}

export default Visualizar;