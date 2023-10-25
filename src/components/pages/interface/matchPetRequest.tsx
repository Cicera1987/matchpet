
import { Sapo } from "../../atoms/Icons/sapo"
import Header from "../../organisms/Header"
import TemplateMatch from "../../template/Match/templateMatch"
import { Container, ContainerOne, ContainerRequest, ContainerResponse, ContainerTwe, InputRequest } from "./styles"
import { useState } from 'react'


export const InterfaceMatchRequest = () => {

    const [state, setState] = useState<string[]>([])
    const [inputValue, setInputValue] = useState<string>('')

    return (
        <>
            <TemplateMatch title="Interface">
                <Header />
                <Container>
                   < ContainerTwe>
                    <ContainerOne>
                       <div>
                            <Sapo />
                       </div>
                        <ContainerRequest>
                            <p>Olá!Eu sou o Macth!Primeiramente eu preciso que você diga qual o tipo de animal você pretende adotar?</p>
                            <ul>
                                <li>1 Repteil</li>
                                <li>2 Felino</li>
                                <li>3 Canino</li>
                                <li> 4 Oviparo</li>
                                <li>5 Roedor</li>

                            </ul>
                        </ContainerRequest>
                
                        <ContainerResponse>
                            <p>Canino</p>
                        </ContainerResponse>
                    
                    </ContainerOne>
                        <InputRequest placeholder="Digite aqui..." />
                    </ContainerTwe>
                </Container>
            </TemplateMatch>
        </>
    )
}