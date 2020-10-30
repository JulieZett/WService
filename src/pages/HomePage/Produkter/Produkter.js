import React from 'react';
import { homeObjTwo, homeObjThree } from './Data';
import { InfoSection, Tjenester }  from '../../components';


const Home = () => {
    return (
        <>
       
          <InfoSection {...homeObjTwo} />  
          <InfoSection {...homeObjThree} />  
           <Tjenester />
        </>
    )
}

export default Home;
