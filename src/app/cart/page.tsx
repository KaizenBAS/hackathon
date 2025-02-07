"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

const COLORS = ["#EF4444", "#3B82F6", "#10B981", "#F59E0B"];

export default function CartPage() {
  const [product, setProduct] = useState<any>(null);
  const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const storedProduct = localStorage.getItem("selectedProduct");
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
  }, []);

  if (!product) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            {/* Main Image Container */}
            <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            
            {/* Thumbnail Row */}
            <div className="flex gap-4 overflow-x-auto pb-4">
              {[1, 2, 3, 4].map((num) => (
                <div 
                  key={num}
                  className="relative min-w-[80px] aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-transparent hover:border-gray-300 transition-all"
                >
                  <Image
                    src={product.imageUrl}
                    alt={`Thumbnail ${num}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 w-full space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-light text-gray-900">{product.title}</h1>
              <p className="text-2xl font-medium text-gray-900">${product.price}</p>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500">Color</h3>
              <div className="flex gap-3">
                {COLORS.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full transition-all ${
                      selectedColor === color ? 'ring-2 ring-gray-900 ring-offset-2' : ''
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500">Quantity</h3>
              <div className="flex items-center gap-4 w-fit border rounded-lg p-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  -
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className="w-full py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              onClick={() => {
                const cartItem = { ...product, quantity, selectedColor };
                localStorage.setItem("cartItem", JSON.stringify(cartItem));
              }}
            >
              Add to Cart
            </button>

            {/* Product Info */}
            <div className="space-y-6 pt-8 border-t border-gray-100">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">DESCRIPTION</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">DETAILS</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>High-quality materials</li>
                  <li>Easy 30-day returns</li>
                  <li>Free standard shipping</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}