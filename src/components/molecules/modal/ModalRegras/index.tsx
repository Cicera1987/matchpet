import ButtonModal from "../../../atoms/Buttons/ButtonModal";
import { Container, ContainerButton, ContainerFixed, ContainerModal, InputVariable, InputValue, RadioLabel, RadioInput, ContainerRadio, ContainerTitle, Overlay, TitleRegras, TitleHeader, Containervalidate } from "./styles";
import { FiXCircle } from "react-icons/fi";

interface InsertVariableProps {
    isOpen: boolean;
    openModal: () => void;
}

export const ModalRegras = ({ isOpen, openModal }: InsertVariableProps) => {
    return (
        <>
            <ContainerModal>
                <Container>
                    <TitleHeader>
                        <TitleRegras>Regra ID: Nome</TitleRegras>
                        <FiXCircle size={30} onClick={openModal} />
                    </TitleHeader>
                    <ContainerFixed>
                        <Containervalidate>
                            <h1>SE</h1>
                        </Containervalidate>

                        <Containervalidate>
                            <h1>ENTÃO</h1>
                        </Containervalidate>

                    </ContainerFixed>

                    <ContainerButton>
                        <ButtonModal color="#255111" title="Incluir" onClick={() => { }} />
                        <ButtonModal color="#F9D34C" title="Alterar" onClick={() => { }} />
                        <ButtonModal color="#E91C1C" title="Cancelar" onClick={() => { }} />
                        <ButtonModal color="#90D74A" title="Salvar" onClick={() => { }} />
                    </ContainerButton>

                </Container>
            </ContainerModal>
            <Overlay />
        </>
    );
};
