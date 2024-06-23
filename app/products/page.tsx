"use client"

import PlaceCardsGrid from "@/components/PlaceCardsGrid";

import Breadcrumbs from "@/utils/breadcrumbs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";

import { Button, Card, CardBody, Link, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Category } from "@prisma/client";
import { getCategories } from "@/action/get-categories";
import { link } from "fs";

const ProductsPage = () => {
  
  
  return (
    <main>
      
      <Header />
      <section className="px-4">
        <div className="w-full max-w-7xl mx-auto">
        <section className="h-60 w-full relative bg-center bg-[url('/slider1.jpg')]">
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-40 w-full">
          <h1 className="mx-4 font-bold text-4xl text-white ">Список услуг</h1>
          <h1 className="mx-4 font-semibold text-xl text-primary-200 text-center">Закажите то что искали!</h1>
        </div>
      </section>
      
          <Breadcrumbs />
        </div>
        
        <div>
          <PlaceCardsGrid />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ProductsPage;
