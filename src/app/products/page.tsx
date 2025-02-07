"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { useRouter } from "next/navigation";

interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  tags?: string[];
  discountPercentage?: number;
  isNew?: boolean;
}

async function getProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    _id,
    title,
    description,
    "imageUrl": productImage.asset->url,
    price,
    tags,
    discountPercentage,
    isNew
  }`;
  return await client.fetch(query);
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    try {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      router.push("/cart");
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Header />

      {/* Page Header Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-4 md:mb-0">
            Our Products
          </h1>
          <div className="hidden md:flex items-center gap-2 text-gray-500">
            <span>Home</span>
            <Image 
              src="/rightarrow.png" 
              alt="arrow" 
              width={16} 
              height={16}
              className="inline-block"
            />
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {products.map((product) => (
            <div
              key={product._id}
              onClick={() => handleAddToCart(product)}
              className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden cursor-pointer"
            >
              <div className="flex flex-col h-full p-4 border border-gray-100 rounded-lg">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 pt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold text-[#252B42]">
                      ${product.price}
                    </span>
                    {product.isNew && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        New
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {product.description}
                  </p>

                  {product.discountPercentage && (
                    <div className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded inline-block">
                      {product.discountPercentage}% OFF
                    </div>
                  )}

                  {/* Product Tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}