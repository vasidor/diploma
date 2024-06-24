"use client";

import { useEffect, useState } from "react";
import CardItem from "../Card";
import { getProducts } from "@/action/get-products";
import { Product } from "@/types";
import type { Category } from "@prisma/client";

const PlaceCardsGrid = ({ category }: { category: Category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts({ category: category });
        setProducts(res);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="w-full max-w-7xl grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
      {products.map((product) => (
        <CardItem
          key={product.handle}
          handle={product.handle}
          title={product.title}
          description={product.description}
          rating={1}
          price={1}
          images={product.imageUrl}
        />
      ))}
      {loading &&
        Array(10)
          .fill(0)
          .map((_, index) => (
            <CardItem
              key={index}
              handle={"skeleton"}
              title={"Lorem Lorem Lorem"}
              price={999999}
              images={[]}
              isLoading
            />
          ))}
    </div>
  );
};

export default PlaceCardsGrid;
