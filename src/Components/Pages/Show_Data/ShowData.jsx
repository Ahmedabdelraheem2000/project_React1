import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { data } from '../Data';
import CustomCard from '../Home/CustomCard';
import './showData_Style.css'

const ShowData = () => {
  const { id } = useParams();
  const details = data[id];

  if (!details) {
    return <div>Data not found!</div>;
  }

  return (
    <div className='showData' >
       
      <div className='showPost'>
      <img className='image-style_show' src={details.image}/>
      <h4>{details.title}</h4>
      <h6 className='weight_normal_font'>{details.describtion}</h6>
    </div >

        
      <div className='listPosts'>
      {
        data.map((item,index)=>(
            <scrollbars 
                
            key={index}>
             <Link to={`/showData/${index}`}  state={item}>
           <CustomCard detailsCard={item}/>
           </Link>
            </scrollbars>
          
        ))
        }
      </div>
     
    </div>
  );
};

export default ShowData;
