import { Container, TemplateProps, Title } from "./style";

const TemplateMatch: React.FC<TemplateProps> = ({ title, children }) => {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    );
};

export default TemplateMatch;