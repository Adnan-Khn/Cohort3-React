import { useContext } from "react";
import { MyStore } from "../context/StoreContext";

const ProductCard = ({ product, isInCart }) => {
  const { setCartItems,handleDecrement,handleIncrement } = useContext(MyStore);
  //console.log(isInCart)
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between">
      {/* Product Image */}
      <div className="h-72 bg-gray-100 p-6 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Category */}
        <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-500">⭐</span>
          <span className="font-medium">{product.rating.rate}</span>
          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price and Button */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
          {isInCart ? (
            <button className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 transition flex gap-5">
              <span className="cursor-pointer" onClick={()=>handleDecrement(product.id)}>-</span>
              <span>{isInCart.quantity}</span>
              <span className="cursor-pointer" onClick={()=>handleIncrement(product.id)}>+</span>
            </button>
          ) : (
            <button
              className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 transition cursor-pointer"
              onClick={() => setCartItems((prev) => [...prev, {...product,quantity:1}])}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
