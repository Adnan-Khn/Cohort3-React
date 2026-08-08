import { useContext } from "react";
import { MyStore } from "../context/StoreContext";

const Checkout = ({total}) => {
  const { cartItems } = useContext(MyStore);

  const shipping = total > 100 ? 0 : 10;
  const tax = total * 0.18;
  const subtotal = total + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* Billing Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-3xl font-bold mb-6">
            Checkout
          </h2>

          <form className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black md:col-span-2"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black md:col-span-2"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Shipping Address
              </h3>

              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Street Address"
                  className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                />

                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                  />

                  <input
                    type="text"
                    placeholder="State"
                    className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                  />

                  <input
                    type="text"
                    placeholder="ZIP Code"
                    className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Payment Details
              </h3>

              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                  />

                  <input
                    type="text"
                    placeholder="CVV"
                    className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
            </div>

            <button
              className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-5">
          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain bg-gray-100 rounded-lg p-2"
                />

                <div className="flex-1">
                  <h4 className="font-medium line-clamp-1">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t mt-6 pt-6 space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>
                {shipping === 0 ? "Free" : `$${shipping}`}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="border-t pt-3 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;