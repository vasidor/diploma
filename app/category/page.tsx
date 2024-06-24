"use client";

import PlaceCardsGrid from "@/components/PlaceCardsGrid";
import Breadcrumbs from "@/utils/breadcrumbs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Button, Card, CardBody, Link, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Category } from "@prisma/client";
import { getCategories } from "@/action/get-categories";
import { link } from "fs";

const CategoryPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await getCategories();
        setCategories(res);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, []);

  return (
    <main>
      <Header></Header>
      <section className="h-60 w-full relative bg-center bg-[url('/slider3.jpg')]">
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-40 w-full">
          <h1 className="mx-4 font-bold text-4xl text-white ">Наши услуги</h1>
          <h1 className="mx-4 font-semibold text-xl text-primary-200 text-center">
            Здесь вы можете выбрать интересную вам продукцию
          </h1>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-4 w-full max-w-7xl mx-auto">
          {loading &&
            Array(10)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="relative flex flex-col w-full bg-default-100 rounded-md shadow-sm overflow-hidden"
                >
                  <div className="flex flex-col gap-3 p-4">
                    <div className="w-full h-6 bg-gray-300 rounded-md animate-pulse"></div>
                    <div className="flex-1 bg-gray-300 rounded-md animate-pulse"></div>
                  </div>
                </div>
              ))}
          {categories.map((data) => (
            <Link href={`/products/?category=${data.id}`} key={data.id}>
              <div className="relative flex flex-col w-full bg-default-100 rounded-md shadow-sm overflow-hidden">
                <div className="flex flex-col gap-3 p-4">
                  <h3 className="text-center font-medium text-lg text-gray-800 truncate">
                    {data.name}
                  </h3>
                  <div className="flex-1 rounded-md overflow-hidden">
                    <img
                      src={data.imageUrl ?? ""}
                      alt={data.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CategoryPage;
