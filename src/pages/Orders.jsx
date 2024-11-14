// import React from 'react'

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency, cartItems } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="">
        {
          // Mapiramo kroz stavke iz korpe
          Object.keys(cartItems).map((itemId,) => {
            const product = products.find((product) => product._id === itemId);

            return (
              // Mapiramo kroz sve veličine i količine za određeni proizvod
              Object.keys(cartItems[itemId]).map((size) => (
                <div className="py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4" key={`${itemId}-${size}`}>
                  <div className="flex items-start gap-6 text-sm">
                    <img src={product.image[0]} className="w-16 sm:w-20" alt={product.name} />
                    <div>
                      <p className="sm:text-base font-medium">{product.name}</p>
                      <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                        <p className="text-lg">{currency}{product.price}</p>
                        <p>Quantity: {cartItems[itemId][size]}</p>
                        <p>Size: {size}</p>
                      </div>
                      {/* <p className="mt-2">Date: <span className="text-gray-400">25. Jul. 2024</span></p> */}
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-between">
                    <div className="flex items-center gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                      <p className="text-sm md:text-base">Ready to ship</p>
                    </div>
                    <button className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
                  </div>
                </div>
              ))
            );
          })
        }
      </div>
    </div>
  );
};

export default Orders;
