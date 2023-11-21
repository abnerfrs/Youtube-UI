import styled from 'styled-components';

export const Container = styled.div<{ menustate: boolean }>`
width: ${({ menustate }) => menustate ? '250px' : '100px'};
height: calc(100vh - 55px);
display: flex;
align-items: center;
flex-direction: column;
overflow-y: auto;
box-sizing: border-box;
padding: 10px 10px 10px 10px;
position: sticky;
top: 55px;

hr {
    width: 90%;
}

p{
    font-size: 14px;
    margin-left: 20px;
}
`;

export const MenuItem = styled.div<{ menustate: boolean }>`
width: 98%;
min-height: ${({ menustate }) => menustate ? '45px' : '70px'};
border-radius: 10px;
cursor: pointer;
padding: 2px 15px;
box-sizing: border-box;
display: flex;
flex-direction: ${({ menustate }) => menustate ? 'row' : 'column'};
align-items: center;
justify-content: ${({ menustate }) => menustate ? 'none' : 'center'};

span {
    margin-top: ${({ menustate }) => menustate ? '0' : '5px'};
    margin-left: ${({ menustate }) => menustate ? '10px' : 'none'};
    font-size: ${({ menustate }) => menustate ? '14px' : '12px'};
}

  &:hover{
    background-color: #f2f2f2
  }
`;

export const ButtonIcon = styled.img`
width: 20px;
`;

export const LoginSession = styled.div<{ menustate: boolean }>`
border-radius: 20px;
border: 1px solid #9a9a9a;
padding: 8px 15px;
margin-right: 5px;
display: flex;
align-items: center;
column-gap: 5px;
cursor: pointer;
visibility: ${({ menustate }) => menustate ? 'visible' : 'hidden'};

&:hover{
    background-color: #4887CD73;
    border: none;
}

img {
    width: 25px;
    
}

span {
    font-size: 14px;
    font-weight: 600;
    color: #3178C6;
}
`;