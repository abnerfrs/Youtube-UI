import styled from "styled-components";

export const Container = styled.div<{ menustate: boolean }>`
width: 100%;
max-width: 1600px;
display: grid;
grid-template-columns: ${({menustate})=> menustate? 'repeat(4,1fr)': 'repeat(5,1fr)'};
column-gap: 25px;
row-gap: 50px;
`;