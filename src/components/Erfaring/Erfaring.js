import React, {useState} from 'react';
import people from './Pdata';
import {ErfaringColumn, ErfaringSeksjon, ErfaringWrapper, Overskrift, UtsagnBoks} from './Erfaring.elements';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';


const Erfaring = () => {

    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const nextPerson = () => {
        setIndex((index) => {
            return index + 1;
        });
    };

    const prevPerson = () => {
        setIndex((index) => {
            return index - 1;
        });
    };

    return (
        <ErfaringSeksjon>
            <ErfaringWrapper>
               
                    <Overskrift> Erfaringer </Overskrift>
                     <UtsagnBoks>
                    
                        <div className='img-container'>
                            <img src={image} alt={name} className='person-img'/>
                            <span className='quote-icon'>
                                    <FaQuoteRight/>
                            </span>
                        </div>
                        <h4 className='person'>{name}</h4>
                        <p classname='alder'>{job}</p>
                        <p className='utsagn'>{text}</p>
                        <div className="button-container">
                            <button className='prev-btn' onClick={prevPerson}>
                                <FaChevronLeft/>
                            </button>
                            <button className='next-btn' onClick={nextPerson}>
                                <FaChevronRight/>
                            </button>
                            
                        </div>
                 </UtsagnBoks>
                
            </ErfaringWrapper>
        </ErfaringSeksjon>
    );
};

export default Erfaring;