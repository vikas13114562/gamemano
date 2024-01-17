"use client";
import FilterComponent from "../component/product/filter";
import styles from "../component/navigation/Navigation.module.css";
import useFetchData from "../component/game-card/utils/fetchData";
import { ProductProps } from "../component/product/productComponent";
import ProductCard from "../component/product/productCard";
import { useState } from "react";
export default function Page() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const { data, loading } = useFetchData(
    "https://dummyjson.com/products/categories"
  );
  const product = useFetchData("https://dummyjson.com/products");

  return (
    <div className={styles.productContainer}>
      <div className={styles.filterDiv}>
        <FilterComponent
          categories={data}
          loading={loading}
          setSelectedCategories={setSelectedCategories}
          setFilteredData={setFilteredData}
        />
      </div>
      {product.loading ? (
        <p>Loading....</p>
      ) : (
        <div className={styles.filteredDataDivContainer}>
          <div className={styles.topDiv}>
            <div className={styles.topDivText}>
              <div>{`Search results for ${
                selectedCategories.length !== 0
                  ? selectedCategories.join(", ")
                  : "All Categories"
              }`}</div>
              <div style={{ fontSize: "12px" }}>
                {filteredData.length === 0
                  ? `${product?.data?.products?.length} result${
                      product?.data?.products?.length !== 1 ? "s" : ""
                    } found`
                  : `${filteredData.length} result${
                      filteredData.length !== 1 ? "s" : ""
                    } found`}
              </div>
            </div>
            <div className={styles.topDivPop}></div>
          </div>

          <div className={styles.filteredDataDiv}>
            {(
              (filteredData.length == 0
                ? product?.data?.products
                : filteredData) || []
            ).map((ele: ProductProps) => {
              return <ProductCard key={ele?.id} {...ele} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
