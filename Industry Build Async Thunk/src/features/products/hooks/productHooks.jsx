import { useQuery } from "@tanstack/react-query";
import { getAllCategoriesApi, getAllProdsApi, getProdsByCatApi,  } from "../api/productsApis";
import { useEffect, useRef, useState } from "react";

export const useGetAllProds = () => {
  const [search, setSearch] = useState(null);
  const [debounceSearch, setDebounceSearch] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(search);
    }, 700);
    return () => clearTimeout(timer);
  }, [search]);

  const { data, isPending, errors } = useQuery({
    queryKey: ["products", debounceSearch], //ye kind of dependency array h, kyuki tanstack tbhi show krega jb usko rerender milega
    queryFn: () => getAllProdsApi(debounceSearch),
    staleTime: 1000 * 60 * 3,
  });
  //console.log(data);
  return {
    data,
    isPending,
    errors,
    search,
    setSearch,
  };
};
export const useAllCat = () => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.focus();
  }, []);
  
  const { data, isPending, errors } = useQuery({
    queryKey: ["All Categories"],
    queryFn: getAllCategoriesApi,
  });
  //console.log(data)
  return {
    data,
    isPending,
    errors,
    ref,
  };
};
export const useGetProdsByCat = () =>{
    const [category,setCategory] = useState(null)
    //console.log("category : ",category)
    const {data,isPending, isFetching} = useQuery({
        queryKey : ["ProdsByCat",category],
        queryFn : ()=>getProdsByCatApi(category)
    })

    return{data,isPending, isFetching, category,setCategory}
}
