import React,{useEffect} from 'react';
import './productPage.css';
import { useProduct } from '../../context/ProductContext';
import { toast } from 'react-toastify';


const ProductPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    const {productToShow,cart, setCart} = useProduct();

    
    const handleCart = (item) => {
        if (!cart.some(bagItem => bagItem.id === item.id)) {
          setCart((prevBag) => [...prevBag, item]);
          toast.success(`${item.name} Added to Cart`);
        } else {
          toast.warning(`${item.name} is already in the Cart`);
        }
      };

  return (
    <div className='productPage'>
      <div className='productImage'>
        <img src={productToShow.img} alt={productToShow.name} />
      </div>
      <div className='productDetails'>
        <h1 className='productName'>{productToShow.name}</h1>
        <p className='productDescription'>{productToShow.desc}</p>
        <p className='productPrice'>${productToShow.price}</p>
        {cart.some((prev)=> prev.id === productToShow.id) ? ( <button className="addToCartButton" >Added To Bag ✔</button>):(
         <button className="addToCartButton" onClick={() => handleCart(productToShow)}>
            <img src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-cart.png" alt="shopping-cart" />
            <span>Add to Cart   →</span>
         </button>
        )}
        <div className="footmidpartners">
        <h2>Our Payment Partners →</h2>
        <div className="footpartnerslist">
        <img  src="https://img.icons8.com/color/50/visa.png" alt="visa"/>
        <img  src="https://img.icons8.com/color/50/mastercard.png" alt="mastercard"/>
        <img  src="https://img.icons8.com/color/50/discover.png" alt="discover"/>
        <img src="https://img.icons8.com/fluency/48/jcb.png" alt="jcb" />
        <img  src="https://img.icons8.com/color/50/paypal.png" alt="paypal"/>
        </div>
       </div>
      </div>
      
    </div>
  );
}

export default ProductPage;
