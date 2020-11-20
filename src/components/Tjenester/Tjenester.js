import React from 'react';
import { Button } from '../../globalStyles';
import { FaTree  } from 'react-icons/fa';
import { FaRegSnowflake } from 'react-icons/fa';
import {
  TjenesteSection,
  TjenesteWrapper,
  TjenesteHeading,
  TjenesteContainer,
  TjenesteCard,
  TjenesteCardInfo,
  TjenesteCardIcon,
  TjenesteCardPlan,
  TjenesteCardCost,
  TjenesteCardFeatures,
  TjenesteCardFeature
} from './Tjenester.elements';

function Tjenester() {
  return (
    
      <TjenesteSection>
        <TjenesteWrapper>
          <TjenesteHeading>Tjenester</TjenesteHeading>
          <TjenesteContainer>
          <TjenesteCard to='/KontaktSkjema'>
              <TjenesteCardInfo>
                <TjenesteCardIcon>
                  <FaRegSnowflake />
                </TjenesteCardIcon>
                <TjenesteCardPlan>Vintertjenester</TjenesteCardPlan>
                <TjenesteCardPlan>Sesong</TjenesteCardPlan>
                <TjenesteCardCost>5.000 kr*</TjenesteCardCost>
                <TjenesteCardFeature>Snøbryting</TjenesteCardFeature>
                <TjenesteCardFeature>Saltstrøing</TjenesteCardFeature>
                <TjenesteCardFeatures> </TjenesteCardFeatures>
        
                <Button primary>Les mer</Button>
              </TjenesteCardInfo>
            </TjenesteCard>
            <TjenesteCard to='/KontaktSkjema'>
              <TjenesteCardInfo>
                <TjenesteCardIcon>
                  <FaRegSnowflake />
                </TjenesteCardIcon>
                <TjenesteCardPlan>Vårrengjøring</TjenesteCardPlan>
                <TjenesteCardPlan>Sesong</TjenesteCardPlan>
                <TjenesteCardCost>5.000 kr</TjenesteCardCost>
                <TjenesteCardFeature>Kantklipp</TjenesteCardFeature>
                <TjenesteCardFeature>Gjødsling</TjenesteCardFeature>
                <TjenesteCardFeatures>
                  
                </TjenesteCardFeatures>
                <Button primary>Les mer</Button>
              </TjenesteCardInfo>
            </TjenesteCard>
            
           
            <TjenesteCard to='/sign-up'>
              <TjenesteCardInfo>
                <TjenesteCardIcon>
                  <FaTree />
                </TjenesteCardIcon>
                <TjenesteCardPlan>Uavhengig sesong</TjenesteCardPlan>
                <TjenesteCardCost>Pris etter avtale</TjenesteCardCost>
               
                <TjenesteCardFeatures>
                  <TjenesteCardFeature>Trefelling</TjenesteCardFeature>
                  <TjenesteCardFeature>Vedhogging</TjenesteCardFeature>
                  <TjenesteCardFeature>Last</TjenesteCardFeature>
                </TjenesteCardFeatures>
                <Button primary>Les mer</Button>
              </TjenesteCardInfo>
            </TjenesteCard>
          </TjenesteContainer>
        </TjenesteWrapper>
      </TjenesteSection>
    
  );
}
export default Tjenester;
