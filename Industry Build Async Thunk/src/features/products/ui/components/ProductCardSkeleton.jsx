const ProductCardSkeleton = () => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-taupe-200 bg-taupe-50 shadow-sm">
      {/* Image */}
      <div className="h-64 w-full animate-pulse bg-taupe-200" />

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Brand + Category */}
        <div className="flex justify-between">
          <div className="h-3 w-16 animate-pulse rounded bg-taupe-200" />
          <div className="h-3 w-20 animate-pulse rounded bg-taupe-200" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-4/5 animate-pulse rounded bg-taupe-200" />
          <div className="h-5 w-3/5 animate-pulse rounded bg-taupe-200" />
        </div>

        {/* Rating + Stock */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-14 animate-pulse rounded bg-taupe-200" />
          <div className="h-6 w-16 animate-pulse rounded-full bg-taupe-200" />
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <div className="h-7 w-20 animate-pulse rounded bg-taupe-300" />
          <div className="h-4 w-14 animate-pulse rounded bg-taupe-200" />
          <div className="ml-auto h-4 w-10 animate-pulse rounded bg-taupe-200" />
        </div>

        {/* Button */}
        <div className="h-11 w-full animate-pulse rounded-xl bg-taupe-300" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;