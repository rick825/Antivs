import React, { useState } from 'react';
import { app } from '../../firebase/firebaseConfig'; 
import { getFirestore, collection, addDoc } from 'firebase/firestore'; 
import './Subscription.css';
import { toast } from 'react-toastify';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const db = getFirestore(app);

    try {
      await addDoc(collection(db, 'subscriptions'), {
        email: email,
        subscribedAt: new Date(),
      });

      setMessage('Thank you for subscribing!');
      setEmail('');
      toast.success("Thank you for Subscribing");
    } catch (error) {
      console.error('Error adding document: ', error);
      setMessage('Subscription failed. Please try again.');
      toast.error("Subscription failed. Please try again.");
    }
  };

  return (
    <div className='subscription'>
      <div className="subsleft">
        <img className='img1' src="https://wowcommercialservices.com/wp-content/uploads/2024/05/png-transparent-norton-antivirus-computer-software-norton-internet-security-others-text-device-internet-security-1.png" alt="" />
        <img className="img2" src="https://www.apexaibricks.com/images/products/RoJ8go6Q.png" alt="" />
      </div>
      <div className="subsright">
        <h2>Get the latest deals!!</h2>
        <form onSubmit={handleSubscribe}>
          <input 
            type="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your Email" 
            required 
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p>{message}</p>} 
      </div>
    </div>
  );
}

export default Subscription;
