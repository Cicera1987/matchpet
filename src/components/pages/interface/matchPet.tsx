import { Interface } from "readline"
import { Sapo } from "../../atoms/Icons/sapo"
import Header from "../../organisms/Header"
import TemplateMatch from "../../template/Match/templateMatch"
import { Container, ContainerOne, ContainerTexto, ContainerTwe, ContainerButton } from "./styles"
import { useState } from 'react'
import ReusableButton from "../../atoms/Buttons/ButtonDefault"
import { InterfaceMatchRequest } from "./matchPetRequest"
import { useNavigate } from "react-router-dom"



export const InterfaceMatch = () => {

    const [state, setState] = useState<string[]>([])
    const [inputValue, setInputValue] = useState<string>('')
    



    const navigate = useNavigate()

    // function resolveQuestions(text: string) {
    //     switch (text) {
    //         case 'Canino':
    //             setInputValue('Qual o porte do animal Desejado?')

    //         case 'Felino':
    //             setInputValue('Qual o porte do animal Desejado?')
    //             break;
    //         case 'Oviparo':
    //             setInputValue('Qual o porte do animal Desejado?')
    //             break;
    //         case 'Reptil':
    //             setInputValue('Qual o porte do animal Desejado?')
    //             break;
    //         case 'Roedor':
    //             setInputValue('Qual o porte do animal Desejado?')
    //             break;

    //         default:
    //         break;
    //     }
    // }

    function Request(){
        navigate('/matchPetRequest')
    }


    return (
        <>
            <TemplateMatch title="Interface">
                <Header />
                <Container>
                    <ContainerTwe>
                    <ContainerOne>
                        <Sapo />
                        <ContainerTexto>
                            <h2>Buscacando um mascote?</h2>
                            <p>Converse com o Match.</p>
                        </ContainerTexto>
                        <ContainerTexto>
                            <p>Olá! Eu sou o Macth! Pelo visto você está em busca de um mascote para adotar, eu posso te ajudar nesta jornada!.</p>
                        </ContainerTexto>
                        
                    </ContainerOne>
                        <ContainerButton>
                            <ReusableButton color="#3C6E71" title="COMEÇAR" onClick={Request} />
                        </ContainerButton>
                        
                    </ContainerTwe>
                </Container>
            </TemplateMatch>
            
        </>
    )
}