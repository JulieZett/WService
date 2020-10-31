import React from 'react';
import { homeObjThree } from './Data';
import { InfoSection, Tjenester }  from '../../components';


const Home = () => {
    return (
        <>
           
          <InfoSection {...homeObjThree} />  
           <Tjenester />
        </>
    )
}

export default Home;
