
import { Container } from "./styles";

interface ItemProps {
    title: string;
    link?: () => void;
}

const SidebarItem = ({ title, link }: ItemProps) => {
    return (
        <Container>
            {title}
            {link && (
                <button onClick={link}/>
            )}
        </Container>
    );
}

export default SidebarItem;