import { useContext } from "react";
import { MyStore } from "../context/StoreContext";

const ProdCard = ({ product }) => {
  const  {setCartItems} = useContext(MyStore);
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition duration-300">
      
      {/* Product Image */}
      <div className="h-64 bg-gray-100 p-6 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full mb-3 capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-14">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-3 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-4">
          <span className="text-yellow-500">⭐</span>
          <span className="ml-1 text-sm font-medium">
            {product.rating.rate}
          </span>
          <span className="ml-2 text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          onClick={()=>setCartItems((prev)=>[...prev,product])}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProdCard;
