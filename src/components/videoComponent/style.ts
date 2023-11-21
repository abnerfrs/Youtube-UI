import styled from "styled-components";

export const Container = styled.div`
width: 100%;
`;

export const ImageBanner = styled.img<{menustate:boolean}>`
width: 100%;
height: ${({menustate})=> menustate? '180px': '150px'};
border-radius: 12px;
cursor: pointer;
`;

export const TitleContainer = styled.div`
width: 100%;
margin-top: 15px;
display: flex;
`;

export const ChannelImage = styled.div`
width: 50px;
height: 40px;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 10px;
background-color: beige;
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
`; 

export const Title = styled.span`
font-weight: 600;
color: #0f0f0f;
`;

export const TextCard = styled.span`
color: #8c8c8c;
font-size: 14px;
`;