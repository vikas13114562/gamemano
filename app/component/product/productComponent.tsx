'use client'
import React, { useEffect, useState } from 'react'
import './product.css'
import ProductCard from './productCard';
import useFetchData from '../game-card/utils/fetchData';
import { useRouter } from 'next/navigation';

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
        const {loading,data} = useFetchData("https://dummyjson.com/products")
        
        const router = useRouter()
        const handleClick = ()=>{
            router.push(`/product`)
        }
    return (
        <div className="main-product-container">
            <div className='product-heading-container'>
                <div className='product-heading'>MOST TRENDING</div>
                <div className='all-btn' style={{cursor:'pointer'}}
                    onClick={handleClick}
                >View All Product</div>  
            </div>
            <div className='all-product-container'>
                {
                    loading ? <p>Loading....</p>:
                    ((data?.products).slice(0,4) ||[]).map((ele:ProductProps)=>{
                        return (
                            <ProductCard
                                key={ele?.id}
                                data = {ele}
                            />
                        )
                    })
                }
                
            </div>
            
        </div>
    )
}
export default ProductComponent;