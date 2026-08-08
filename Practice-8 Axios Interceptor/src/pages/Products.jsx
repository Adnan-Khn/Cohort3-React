import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstance";

const Products = () => {
  const [products,setProducts] = useState([])

  const getProducts = async()=>{
    try{
      let res = await axiosInstance.get("/products")
      setProducts(res.data)
    }catch(err){
      console.log("Error in product api: ",err)
    }
  }
  useEffect(()=>{
    getProducts()
  },[])
  return <div>
    {products.map((prod)=>
      <ProductCard key={prod.id} product={prod}/>
    )}
  </div>;
};

export default Products;
