import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="group w-full rounded-2xl overflow-hidden bg-taupe-100 border border-taupe-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      
      {/* Image */}
      <div className="bg-taupe-200 h-64 flex items-center justify-center overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-6 group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Brand & Category */}
        <div className="flex justify-between items-center text-xs uppercase tracking-wider text-taupe-500 mb-2">
          <span>{product.brand}</span>
          <span>{product.category}</span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-taupe-900 line-clamp-2 min-h-14">
          {product.title}
        </h2>

        {/* Rating & Stock */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium text-taupe-700">
              {product.rating}
            </span>
          </div>

          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              product.stock > 0
                ? "bg-taupe-800 text-taupe-100"
                : "bg-red-600 text-white"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-end gap-3 mt-5">
          <span className="text-2xl font-bold text-taupe-900">
            ${discountedPrice}
          </span>

          <span className="text-sm line-through text-taupe-500">
            ${product.price}
          </span>

          <span className="ml-auto text-sm font-semibold text-taupe-700">
            -{product.discountPercentage.toFixed(0)}%
          </span>
        </div>

        {/* Button */}
        <button className="w-full mt-6 py-3 rounded-xl bg-taupe-900 text-taupe-100 font-medium hover:bg-taupe-700 transition cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;