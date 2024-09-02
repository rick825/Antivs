import React from 'react'
import { useLocalContext } from '../../context/LocalProvider'
import './Refund.css';

const Refund = () => {

    const {phone} = useLocalContext();

  return (
    <div className='refund'>
        <div className="refundbox">
            <h2>Call Support for Refund Related problems:</h2>
            <a href={`tel:${phone}`}>{phone}</a>
        </div>
    </div>
  )
}

export default Refund