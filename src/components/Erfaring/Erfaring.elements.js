import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErfaringSeksjon = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #101522;

`;

export const ErfaringWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  margin: 0 auto;
  padding-left: 95px;
  justify-content: left;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: right;
  }
`;

export const Overskrift = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
color: #fff;
`;

export const TopLine = styled.div`
color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4FA7F7')};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const ErfaringRow = styled.div`
 display: flex;
 margin: 0 -15px -15px 15px;
 flex-wrap: wrap;
 align-items:  center;
 flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')
 };
`;

export const ErfaringColumn =  styled.div`
 margin-bottom: 15px;
 padding-left: 15px;
 padding-right: 15px;
 flex: 1;
 max-width: 50%;
 flex-basis: 50%;

 @media screen and (max-width: 768px) {
  max-width: 100%;
  flex-basis: 100%;
  display: flex;
  justify-content: center;
}
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

@media screen and (max-width: 768px) {
pading-bottom: 65px;
  }
`; 

export const UtsagnBoks = styled.div`
    background: #c4ccd4;
    padding: 1.5rem 2rem;
    text-align: center;
    
  
`