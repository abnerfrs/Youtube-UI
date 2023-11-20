import styled from 'styled-components';

export const Container = styled.div`
width: 250px;
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
overflow-y: auto;
box-sizing: border-box;
padding: 65px 10px 10px 10px;
`;

export const MenuItem = styled.div`
width: 90%;
min-height: 40px;
border-radius: 10px;
cursor: pointer;

  &:hover{
    background-color: #f2f2f2;
  }
`;