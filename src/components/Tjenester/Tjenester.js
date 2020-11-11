import React from 'react';
import { Button } from '../../globalStyles';
import { FaTree  } from 'react-icons/fa';
import { FaRegSnowflake } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Tjenester.elements';

function Tjenester() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Tjenester</PricingHeading>
          <PricingContainer>
          <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaRegSnowflake />
                </PricingCardIcon>
                <PricingCardPlan>Vintertjenester</PricingCardPlan>
                <PricingCardCost>5.000 kr</PricingCardCost>
                <PricingCardLength>Fast pris per sesong (1.November - 1.Mars)</PricingCardLength>
                <PricingCardFeatures>
                  
                </PricingCardFeatures>
                <Button primary>Velg</Button>
              </PricingCardInfo>
            </PricingCard>
           
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaTree />
                </PricingCardIcon>
                <PricingCardPlan>Uavhengig sesong</PricingCardPlan>
                <PricingCardCost>Pris etter avtale</PricingCardCost>
               
                <PricingCardFeatures>
                  <PricingCardFeature>Trefelling</PricingCardFeature>
                  <PricingCardFeature>Vedhogging</PricingCardFeature>
                  <PricingCardFeature>Last</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Velg</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Tjenester;
