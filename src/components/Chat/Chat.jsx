import React, { useState, useEffect } from 'react';
import './Chat.css';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../firebase/firebaseConfig'; 
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; 

const db = getFirestore(app); 

const Chat = () => {
  const [showChat, setShowChat] = useState(true);
  const [response, setResponse] = useState('Hello, How Can I Help You?');
  const [currentOptions, setCurrentOptions] = useState([]);
  const [conversationStage, setConversationStage] = useState('initial');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', issue: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', phone: '', issue: '' });
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const stages = {
    initial: {
      options: ['Need help!'],
      response: 'Hello! How can I help you today?',
      nextStage: 'askHelp',
    },
    askHelp: {
      options: ['Payment related problem', 'Interface not working', 'Any other'],
      response: 'How can I assist you?',
      nextStage: 'handleIssue',
    },
    handleIssue: {
      options: ['Payment related problem', 'Interface not working', 'Any other'],
      response: 'Please select an option:',
      nextStage: 'showForm',
    },
    showForm: {
      options: [],
      response: '',
      nextStage: null,
    },
  };

  useEffect(() => {
    setCurrentOptions(stages['initial'].options);

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sendMessage = (message) => {
    const stage = stages[conversationStage];
    const nextStage = stages[stage.nextStage];

    if (stage.nextStage === 'showForm') {
      setShowForm(true);
      setResponse('Please Enter Your Issue Below: ');
      setCurrentOptions([]);
    } else {
      setConversationStage(stage.nextStage);
      setResponse(nextStage.response);
      setCurrentOptions(nextStage.options);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.issue) errors.issue = 'Issue description is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await addDoc(collection(db, 'user-info-chats'), formData);
        console.log('Form submitted and data added to Firestore:', formData);
        setFormData({ name: '', email: '', phone: '', issue: '' });
        setFormErrors({ name: '', email: '', phone: '', issue: '' });
        setShowForm(false);
        setConversationStage('initial');
        setResponse('Thank you for your submission! How else can I assist you?');
        toast.success("Query Submitted Successfully!!");
        setCurrentOptions(stages['initial'].options);
      } catch (error) {
        console.error('Error adding document to Firestore:', error);
      }
    }
  };

  return (
    <div 
      className='chat' 
      style={
        showChat 
          ? { transform: "translateY(0)" } 
          : isMobileView 
            ? { transform: "translateX(24rem) translateY(38rem)", opacity: "0.5" } 
            : { transform: "translateY(38rem)" }
      }
    >
      <div className="close">
        {showChat && (
          <button onClick={() => {
            setConversationStage('initial');
            setShowChat(false);
          }}>X</button>
        )}
      </div>

      <div className="chattop" onClick={() => setShowChat(true)}>
        <div className="chatimg">
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/chatbot.png" alt="chatbot" />
        </div>
        <div className="chatpara">
          <h2>Hello There !!</h2>
          <p>I am your friendly chatbot.</p>
        </div>
      </div>

      <div className="chatmain">
        <h2>{response}</h2>
        {showForm ? (
          <form onSubmit={handleSubmit} className="chat-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                aria-label="Name"
                className={`form-input ${formErrors.name ? 'input-error' : ''}`}
                placeholder="Enter your name"
              />
              {formErrors.name && <span className="error-message">{formErrors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                aria-label="Email"
                className={`form-input ${formErrors.email ? 'input-error' : ''}`}
                placeholder="Enter your email"
              />
              {formErrors.email && <span className="error-message">{formErrors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone No.:</label>
              <PhoneInput
                international
                defaultCountry="US"
                value={formData.phone}
                onChange={handlePhoneChange}
                aria-label="Phone No."
                className={`form-input ${formErrors.phone ? 'input-error' : ''}`}
                placeholder="Enter your phone number"
              />
              {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="issue">Issue:</label>
              <textarea
                name="issue"
                value={formData.issue}
                onChange={handleFormChange}
                aria-label="Issue"
                className={`form-textarea ${formErrors.issue ? 'input-error' : ''}`}
                placeholder="Describe your issue"
              />
              {formErrors.issue && <span className="error-message">{formErrors.issue}</span>}
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        ) : (
          <div className='chatoptions'>
            {currentOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => sendMessage(option)}
                style={{ margin: '5px' }}
                aria-label={`Option ${option}`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
