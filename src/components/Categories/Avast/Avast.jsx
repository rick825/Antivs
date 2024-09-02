import React, { useState } from 'react'
import './Avast.css'
import '../Categories.css'
import { useProduct } from '../../../context/ProductContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useLocalContext } from '../../../context/LocalProvider'
import avast from '../../../assets/img/avast.png'


const Avast = () => {

    const {cart, setCart, setProductToShow} = useProduct();
    const navigate = useNavigate();
    const {phone} = useLocalContext();

    const [product, setProduct] = useState([
        {
          id: "101",
          name: "Avast Pro Antivirus",
          desc: "Basic antivirus protection for your PC or Mac. Avast Pro Antivirus offers essential security against viruses, malware, spyware, and phishing attacks, along with real-time threat detection.",
          price: "14.99",
          img: "https://5.imimg.com/data5/CW/SR/IA/SELLER-64185364/antivirus-software.jpg"
        },
        {
          id: "102",
          name: "Avast Premium Security",
          desc: "Comprehensive online security for all your devices. Avast Premium Security protects against malware, phishing, ransomware, and webcam hacking, plus a VPN for secure browsing and sensitive data protection.",
          price: "69.99",
          img: "https://5.imimg.com/data5/SELLER/Default/2023/1/BP/YJ/AK/86639640/avast-premium-security-3-years-10-device.png"
        },
        {
          id: "103",
          name: "Avast Ultimate",
          desc: "All-in-one security, privacy, and performance. Avast Ultimate includes everything in Premium Security, plus Avast SecureLine VPN, Avast Cleanup Premium, and Avast Passwords Premium for a complete online protection suite.",
          price: "99.99",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUKoE4HSy-55Tlg-ogrqIrImnnJryB6ni7L7DKdi01XJiMcf9NzHXrdVPes9Xyly0_rc&usqp=CAU"
        },
        {
          id: "104",
          name: "Avast Cleanup Premium",
          desc: "Boost your computer’s speed and performance. Avast Cleanup Premium cleans up junk files, optimizes your system, and keeps your PC or Mac running smoothly with advanced cleaning features.",
          price: "49.99",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRC8hHjsFcciW2kWK2K89FCnnOrQqllQhlrg&s"
        },
        {
          id: "106",
          name: "Avast AntiTrack Premium",
          desc: "Protect your online privacy and stop companies from tracking you. Avast AntiTrack disguises your online identity, clears tracking cookies, and prevents advertisers from creating a profile of you.",
          price: "49.99",
          img: "https://images-cdn.ubuy.co.in/64f4eafe6a7a2309c27a576d-avast-antitrack-premium-1-year-3-pc.jpg"
        }
      ]);
      

      const handleNavigation = (value) =>{
        navigate('/Avast_support/product')
        setProductToShow(value);
      }

      
      const handleCart = (item) => {
        if (!cart.some(bagItem => bagItem.id === item.id)) {
          setCart((prevBag) => [...prevBag, item]);
          toast.success(`${item.name} Added to Cart`);
        } else {
          toast.warning(`${item.name} is already in the Cart`);
        }
      };

  return (
    <div className='antiv avast'>
        <div className="antivMain">
        {/* antiv Banner */}
            <a href={`tel:${phone}`}><div className="antivBanner">
                <div className="antivBannerLeft">
                  <div className="antivsupport">
                    <h2>Avast Antivirus Support :</h2>
                    <div className="customersupportbox">
                      <h3>24 / 7 Customer Support ↓</h3> 
                      <a href={`tel:${phone}`}>{phone}</a>
                    </div>
                  </div>
                </div>
                <div className="antivBannerRight">
                   <div className="antivpic">
                    <img src={avast} alt=""/>
                   </div>
                </div>
            </div>
           </a>
        {/* end antiv Banner */}
        {/* antivlist */}
       <div className="antivlist">
         <div className="antivlisthead">
            <h2>Avast Antivirus ↓</h2>
         </div>
         <div className="antivlistmain">
            {product.map((product)=>(
                 <div className="antivlistitem">
                 <div className="antivlistitemtop" onClick={()=>handleNavigation(product)}>
                  <img src={product.img} alt="" />
                 </div>
                 <div className="antivlistiteminfo">
                   <div className="antiviteminfohead">
                     <h3 onClick={()=>handleNavigation(product)}>{product.name}</h3>
                     <p>$ {product.price}</p>
                   </div>
                   <div className="antiviteminfobtn">
                   {cart.some((prev)=> prev.id === product.id) ? ( <button className="addbutton" >Added To Bag ✔</button>):(
                   <button className="addbutton" onClick={() => handleCart(product)}>
                    <img src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-cart.png" alt="shopping-cart" />
                    <span>Add to Cart  →</span>
                   </button>
                    )}
                   </div>
                 </div>
             </div>
            ))} 
         </div>
       </div>
       {/* end antivlist */}

    </div>

        
    </div>
  )
}

export default Avast