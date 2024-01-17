'use client'
import React, { useEffect, useState } from 'react'
import './product.css'
import ProductCard from './productCard';

export interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }

const ProductComponent = ()=>{
    const [data,setData] = useState([])

    useEffect(()=>{
        const fetchProduct = async()=>{
            const res = await fetch('https://dummyjson.com/products')
            const result = await res.json()
            if(result.products) {
                setData(result.products)
            }
        }
        // fetchProduct()
    },[])
    return (
        <div className="main-product-container">
            <div className='product-heading-container'>
                <div className='product-heading'>MOST TRENDING</div>
                <div className='all-btn'>View All</div>  
            </div>
            <div className='all-product-container'>
                {
                    data.map((ele:ProductProps)=>{
                        return (
                            <ProductCard
                                key={ele?.id}
                                {...ele}
                            />
                        )
                    })
                }
                
            </div>
            
        </div>
    )
}
export default ProductComponent;