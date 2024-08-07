"use client";
import FilterComponent from "../component/product/filter";
import styles from "../component/navigation/Navigation.module.css";
import useFetchData from "../component/game-card/utils/fetchData";
import { ProductProps } from "../component/product/productComponent";
import ProductCard from "../component/product/productCard";
import { useEffect, useState } from "react";
import CustomSelect from "../component/game-card/utils/CustomSelect";
import AccordionUsage from "../component/game-card/utils/Accordion";
export default function Page() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const { data, loading } = useFetchData(
    "https://dummyjson.com/products/categories"
  );
  const product = useFetchData("https://dummyjson.com/products");

  useEffect(()=>{
    let temp = filteredData?.length === 0 ? (product?.data?.products || []) : filteredData
    if(selectedOption === "Price : Low to High"){
      let res = temp?.slice()?.sort((a:any, b:any) => a?.price - b?.price)
      setFilteredData(res)
    }if(selectedOption === "Price : High to Low"){
      let res = temp?.slice()?.sort((a:any, b:any) => b?.price - a?.price)
      setFilteredData(res)
    }

  },[selectedOption])

  return (
    <div className={styles.productContainer}>
      <div className={styles.accordionDiv}>
        <AccordionUsage
          categories={data ? data?.map((item:any)=>item?.name) : []} 
          loading={loading}
          setSelectedCategories={setSelectedCategories}
          setFilteredData={setFilteredData}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className={styles.filterDiv}>
        <FilterComponent
         categories={data ? data?.map((item:any)=>item?.name) : []} 
          loading={loading}
          setSelectedCategories={setSelectedCategories}
          setFilteredData={setFilteredData}
          setSelectedOption={setSelectedOption}
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
                {filteredData?.length === 0
                  ? `${product?.data?.products?.length} result${
                      product?.data?.products?.length !== 1 ? "s" : ""
                    } found`
                  : `${filteredData?.length} result${
                      filteredData?.length !== 1 ? "s" : ""
                    } found`}
              </div>
            </div>
            <div className={styles.topDivPop}>
              <CustomSelect selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            </div>
          </div>

          <div className={styles.filteredDataDiv}>
            {(
              (filteredData?.length == 0
                ? product?.data?.products
                : filteredData) || []
            ).map((ele: ProductProps) => {
              return <ProductCard key={ele?.id} data={ele} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
