import React from 'react'

const CustomCard = ({detailsCard}) => {
  return (
    <div className='card-image'>
      <img className='image-style' src={detailsCard.image}/>
      <h4>{detailsCard.title}</h4>
      <h6 className='weight_normal_font'>{detailsCard.describtion}</h6>
    </div>
  )
}

export default CustomCard
