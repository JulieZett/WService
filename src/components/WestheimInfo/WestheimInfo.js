import React from 'react';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardFeatures,
  PricingCardFeature
} from './WestheimInfo.elements';

function WestheimInfo() {
  return (
    
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Kim-Robert Westheim</PricingHeading>
          <PricingContainer>
         
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  
                </PricingCardIcon>
                <PricingCardPlan>Bakgrunn</PricingCardPlan>
                
            
                <PricingCardFeatures>
                  <PricingCardFeature>Jeg har en bakgrunn med fagbrev som industrimontør fra 2017. 
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
                <PricingCardPlan>Fremtidige Mål</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>tekst</PricingCardFeature>
                  <PricingCardFeature>tekst</PricingCardFeature>
                  
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  
                </PricingCardIcon>
                <PricingCardPlan>*bilde*</PricingCardPlan>
                
            
                <PricingCardFeatures>
                  <PricingCardFeature>bilde
                    </PricingCardFeature>
           
                </PricingCardFeatures>
             
                
               
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>

  );
}
export default WestheimInfo;
