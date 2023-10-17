
import styled from 'styled-components';

export const Container = styled.div`
  width: 180px;
  background-color: #FFFFFF;
  position: fixed;
  font-weight: 700;
  height: 100%;
  top: 0;
  left: 0;
  animation: showSidebar 0.4s;

  > svg {
    position: fixed;
    color: #BCB8B1;
    width: 30px;
    height: 30px;
    margin-top: 3px;
    margin-left: 3px;
    cursor: pointer;
  }  
@keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 100%;
    }
  }
`
export const Content = styled.div`
    margin-top: 100px;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-left: 30px;
    margin-top: 50px;
    color: red;

`;



