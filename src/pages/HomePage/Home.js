import React from 'react';
import { homeObjOne, WestheimInfoOne, } from './Data';
import { InfoSection, Tjenester, Erfaring, WestheimInfo, }  from '../../components';
import KontaktSkjema from '../../components/KontaktSkjema/KontaktSkjema';



const Home = () => {
    return (
        <>
          <InfoSection {...homeObjOne} />  
          <WestheimInfo {...WestheimInfoOne} />
          <Erfaring />
          <Tjenester />
          <KontaktSkjema />
           
          
           
           
        </>
    )
}

export default Home;
