import Image from 'next/image';
import BuyNow from '../game-card/utils/BuyNowBtn';
import StarRating from '../game-card/utils/StarRating';
import './product.css';
import { ProductProps } from './productComponent';
const ProductCard = (props:ProductProps)=>{
    const {title,description,price,images,rating} = props
    return (
        <div className='card-container'>
            <div className='card-img'>
            <img className='card-image' src={images?.[0] || '/side_logo.png'}  alt="product image" />
            </div>
            <div className='card-discription'>
                <div className='card-title'>{title || "Title"}</div>
                <StarRating rating = {rating || 4} fillColor="#FF6347" borderColor="#2E2E2E" />
                <div className='card-disc'>
                    {description || 'This is discription'}
                </div>
                <div className='card-btn-container'>
                    <div className='price'>{`$ ${price || 100}`}</div>
                    <div className='buy-btn'>
                        <BuyNow />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;