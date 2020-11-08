import React from 'react';
import { homeObjOne, homeObjThree, WestheimInfoOne, } from './Data';
import { InfoSection, Tjenester, WestheimInfo, }  from '../../components';



const Home = () => {
    return (
        <>
          <InfoSection {...homeObjOne} />  
          <WestheimInfo {...WestheimInfoOne} />
          <InfoSection {...homeObjThree} />  
         
          <Tjenester />
           
          
           
           
        </>
    )
}

export default Home;
