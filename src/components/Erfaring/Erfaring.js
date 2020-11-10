import React, {useState} from 'react';
import people from './Pdata';
import {
  ErfaringSeksjon,
  Overskrift,
  ErfaringRow,
  ErfaringColumn,
  TextWrapper,
  ErfaringWrapper
} from './Erfaring.elements';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Erfaring = () => {
  
  const [index, setIndex] = useState(0);
  const {name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((index)=> {
  let newIndex = index + 1;
  return newIndex;
    });
  };
  const prevPerson = () => {
    setIndex((index)=> {
  let newIndex = index - 1;
  return newIndex;
    });

  return (
    <ErfaringSeksjon>
      <ErfaringWrapper>
        <ErfaringColumn>
          
          <Overskrift> Erfaringer </Overskrift>
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
      <FaQuoteRight />
     </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p classname='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className="button-container">
      
    <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight />
      </button> <button className='prev-btn'>
        <FaChevronLeft />
      </button>
    
      
      
    </div>
    </article>
   
        </ErfaringColumn>
      </ErfaringWrapper>
    </ErfaringSeksjon>
  );

};

export default Erfaring;
