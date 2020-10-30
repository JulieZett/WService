import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InfoSection, Tjenester }  from '../../components';


const Home = () => {
    return (
        <>
          <InfoSection {...homeObjOne} />  
          <InfoSection {...homeObjTwo} />  
          <InfoSection {...homeObjThree} />  
           <Tjenester />
        </>
    )
}

export default Home;
