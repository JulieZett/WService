import React from 'react';
import { Button } from '../../globalStyles';
import { FaTree  } from 'react-icons/fa';
import { FaRegSnowflake } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
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
  TjenesteCardLength,
  TjenesteCardFeatures,
  TjenesteCardFeature
} from './Tjenester.elements';

function Tjenester() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <TjenesteSection>
        <TjenesteWrapper>
          <TjenesteHeading>Tjenester</TjenesteHeading>
          <TjenesteContainer>
          <TjenesteCard to='/sign-up'>
              <TjenesteCardInfo>
                <TjenesteCardIcon>
                  <FaRegSnowflake />
                </TjenesteCardIcon>
                <TjenesteCardPlan>Vintertjenester</TjenesteCardPlan>
                <TjenesteCardCost>5.000 kr</TjenesteCardCost>
                <TjenesteCardLength>Fast pris per sesong (1.November - 1.Mars)</TjenesteCardLength>
                <TjenesteCardFeatures>
                  
                </TjenesteCardFeatures>
                <Button primary>Velg</Button>
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
                <Button primary>Velg</Button>
              </TjenesteCardInfo>
            </TjenesteCard>
          </TjenesteContainer>
        </TjenesteWrapper>
      </TjenesteSection>
    </IconContext.Provider>
  );
}
export default Tjenester;
