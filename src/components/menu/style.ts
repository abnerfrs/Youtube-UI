import styled from 'styled-components';

export const Container = styled.div<{ menuState: boolean }>`
width: ${({ menuState }) => menuState ? '250px' : '100px'};
height: calc(100vh - 55px);
display: flex;
align-items: center;
flex-direction: column;
overflow-y: auto;
box-sizing: border-box;
padding: 10px 10px 10px 10px;
`;

export const MenuItem = styled.div<{ menuState: boolean }>`
width: 98%;
min-height: ${({ menuState }) => menuState ? '45px' : '70px'};
border-radius: 10px;
cursor: pointer;
padding: 2px 15px;
box-sizing: border-box;
display: flex;
flex-direction: ${({ menuState }) => menuState ? 'row' : 'column'};
align-items: center;
justify-content: ${({ menuState }) => menuState ? 'none' : 'center'};

span {
    margin-top: ${({menuState}) => menuState? '0': '5px'};
    margin-left: ${({ menuState }) => menuState ? '10px' : 'none'};
    font-size: ${({ menuState }) => menuState ? '16px' : '12px'};
}

  &:hover{
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
width: 20px;
`;