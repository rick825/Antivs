import React, { useState } from 'react'
import './Norton.css'
import '../Categories.css'
import { useProduct } from '../../../context/ProductContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useLocalContext } from '../../../context/LocalProvider'


const Norton = () => {

    const {cart, setCart, setProductToShow} = useProduct();
    const navigate = useNavigate();
    const {phone} = useLocalContext();

    const [product, setProduct] = useState([
        {
          id: "009",
          name: "Norton AntiVirus Plus",
          desc: "Basic protection for your PC or Mac. Norton AntiVirus Plus offers real-time threat protection against existing and emerging malware, including ransomware and viruses. It also includes a smart firewall to safeguard your personal data and device.",
          price: "39.99",
          img: "https://media.croma.com/image/upload/v1687940088/Croma%20Assets/Unclassified/Images/267107_rnxeoo.png"
        },
        {
          id: "010",
          name: "Norton 360 Standard",
          desc: "Comprehensive security for one device. Norton 360 Standard includes real-time protection against malware, a VPN for online privacy, a password manager, and a smart firewall. Plus, it offers 10GB of secure PC cloud backup to help prevent data loss.",
          price: "31.99",
          img: "https://smartsoft.co.in/wp-content/uploads/2022/04/Norton-360-Standard-1-device-36-months.jpg"
        },
        {
          id: "011",
          name: "Norton 360 Deluxe",
          desc: "Advanced security for multiple devices. Norton 360 Deluxe provides real-time protection for up to 5 devices, including PCs, Macs, smartphones, and tablets. It includes a VPN, dark web monitoring, 50GB of secure cloud backup, and parental controls.",
          price: "94.99",
          img: "https://mydigitallicense.com/wp-content/uploads/2024/07/file-25.png"
        },
        {
          id: "012",
          name: "Norton 360 Premium",
          desc: "Premium protection for the entire family. Norton 360 Premium covers up to 10 devices and includes all features of Norton 360 Deluxe, along with 75GB of secure cloud backup. It also offers additional layers of security for online privacy and identity theft protection.",
          price: "99.99",
          img: "https://www.licencedeals.com/cdn/shop/products/Norton-Security-360-Premium-10Users-1Year-download-digital-licence_700x700.png?v=1607108398"
        },
        {
          id: "013",
          name: "Norton 360 with LifeLock Select",
          desc: "Comprehensive security and identity protection. Norton 360 with LifeLock Select offers all the features of Norton 360 Premium plus LifeLock identity theft protection. It monitors your personal information for threats and helps restore your identity if it’s stolen.",
          price: "179.99",
          img: "https://5.imimg.com/data5/SELLER/Default/2022/9/DX/HH/OA/107027156/norton-360-lifelock-5-devices-500x500-1--500x500.png"
        },
        {
          id: "014",
          name: "Norton Family",
          desc: "Keep your kids safer online. Norton Family helps protect your kids from online dangers with tools that allow you to monitor their online activities, block harmful content, and set screen time limits. It's an ideal solution for families looking to create a safer internet experience for their children.",
          price: "49.99",
          img: "https://assetscdn1.paytm.com/images/catalog/product/D/DI/DIGNORTON-FAMILBOX-10720238B3479D6/1579864320783_0.jpg?imwidth=540&impolicy=hq"
        },
        {
          id: "015",
          name: "Norton Small Business",
          desc: "Security solutions for small businesses. Norton Small Business provides powerful protection for up to 20 devices, including PCs, Macs, smartphones, and tablets. It offers advanced threat detection and response capabilities to secure business data and ensure safe online transactions.",
          price: "109.99",
          img: "https://www.antivirusaz.com/web-images/box/nsb-200.png"
        }
      ]);

      const handleNavigation = (value) =>{
        navigate('/Norton_support/product')
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
    <div className='antiv norton'>
        <div className="antivMain">
        {/* antiv Banner */}
        <a href={`tel:${phone}`}><div className="antivBanner">
                <div className="antivBannerLeft">
                  <div className="antivsupport">
                    <h2>Norton Antivirus Support :</h2>
                    <div className="customersupportbox">
                      <h3>24 / 7 Customer Support ↓</h3> 
                      <a href={`tel:${phone}`}>{phone}</a>
                    </div>
                  </div>
                </div>
                <div className="antivBannerRight">
                   <div className="antivpic">
                    <img src="https://media.croma.com/image/upload/v1687940088/Croma%20Assets/Unclassified/Images/267107_rnxeoo.png" alt=""/>
                   </div>
                </div>
            </div>
           </a>
        {/* end antiv Banner */}
        {/* antivlist */}
       <div className="antivlist">
         <div className="antivlisthead">
            <h2>Norton Antivirus ↓</h2>
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

export default Norton