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
          <h1 className="mx-4 font-semibold text-xl text-primary-200 text-center">Здесь вы можете выбрать интересную вам продукцию</h1>
        </div>
      </section>
      <section>
        
        <div className="w-full max-w-7xl pt-10 grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-auto">
          {loading &&
            Array(6)
              .fill(0)
              .map((_, index) => (
                <Card
                  key={index}
                  radius="sm"
                  shadow="sm"
                  className="relative flex w-full max-w-xs flex-none bg-default-100 rounded-md shadow-sm"
                >
                  <CardBody className="relative flex flex-col gap-3">
                    <Skeleton className="w-full h-6 rounded-md"></Skeleton>
                    <Skeleton className="w-full aspect-square rounded-md"></Skeleton>
                  </CardBody>
                </Card>
              ))}
          {categories.map((data) => (
            <Link href={`/products/?category=${data.id}`} key={data.id}>
              <Card
                radius="sm"
                shadow="sm"
                className="relative flex w-full max-w-xs flex-none bg-default-100 rounded-md shadow-sm"
              >
                <CardBody className="relative flex flex-col gap-3">
                  <h3 className="text-center font-medium text-lg text-gray-800">
                    {data.name}
                  </h3>
                  <div className="w-full aspect-square rounded-md">
                    <img
                      src={data.imageUrl ?? ""}
                      alt={data.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CategoryPage