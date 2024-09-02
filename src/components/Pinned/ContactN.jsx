import React from 'react'
import './ContactN.css'
import { useLocalContext } from '../../context/LocalProvider'
const ContactN = () => {

  const {phone} = useLocalContext();

  return (
    <div className='contactN'>
        <h2>Any Problem? Contact Us</h2>
        <p>
        <span>Click Here to Call:</span> 
        <a href={`tel:${phone}`} className="call-link">
         {phone}
        </a>
      </p>
    </div>
  )
}

export default ContactN