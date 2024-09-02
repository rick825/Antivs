import React, { useState, useEffect } from 'react';
import './Products.css';
import { useProduct } from '../../context/ProductContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Products = () => {
   const navigate = useNavigate();
  const { cart, setCart,setProductToShow } = useProduct();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const [product,setProduct] = useState([
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
      {id:6,name:"Kespersky Internet Security",price:27.05,rating:"3.5",img:"https://5.imimg.com/data5/FO/OB/MY-51056009/kaspersky-internet-security--500x500.jpg"},
      {id:6,name:"AVG Ultimate Antivirus ",price:19.05,rating:"3.5",img:"https://5.imimg.com/data5/ECOM/Default/2023/4/299131465/PL/TB/XD/187171725/avg-ult16n24en-avg-ultimate-2016-1188689-61cabb15-14a9-4b94-80a3-a47a6c14d6fa-500x500.jpg"},
  ]);

  const handleNavigation = (item) =>{
   setProductToShow(item);
   const productName = item.name.toLowerCase();
    if (productName.includes("norton")) {
      navigate('/norton_support/product');
    } else if (productName.includes("mcafee")) {
      navigate('/mcafee_support/product');
    }else if (productName.includes("avast")){
      navigate('/avast_support/product');
    }
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
    <div className='products'>
      <div className="productshead">
        <h2>Products ↓</h2>
      </div>
      <div className="productslist">
        <div className="productlistmain">
          {product.map((item) => (
            <div className="product" key={item.id}>
              <div className="productimg" onClick={()=>handleNavigation(item)}>
                <img src={item.img} alt={item.name} />
              </div>
              <div className="productdetails">
                <h2 onClick={()=>handleNavigation(item)}>{item.name}</h2>
                <p>$ {item.price}</p>
              </div>
              <div className="productbutton">
                <button className="buybutton" onClick={()=>navigate('/payment')}>Buy Now</button>
                {cart.some((prev)=> prev.id === item.id) ?( <button className="addbutton" >Added To Bag ✔</button>):(
                <button className="addbutton" onClick={() => handleCart(item)}>
                  <img src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-cart.png" alt="shopping-cart" />
                  <span>Add to Cart  →</span>
                </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
