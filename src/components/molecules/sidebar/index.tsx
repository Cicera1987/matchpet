import { FaTimes } from "react-icons/fa";
import Home from "../../pages/Home";
import SidebarItem from "../SidebarItem";
import { Container, Content, Title } from "./styles";
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
    active: (isActive: boolean) => void;
    onClose?: () => void;
}

const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <Container >
      
            <Title>MatchPat</Title>
            <Content>
                <div onClick={() => navigate("/regras")}>{<SidebarItem title="Regra" />}</div>
                <div onClick={() => navigate("/variaveis")}>{<SidebarItem title="Variaveis" />}</div>
                <div onClick={() => navigate("/visualizar")}>{<SidebarItem title="Visualizar" />}</div>
            </Content>
        </Container>
    );
};

export default Sidebar;
