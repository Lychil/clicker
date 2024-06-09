import styled from "@emotion/styled";

export const HeaderContainer = styled('div')`
padding: 20px;
display: flex;
justify-content: space-between;
background-color: #D9D9D9;
`;

export const Logo = styled('p')`
font-size: 32px;
font-weight: 600px;
line-height: 50px;

@media (max-width: 720px) {
font-size: 24px;
font-weight: 600px;
line-height: 30px;
}
`;

export const CountCoinsContainer = styled('div')`
display: flex;
gap: 10px;
`;

export const CountCoinsImg = styled('img')`
height: 30px;
width: 30px;
margin: auto 0;

@media (max-width: 720px) {
height: 25px;
width: 25px;
}
`;

export const CountCoinsP = styled('p')`
margin: auto 0;
font-size: 24px;

@media (max-width: 720px) {
font-size: 20px;
}
`;

export const CountPeopleContainer = styled('div')`
display: flex;
gap: 10px;
`;

export const CountPeopleImg = styled('img')`
height: 30px;
width: 30px;
margin: auto 0;

@media (max-width: 720px) {
height: 25px;
width: 25px;
}
`;

export const CountPeopleP = styled('p')`
margin: auto 0;
font-size: 24px;

@media (max-width: 720px) {
font-size: 20px;
}
`;