import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, WestheimInfoOne, } from './Data';
import { InfoSection, Tjenester, WestheimInfo, }  from '../../components';



const Home = () => {
    return (
        <>
          <InfoSection {...homeObjOne} />  
          <InfoSection {...homeObjTwo} />  
          <InfoSection {...homeObjThree} />  
           <Tjenester />
           <WestheimInfo {...WestheimInfoOne} />
        </>
    )
}

export default Home;
