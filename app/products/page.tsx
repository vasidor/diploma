"use client";

import PlaceCardsGrid from "@/components/PlaceCardsGrid";

import Breadcrumbs from "@/utils/breadcrumbs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterCards from "@/components/FilterCards";

import { Button, Card, CardBody, Link, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Category } from "@prisma/client";
import { getCategories } from "@/action/get-categories";
import { link } from "fs";
import { useSearchParams } from "next/navigation";

const ProductsPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        setCategories(res);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при загрузке категорий:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (searchParams) {
      const categoryParam = searchParams.get("category"+1);
      const categoryId = categoryParam ? Number(categoryParam) : 1;

      // Find the category with the matching ID or default to the first category
      const foundCategory = categories.find(cat => cat.id === categoryId) || categories[0];
      setSelectedCategory(foundCategory);
    }
  }, [searchParams, categories]);

  if (loading) {
    return <div>Загрузка...</div>;
  }


  
  return (
    <main>
      <Header />
      <section className="">
        <div>
          <section className="h-60 relative bg-center bg-[url('/slider1.jpg')]">
            <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-40 w-full">
              <h1 className="font-bold text-center text-4xl text-white ">
                {
                  categories.find(
                    (category) =>
                      category.id === Number(searchParams.get("category") ?? 1)
                  )?.name
                }
              </h1>
              <h1 className=" font-semibold text-xl text-primary-200 text-center">
                Закажите то что искали!
              </h1>
            </div>
          </section>
          <section className="max-w-7xl p-4 mx-auto">
            <Breadcrumbs />

            {categories && (
              <PlaceCardsGrid
                category={
                  categories.find(
                    (category) =>
                      category.id === Number(searchParams.get("category") ?? 1)
                  ) ?? categories[0]
                }
              />
            )}
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
};


export default ProductsPage;
