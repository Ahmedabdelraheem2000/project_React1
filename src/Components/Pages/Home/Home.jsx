import React from 'react';
import './HomeStyle.css';
import CustomCard from './CustomCard';
import { Link } from 'react-router-dom';
import {data} from '../Data'

const Home = () => {
  
  
  return (
    <div className='Home'>
      {
        data.map((item,index)=>(
          
          <Link to={`/showData/${index}`} key={index} state={item}>
          <CustomCard detailsCard={item}/>
          </Link>
        ))}
     
    </div>
  );
};

export default Home;
