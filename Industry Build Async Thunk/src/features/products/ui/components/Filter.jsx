import React from "react";
import { useAllCat } from "../../hooks/productHooks";

const Filter = ({ search, setSearch, category,setCategory }) => {
  const { data, isPending, errors, ref } = useAllCat();

  //console.log(data)
  if (isPending) return <h3>Loading Categories</h3>;
  return (
    <div className="mb-8 flex items-center justify-between gap-4 rounded-lg bg-taupe-100 p-4 shadow md:flex-row text-taupe-700">
      {/* Search */}
      <div className="flex flex-1">
        <input
          type="text"
          ref={ref}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-lg border border-taupe-700 px-4 py-2.5 outline-none transition focus:border-taupe-500 focus:ring-3 focus:ring-taupe-300"
        />
      </div>

      {/* Category Select */}
      <div className="w-full md:w-60">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-taupe-700 bg-taupe-100 px-4 py-2.5 outline-none transition focus:border-taupe-500 focus:ring-3 focus:ring-taupe-300"
        >
          <option value="">All Categories</option>

          {data.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
