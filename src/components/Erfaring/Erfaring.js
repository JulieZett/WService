import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  Overskift,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardFeature,
  TopLine,
  Heading,
  Subtitle
} from './Erfaring.elements';

function Erfaring() {
  return (
    
      <PricingSection>
        <PricingWrapper>
          <Overskift>Erfaringer</Overskift>
          <PricingContainer>
          <TopLine> Hello </TopLine>
                        <Heading> Hei</Heading>
                        <Subtitle>Hade</Subtitle>
            <PricingCard>
           
              <PricingCardInfo>
                
                <PricingCardPlan>Sommertjenester</PricingCardPlan>
                <PricingCardCost>5.000 kr</PricingCardCost>
              
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
           
            <PricingCard>
              <PricingCardInfo>
               
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
           
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>

  );
}
export default Erfaring;
