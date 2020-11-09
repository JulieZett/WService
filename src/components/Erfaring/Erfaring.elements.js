import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #101522;

`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Overskift = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
  justify-content: left;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  background: #242424;
  width: 380px;
  height: 300px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;


export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;



export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
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
`
