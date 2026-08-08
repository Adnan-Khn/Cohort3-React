import { useContext } from "react";
import { MyStore } from "../context/StoreContext";

const Cart = () => {
  const { cartItems,handleIncrement,handleDecrement,handleRemove } = useContext(MyStore);
  //console.log("Cart=>",cartItems)
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="bg-zinc-900 rounded-xl p-10 text-center">
          <h2 className="text-2xl font-semibold text-zinc-300">
            Your cart is empty 🛒
          </h2>
          <p className="text-zinc-500 mt-2">
            Add some products to get started.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-900 rounded-xl p-4 flex gap-4 items-center shadow-lg"
              >
                <div className="w-28 h-28 bg-white rounded-lg p-2 flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="font-semibold text-lg line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-zinc-400 text-sm mt-1 capitalize">
                    {item.category}
                  </p>

                  <p className="text-green-400 font-bold text-xl mt-3">
                    ${item.price}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3 bg-zinc-800 rounded-lg px-3 py-2">
                    <button className="text-xl hover:text-red-400 cursor-pointer" onClick={() => handleDecrement(item.id)}>-</button>

                    <span>{item.quantity}</span>

                    <button className="text-xl hover:text-green-400 cursor-pointer" onClick={() => handleIncrement(item.id)}>+</button>
                  </div>

                  <button className="text-red-400 hover:text-red-500 text-sm" onClick = {()=>handleRemove(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-zinc-900 rounded-xl p-6 h-fit sticky top-4">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-3 text-zinc-300">
              <div className="flex justify-between">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr className="border-zinc-700" />

              <div className="flex justify-between text-xl font-bold text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-white text-black py-3 rounded-lg font-semibold hover:bg-zinc-200 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart