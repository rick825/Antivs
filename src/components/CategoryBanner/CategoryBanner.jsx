import React, { useState } from 'react';
import './CategoryBanner.css';
import { useNavigate } from 'react-router-dom';

const CategoryBanner = () => {

    const navigate = useNavigate();

    const [antivirus, setAntivirus] = useState([
        { id: '01', name: "Norton", img: "https://media.croma.com/image/upload/v1687940088/Croma%20Assets/Unclassified/Images/267107_rnxeoo.png",route:'/Norton_support' },
        { id: '02', name: "McAfee", img: "https://media.croma.com/image/upload/v1688213450/Croma%20Assets/Miscellanous/Software%20and%20Antivirus/Images/267210_ip13ww.png",route:'/McAfee_support' },
        { id: '03', name: "Avast", img: "https://5.imimg.com/data5/CW/SR/IA/SELLER-64185364/antivirus-software.jpg",route:'/Avast_support' },
        { id: '04', name: "Kaspersky", img: "https://computechstore.in/wp-content/uploads/2023/04/Kaspersky-Total-Security-1.jpg",route:'/kespersky_support' },
    ]);

    const handleNavigation = (path) =>{
       navigate(path);
    }

    return (
        <div className='CategoryBanner'>
            <div className="CategoryBannerhead">
                <h2>Our Products:</h2>
            </div>
            <div className="CategoryBannerMain">
                {antivirus.map((product) => (
                    <div key={product.id} className="CategoryCont" onClick={()=>handleNavigation(product.route)}>
                        <div className="categoryContPic">
                            <img src={product.img} alt={product.name} className="categoryImage" />
                        </div>
                        <div className="categoryContText">
                            <h3>{product.name}</h3>
                            <button>Shop Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryBanner;
