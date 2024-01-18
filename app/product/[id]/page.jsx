'use client'
import useFetchData from "@/app/component/game-card/utils/fetchData";
import styles from "../../component/navigation/Navigation.module.css";
import ProductCard from "@/app/component/product/productCard";
export default function Page({params}) {
    const {error, data, loading} = useFetchData(`https://dummyjson.com/products/${params?.id || 1}`)
    return(
        <div className={styles.productContainer}>
            {
                !error && loading && <p>Loading....</p>
            }
            {
                !error && !loading && <ProductCard {...data} />
            }
        </div>
    )
}