import styled from 'styled-components'

export const Container = styled.header`
width: 100%;
height: 55px;
background-color: #fff;
padding: 0 16px;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: space-between;
position: sticky;
top: 0;
`;

export const LogoContainer = styled.div`
display: flex;
align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
width: 40px;
height: 40px;
margin: ${({ margin }) => margin ? margin : 0};
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

:hover { 
    background-color: #f2f2f2;
    border-radius: 35%;
    padding: 10px;
}
`;

export const ButtonIcon = styled.img`
width: 20px;
`;

export const SearchContainer = styled.div`
display: flex;
`;

export const SearchInputContainer = styled.div`
width: 450px;
height: 35px;
border: 1px solid #d3d3d3;
border-radius: 40px 0 0 40px;
display: flex;
align-items: center;
padding: 0 16px;
`;

export const SearchInput = styled.input`
width: 100%;
height: 25px;
outline: none;
border: none;
`;

export const SearchButton = styled.div`
border-radius: 0 40px 40px 0;
height: 35px;
width: 70px;
background-color: #f8f8f8;
border: 1px solid #d3d3d3;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;


&:hover{
background-color: #e0e0e0;
}
`;

export const HeaderButtons = styled.div`
display: flex;
width: 270px;
column-gap: 10px;
`;

export const LoginSession = styled.div<{ menustate: boolean }>`
border-radius: 20px;
border: 1px solid #9a9a9a;
padding: 0px 15px;
margin-right: 5px;
display: flex;
align-items: center;
column-gap: 15px;
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