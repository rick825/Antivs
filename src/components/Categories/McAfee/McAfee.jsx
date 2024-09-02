import React, { useState } from 'react'
import './McAfee.css'
import '../Categories.css'
import { useProduct } from '../../../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLocalContext } from '../../../context/LocalProvider';


const McAfee = () => {

    const {cart, setCart ,setProductToShow } = useProduct();
    const navigate = useNavigate();
    const {phone} = useLocalContext();

    const [product, setProduct] = useState([
        {
          id: "001",
          name: "McAfee Antivirus Basic",
          desc: "Comprehensive Protection Against Viruses and Malware. Shield your PC and data with our powerful blend of performance accuracy and strengthened protections that thwart cybercriminals.",
          price: "44.99",
          img: "https://i5.walmartimages.com/asr/90444650-f8ce-4948-a3dc-c13746f8e67c_1.f67a9157cafca47895910f565f77faad.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
        },
        {
            id: "002",
            name: "McAfee Antivirus Standard",
            desc: "Powerful PC Protection: Safeguard yourself from Trojans, viruses, spyware, rootkits, and more with cutting-edge anti-malware defense. Advanced scanning engine ensures thorough threat checks without compromising battery performance.",
            price: "59.99",
            img: "https://rukminim1.flixcart.com/image/416/416/kbl4cy80/digital-security-softwr/2/3/y/1-pc-standard-edition-3-years-3-years-anti-virus-mcafee-latest-original-imafswaryjahnngz.jpeg?q=70"
        },
        {
          id: "003",
          name: "McAfee Internet Security",
          desc: "Stay secure online with McAfee Internet Security. This package includes a robust firewall, anti-spam features, and secure browsing tools to protect your identity and online transactions. Perfect for avid internet users.",
          price: "69.99",
          img: "https://images-na.ssl-images-amazon.com/images/I/51-2E%2BfVLQL._AC_SL1000_.jpg"
        },
        {
          id: "004",
          name: "McAfee Total Protection",
          desc: "McAfee Total Protection offers powerful PC protection, including McAfee ActiveProtection™ and NetGuard™ technology to keep zero-day threats and botnets at bay. Additionally, it includes a spam and dangerous email filter to keep your inbox safe and parental controls to block inappropriate sites and set time limits for internet use.",
          price: "99.99",
          img: "https://media.croma.com/image/upload/v1688213450/Croma%20Assets/Miscellanous/Software%20and%20Antivirus/Images/267210_ip13ww.png"
        },
        {
          id: "005",
          name: "McAfee Total Protection Premium",
          desc: "Includes all features of McAfee Total Protection along with additional tools for enhanced identity protection and secure cloud storage. Ideal for families and professionals needing advanced digital security.",
          price: "129.99",
          img: "https://www.isoftprotect.com/wp-content/uploads/2022/12/McAfee-Total-Protection-1-Device.jpg"
        },
        {
            id: "006",
            name: "McAfee LiveSafe",
            desc: "Protect all your devices with McAfee LiveSafe. Offering comprehensive protection for your PCs, Macs, smartphones, and tablets, this product provides secure cloud storage and password management to ensure your personal information remains safe.",
            price: "89.99",
            img: "https://instantdigi.com/wp-content/uploads/2020/05/mcafee-livesafe.png"
          },
          {
            id: "007",
            name: "McAfee Gamer Security",
            desc: "Built for gamers, McAfee Gamer Security offers lightweight, low-impact security that won’t slow down your gaming experience. It includes game boosters and advanced anti-cheat technologies, allowing you to enjoy safe and uninterrupted gaming sessions.",
            price: "79.99",
            img: "https://www.colormango.com/security-software/s_boxshot/mcafee-gamer-security_151544.png"
          },
        
      ]);

      const handleNavigation = (value) =>{
        navigate('/McAfee_support/product')
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
    <div className='antiv mcafee'>
        <div className="antivMain">
        {/* antiv Banner */}
        <a href={`tel:${phone}`}><div className="antivBanner">
                <div className="antivBannerLeft">
                  <div className="antivsupport">
                    <h2>McAfee Antivirus Support :</h2>
                    <div className="customersupportbox">
                      <h3>24 / 7 Customer Support ↓</h3> 
                      <a href={`tel:${phone}`}>{phone}</a>
                    </div>
                  </div>
                </div>
                <div className="antivBannerRight">
                   <div className="antivpic">
                    <img src="https://media.croma.com/image/upload/v1688213450/Croma%20Assets/Miscellanous/Software%20and%20Antivirus/Images/267210_ip13ww.png" alt=""/>
                   </div>
                </div>
            </div>
           </a>
        {/* end antiv Banner */}
        {/* antivlist */}
       <div className="antivlist">
         <div className="antivlisthead">
            <h2>McAfee Antivirus ↓</h2>
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

export default McAfee