import styled from 'styled-components';

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: right;
  background: #4f586b;

`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  margin: 0 auto;
  padding-left: 95px;
  justify-content: right;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: right;
  }
`;

export const Heading = styled.h1`
  color: #101522;
  font-size: 48px;
  margin-bottom: 24px;
  justify-content: right;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


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

export const PricingCard = styled.div`
  background: #101522;
  width: 680px;
  height: 600px;
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

export const Picture = styled.div`
  background: transparent;
  width: 680px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
`;

export const InfoIcon = styled.div`
  color: #fff;
  height: 18px;
  font-size: 29px;
`;



export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: left;
  color: #101522;
`;


export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
  color: #fff;
`;


export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  font-size: 18px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: 'Open Sans';
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;