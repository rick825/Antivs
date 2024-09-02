import React,{useState} from 'react';
import './Contact.css';
import PhoneInput from 'react-phone-number-input';
import cont from '../../assets/img/cont.png'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../firebase/firebaseConfig';
import { toast } from 'react-toastify';
import { useLocalContext } from '../../context/LocalProvider';


const db = getFirestore(app); 

const Contact = () => {

  const {phone} = useLocalContext();

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        await addDoc(collection(db, 'User_Query'), formData);
        console.log('Form submitted and data added to Firestore:', formData);
        setFormData({ name: '', email: '', phone: '', message: '' });
        toast.success("Query Submitted Successfully!!");
      } catch (error) {
        console.error('Error adding document to Firestore:', error);
      }
    
  };

  return (
    <div className='contact'>
      <div className="contactmain">
        <div className="contactleft">
         <div className="contactinfo">
         <h2>Contact Us ↓</h2>
          <p>
            <strong>Address:</strong> 888 West Rio Salado Parkway, Suite 2890, Tempe, AZ 85281
          </p>
          <p>
            <strong>Phone:</strong><a href={`tel:${phone}`}>{phone}</a>
          </p>
          <p>
            <strong>Email:</strong> info@antivs.com
          </p>
         </div>
         <div className="contactpic">
            <img src={cont} alt="" />
         </div>
        </div>
        <div className="contactright">
          <h2>Get in Touch</h2>
          <form className="contactform" onSubmit={handleSubmit}>
            <div className="formgroup">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name"  value={formData.name}  onChange={handleFormChange} required />
            </div>
            <div className="formgroup">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email"  value={formData.email} onChange={handleFormChange} required />
            </div>
            <div className="formgroup">
              <label htmlFor="phone">Email</label>
              <PhoneInput
                international
                defaultCountry="US"
                value={formData.phone}
                onChange={handlePhoneChange}
                aria-label="Phone No."
                className={`form-input`}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="formgroup">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message"  value={formData.message}
                onChange={handleFormChange} required></textarea>
            </div>
            <button type="submit" className="contactbutton">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
