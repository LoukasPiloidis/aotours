import React from 'react'
import '../styles/Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = ({ name, place, time, text }) => {
  return (
    <div className='review'>
      <div className='stars-wrapper'>
        <FontAwesomeIcon icon={faStar} color={'gold'}/>
        <FontAwesomeIcon icon={faStar} color={'gold'}/>
        <FontAwesomeIcon icon={faStar} color={'gold'}/>
        <FontAwesomeIcon icon={faStar} color={'gold'}/>
        <FontAwesomeIcon icon={faStar} color={'gold'}/>
      </div>
      <p className='text'>{text}</p>
      <div>
        <p className='name'>{name}, {place}</p>
        <p className='time'>{time}</p>
      </div>
    </div>
  )
}

export default Review