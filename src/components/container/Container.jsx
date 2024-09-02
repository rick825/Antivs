import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Landing/Home';
import About from '../About/About';
import Footer from '../footer/Footer';
import Contact from '../Contact/Contact';
import Chat from '../Chat/Chat';
import ContactN from '../Pinned/ContactN';
import NumberPinned from '../numberPinned/NumberPinned';
import McAfee from '../Categories/McAfee/McAfee';
import Norton from '../Categories/Norton/Norton';
import ProductPage from '../productPage/ProductPage';
import Cart from '../Cart/Cart';
import Terms from '../T&C/Terms';
import Disclaimer from '../T&C/Disclaimer';
import Payment from '../Payment/Payment';
import Avast from '../Categories/Avast/Avast';
import Refund from '../T&C/Refund';


const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);

  return null;
};
const Container = () => {

 
  return (
    <Router>
    <div className='Presentation'>
      <Header />
      <Chat />
      <ContactN />
      <NumberPinned />
      <ScrollToTop />
      <Routes>
       <Route exact path='/' element={<Home />} />
       <Route exact path='/about' element={<About />} />
       <Route exact path='/contact' element={<Contact />} />
       <Route exact path='/cart' element={<Cart />} />
       <Route exact path='/payment' element={<Payment />} />
       <Route exact path='/refund_Policy' element={<Refund />} />
       <Route exact path='/McAfee_support' element={<McAfee />} />
       <Route exact path='/Norton_support' element={<Norton />} />
       <Route exact path='/Avast_support' element={<Avast />} />
       <Route exact path='/Norton_support/product' element={<ProductPage />} />
       <Route exact path='/McAfee_support/product' element={<ProductPage />} />
       <Route exact path='/Avast_support/product' element={<ProductPage />} />
       <Route exact path='/Terms_&_Condition' element={<Terms />} />
       <Route exact path='/Disclaimer' element={<Disclaimer />} />
      </Routes>
      <Footer />
    </div>
  </Router> 
  )
}

export default Container