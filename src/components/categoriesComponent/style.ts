import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
column-gap: 20px;
margin: -30px 0 50px 0;
`;

export const CategoryBG = styled.span`
    background-color: #f2f2f2;
    min-width: 100px;
    height: 30px;
    padding: 5px 10px;
    border-radius: 10px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: #e0e0e0;
    }

    span {
        font-size: 14px;
        font-weight: 600;
    }
`;