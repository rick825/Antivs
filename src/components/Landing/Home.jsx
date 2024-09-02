import React from 'react'
import './Home.css'
import sec2 from '../../assets/img/sec2.png'
import Banner from '../banner/Banner'
import Products from '../products/Products'
import Subscription from '../subscription/Subscription'
import Quickcontact from '../quickcontact/Quickcontact'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router-dom'
import CategoryBanner from '../CategoryBanner/CategoryBanner'

const Home = () => {

    const navigate = useNavigate();

    const handleShopNow = () => {
        window.scrollTo({
            top: 1700, 
            behavior: 'smooth', 
        });
    };

  return (
    <>
    <div className="home">
        <div className="homeleft homecont">
            <div className="hometophead">
              <h2>Shop The Best!!</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur possimus commodi reprehenderit est nulla incidunt pariatur facilis assumenda magnam corrupti explicabo non distinctio perspiciatis, sit autem provident rem vero corporis.</p>
              <div className="hometopbutton">
                 <button className='shopnowbtn' onClick={handleShopNow}>Shop Now</button>
                 <button className='aboutusbtn' onClick={()=>navigate('/about')} >About Us →</button>
              </div>
            </div>
            <div className="hometopbot homeleftbot">
                <div className="homeicon">
                    <div className="hicon">
                        <div className="himg">
                        <img  src="https://img.icons8.com/ios-filled/50/FFFFFF/delivery--v1.png" alt="delivery--v1"/>
                        </div>
                    </div>
                    <div className="htext">
                        <h3>Free Delivery</h3>
                    </div>
                </div>
                <div className="homeicon">
                    <div className="hicon">
                        <div className="himg">
                        <img  src="https://img.icons8.com/ios-filled/50/FFFFFF/private2.png" alt="private2"/>
                        </div>
                    </div>
                    <div className="htext">
                        <h3>Secure Payments</h3>
                    </div>
                </div>
                <div className="homeicon">
                    <div className="hicon">
                        <div className="himg">
                        <img src="https://img.icons8.com/ios-filled/50/FFFFFF/key.png" alt="key"/>
                        </div>
                    </div>
                    <div className="htext">
                        <h3>Product Key Activation</h3>
                    </div>
                </div>
                <div className="homeicon">
                    <div className="hicon">
                        <div className="himg">
                        <img  src="https://img.icons8.com/ios-filled/50/FFFFFF/customer-support.png" alt="customer-support"/>
                        </div>
                    </div>
                    <div className="htext">
                        <h3>24 / 7 Customer Support</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="homeright homecont">
            <div className="vectorimg">
            {/* <img src={sec} alt="" className='img1' /> */}
            <img src={sec2} alt="" className='img2' />
            </div>
            <div className="hometopbot homerightbot">
                <div className="homeicon">
                    <div className="hicon">
                        <div className="himg">
                        <img  src="https://img.icons8.com/ios-filled/50/FFFFFF/delivery--v1.png" alt="delivery--v1"/>
                        </div>
                    </div>
                    <div className="htext">
                        <h3>Free Delivery</h3>
                    </div>
                </div>
                <div className="homeicon">
                    <div className="hicon">
                        <div className="himg">
                        <img  src="https://img.icons8.com/ios-filled/50/FFFFFF/private2.png" alt="private2"/>
                        </div>
                    </div>
                    <div className="htext">
                        <h3>Secure Payments</h3>
                    </div>
                </div>
                <div className="homeicon">
                    <div className="hicon">
                        <div className="himg">
                        <img src="https://img.icons8.com/ios-filled/50/FFFFFF/key.png" alt="key"/>
                        </div>
                    </div>
                    <div className="htext">
                        <h3>Product Key Activation</h3>
                    </div>
                </div>
                <div className="homeicon">
                    <div className="hicon">
                        <div className="himg">
                        <img  src="https://img.icons8.com/ios-filled/50/FFFFFF/customer-support.png" alt="customer-support"/>
                        </div>
                    </div>
                    <div className="htext">
                        <h3>24 / 7 Customer Support</h3>
                    </div>
                </div>
              

            </div>
            
       </div>
       
    </div>
    <CategoryBanner />
    <Banner />
    <Products />
    <Subscription />
    {/* <Quickcontact /> */}
    </>
  )
}

export default Home