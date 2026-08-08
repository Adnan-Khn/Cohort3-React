import { useContext } from "react";
import { MyStore } from "../context/StoreContext";
import Checkout from "./Checkout";

const Cart = () => {
  const { cartItems, setCartItems, isCheckout ,setIsCheckout} = useContext(MyStore);
  const total = cartItems.reduce((total, prod) => {
    return total + prod.price;
  }, 0);
  console.log(cartItems);
  const handleDelete = (item) => {
    //console.log(item)
    const updatedItems = cartItems.filter((prod) => prod.id !== item.id);
    setCartItems(updatedItems);
  };
  return (
    <>
      {isCheckout && <Checkout total={total} />}
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            Your cart is empty 🛒
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-4"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-gray-100 rounded-lg p-2 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold line-clamp-1">{item.title}</h3>

                    <p className="text-sm text-gray-500 capitalize">
                      {item.category}
                    </p>

                    <p className="text-lg font-bold text-green-600 mt-1">
                      ${item.price}
                    </p>
                  </div>

                  {/* Quantity */}
                  {/* <div className="flex items-center gap-3 border rounded-lg px-3 py-1">
                  <button className="text-lg font-bold">-</button>

                  <span>{item.quantity}</span>

                  <button className="text-lg font-bold">+</button>
                </div> */}

                  {/* Item Total */}
                  {/* <div className="font-semibold min-w-[80px] text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </div> */}

                  {/* Remove Button */}
                  <button
                    className="text-red-500 hover:text-red-700 text-xl"
                    onClick={() => handleDelete(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total</p>
                <h3 className="text-3xl font-bold text-green-600">
                  ${total.toFixed(2)}
                </h3>
              </div>

              <button
                className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
                onClick={() => setIsCheckout(true)}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Cart;
