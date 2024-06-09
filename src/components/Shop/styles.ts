import styled from "@emotion/styled";

export const ShopContainer = styled('div')`
position: absolute;
padding: 15px;
height: 600px;
width: 100%;
overflow-y: scroll;
top: 0;
left: 0;
background-color: white;
border: 1px solid black;

animation: move;
animation-duration: 2s;
animation-iteration-count: 1;

@keyframes move {
    from {
        transform: translateY(600px);
    }
    to {
        transform: translateY(0px);
    }
}
`;

export const ShopCard = styled('div')`
height: 200px;
margin-bottom: 10px;
display: flex;
gap: 10px;
padding: 20px;
border: 1px solid black;
border-radius: 35px;
`;

export const ShopCardImgContainer = styled('div')`
height: 150px;
width: 150px;
display: flex;
justify-content: center;
margin-bottom: 10px;
background-color: #D9D9D9;
border-radius: 35px;
`;

export const ShopCardImg = styled('img')`
height: 100px;
width: 100px;
margin: auto 0;
`;

export const ShopCardDescription = styled('div')`
width: 100%;
`;

export const ShopCardIndicators = styled('div')`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 10px;
margin-bottom: 20px;
`;

export const ShopCardText = styled('p')`
font-size: 20px;
font-weight: 600px;
`;

export const ShopCardButtonUp = styled('button')`
cursor: pointer;
height: 35px;
width: 100%;
border: none;
border-radius: 17px;
background-color: #d9d9d9;
text-align: center;
margin-bottom: 5px;
`;

export const ShopCardPrice = styled('div')`
display: flex;
justify-content: center;
gap: 10px;
`;

export const ShopCardPriceItem = styled('div')`
display: flex;
gap: 5px;
`;

export const ShopCardPriceImg = styled('img')`
width: 20px;
height: 20px;
`; 

export const ShopCardPriceText = styled('p')`
font-size: 14px;
font-weight: 600;
`;

export const ShopCloseButton = styled('img')`
cursor: pointer;
position: absolute;
top: 3px;
right: 3px;
width: 20px;
height: 20px;
`;