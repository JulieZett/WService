import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { GiStairsGoal } from 'react-icons/gi';
import Man from '../../images/relax.svg';
import {
  PricingSection,
  PricingWrapper,
  Heading,
  PricingContainer,
  PricingCard,
  InfoIcon,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardFeatures,
  PricingCardFeature,
} from './WestheimInfo.elements';

function WestheimInfo() {
  return (
    
      <PricingSection>
        <PricingWrapper>
        <Heading>Om Westheim</Heading>
          <PricingContainer>
                  <div>
                    <img src={Man} class="BildeS" width="700" />
                  </div>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardPlan>
                    <InfoIcon> <BsFillPersonLinesFill /> Bakgrunn</InfoIcon> </PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Mitt navn er Kim-Robert Westheim og jeg er opprinnelig fra Halden. Jeg har en bakgrunn med fagbrev som industrimontør fra 2017. 
                      Som industrimontør sammenstiller og fullfører du avanserte mekaniske produkter. Det stilles
                      høye krav til kvalitet og sikkerhet i arbeidet. 
                    </PricingCardFeature>
                  <PricingCardFeature>Etter 3 år hos Haby Norske Sjalusier startet jeg hos NOHA med levering av 
                      brannsikerhet til næringsbygg og industri. 
                      Dette omgår brannslangetrommer,  brannslukkere og nødlys. </PricingCardFeature>
                  <PricingCardFeature>Som en aktiv mann fikk jeg i 2019 fikk jeg muligheten 
                      til å inngå en samarbeid med Vaktmesterkompaniet AS med snøbryting. 
                      I dag bruker jeg en sekhjuling langs en fast rute på Skøyen i Oslo.
                  </PricingCardFeature>
                </PricingCardFeatures>
                <PricingCardPlan>
                    <InfoIcon ><GiStairsGoal />  Fremtidige Mål </InfoIcon></PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Cras elementum eros leo, sed facilisis metus suscipit sit amet.
                        Vivamus euismod diam eu hendrerit vulputate.</PricingCardFeature>
                  
                  
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>

  );
}
export default WestheimInfo;
