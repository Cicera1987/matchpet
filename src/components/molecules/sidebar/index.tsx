import SidebarItem from "../SidebarItem";
import { Container, Content, Title } from "./styles";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <Container >
      
            <Title>MatchPet</Title>
            <Content>
                <div onClick={() => navigate("/regras")}>{<SidebarItem title="Regra" />}</div>
                <div onClick={() => navigate("/variaveis")}>{<SidebarItem title="Variaveis" />}</div>
                <div onClick={() => navigate("/visualizar")}>{<SidebarItem title="Visualizar" />}</div>
                <div onClick={() => navigate("/interface")}>{<SidebarItem title="Interface" />} </div>
            </Content>
        </Container>
    );
};

export default Sidebar;
