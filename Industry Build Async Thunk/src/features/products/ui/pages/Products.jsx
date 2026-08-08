import React from "react";
import { useGetAllProds, useGetProdsByCat } from "../../hooks/productHooks";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const Products = () => {
  const { data, isPending, errors, search, setSearch } = useGetAllProds();
  const {
    data: prodsByCat,
    isPending: catsPending,
    isFetching,
    category,
    setCategory,
  } = useGetProdsByCat();
  //console.log(prodsByCat?.products)
  if (isPending || catsPending) return <h1>Loading Products</h1>;
  return (
    <div>
      <Filter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />
      {category ? (
        catsPending ? (
          <ProductSkeletonGrid />
        ) : (
          <div className="grid grid-cols-4 gap-10">
            {prodsByCat?.products?.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        )
      ) : (
        <div className="grid grid-cols-4 gap-10">
          {data?.products?.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
