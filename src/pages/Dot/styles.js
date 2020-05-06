import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background: #222d48;
`;

export const DotButton = styled.button`
    cursor: pointer;
    margin-bottom: 10px;
    padding: 10px 40px;
    border: 0;
    border-radius: 4px;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
    background: #fff;
    color: #ff3459;

    &:hover {
      background: #ff3459;
      color: #222d48;
      transition: background ease-in 0.2s;
    }
`;

