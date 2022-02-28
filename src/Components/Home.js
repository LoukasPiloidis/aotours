import React from 'react'
import panorama from '.././public/Home/panorama.png'
import personal from '.././public/Home/personal.png'
import { reviews } from '../Reviews'
import Review from './Review'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      <div style={{position: 'relative'}}>
        <img src={panorama} alt='panorama' className='home-panorama'></img>
        <h1 className='home-slogan'>We Share Our Passion With You</h1>
      </div>
      {/* <div className='middle-title'>
      </div>
      <div className='middle-subtitle'>
      </div> */}
      <div className='middle-wrapper'>
        <div className='middle-text'>
          <h2>Artemis Tours</h2>
          <h3>Your guide in Athens</h3>
          <img src={personal} alt='personal' className='personal'></img>
        </div>
        <div className='wrapper-text'>
          <p className='text-cta'>
            A walking tour in Athens is a MUST!
            BUT don’t just walk it... 
            EXPERIENCE it!
          </p>
          <p className='text-desc'>
            Like a perfectly tailored suit, each tour 
            is different, just as each traveller is 
            different. 
            And that’s why we are here.
            To help you experience Athens on your
            terms. 
            Attentively, carefully, 
            reassuringly. 
            We are here to help you
            make it your way and make the most
            of it. 
            We are here to help you experience
            Athens the best way, walking you through 
            the paths of history, always at your pace, using all of your senses, offering
            you the chance of the best spots for incredible pictures.
            In other words a tour that is tailor made 
            to your needs!
          </p>
        </div>
      </div>
      <h2 className='home-footer'>What they say about us</h2>
      <div className='reviews-wrapper'>
        <FontAwesomeIcon icon={faAngleLeft} color={'white'} size={'2xl'} className='arrow-left'/>
        <div className='reviews-inner-wrapper'>
          {reviews.map(item => <Review name={item.name} place={item.place} time={item.time} text={item.text} />)}
        </div>
        <FontAwesomeIcon icon={faAngleRight} color={'white'} size={'2xl'} className='arrow-right'/>
      </div>
    </div>
  )
}

export default Home