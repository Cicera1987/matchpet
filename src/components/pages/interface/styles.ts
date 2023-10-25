import styled from "styled-components";


export const Container = styled.div`
    width: 80%;
    background-color: #1E1E1E;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-left: 1rem;
`;

export const ContainerOne = styled.div`
    width: 95%;
    height: 80%;
    display: flex;
    flex-direction: column;
    background-color: #BCB8B1;
    align-items: center;
    border-radius: 10px;
    margin-top: 1em;
    padding: 1em;

    
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #F6F2F0;
    }
    ::-webkit-scrollbar-thumb {
        background: #BCB8B1;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #BCB8B1;
    }
`;

export const BoxText = styled.div`
    border-radius: 8px;
    width: 8em;
    height: 6em;
    background-color: #F6F2F0;
`

export const ContainerTexto = styled.div`
    width: 45%;
    height: 90px;
    background-color: #F6F2F0;
    margin: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight:500;
    padding: 2em;
    margin-top: 1em;



`
export const ContainerRequest = styled.div`
    width: 60%;
    height: 200px;
    background-color: #F6F2F0;
    margin: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight:500;
    padding: 1em  2em 2em 2em;
    margin-top: 1em;
`

export const ContainerResponse = styled.div`
    width: 50%;
    height: 15px;
    background-color: #F6F2F0;
    margin: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    text-align: center;
    font-weight:500;
    padding-top: 2em;
    padding-right: 1em;
    margin-top: 1em;
    margin-right: -3em;
`

export const InputRequest = styled.input`
    width: 60%;
    height: 20px;
    background-color: #F6F2F0;
    border: none;
    outline: none;
    font-size: 1.2em;
    font-weight: 500;
    padding: 1em;
    margin-top: 1em;
    border-radius: 10px;
    margin-bottom: 1em;

`


export const ContainerTwe = styled.div`
    width: 35%;
    height: 90%;
    background-color: #BCB8B1;
    align-items: center;
    border-radius: 10px;
    padding: 1em;

`;


export const ContainerButton = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 1em;
`;