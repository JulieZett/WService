import React from 'react';
import { homeObjOne, WestheimInfoOne, } from './Data';
import { InfoSection, Tjenester, Erfaring, WestheimInfo, }  from '../../components';



const Home = () => {
    return (
        <>
          <InfoSection {...homeObjOne} />  
          <WestheimInfo {...WestheimInfoOne} />
          <Erfaring />
          <Tjenester />
           
          
           
           
        </>
    )
}

export default Home;
