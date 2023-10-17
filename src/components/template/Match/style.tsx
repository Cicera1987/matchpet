import styled from "styled-components";

export interface TemplateProps {
    title?: string;
    children: React.ReactNode;
}

export const Container = styled.div`
  width: calc(100% - 100px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
  background-color: #D9D9D9;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  position: fixed; 
  top: 0;
  margin-top: 2em;
  left: 10em; 
`
