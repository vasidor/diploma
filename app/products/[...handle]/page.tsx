"use client";

import { getProduct } from "@/action/get-product";
import Breadcrumbs from "@/utils/breadcrumbs";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const ProductPage = ({ params }: { params: { handle: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProduct({ handle: params.handle });
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (params.handle) {
      fetchProduct();
    }
  }, [params.handle]);

  if (!product) {
    return <p>Загрузка...</p>; // или индикатор загрузки
  }
  
  return (
    <div>
      <Header></Header>

      <section className="h-60 relative bg-right bg-[url('/tigres.png')]">
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-40 w-full">
          <h1 className="font-bold text-center text-6xl text-white ">
            {product?.title}
          </h1>
        </div>
      </section>
      <section className="max-w-7xl p-4 mx-auto">
        <Breadcrumbs />
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="p-4">
              <h1 className="text-xl font-semibold pb-4">{product?.title}</h1>
              <h2 className="text-lg text-justify pb-4">
                {product?.description}
              </h2>
              <div className="flex justify-center">
                <div className="bg-gray-100 rounded-lg">
                  <div className="pb-4">
                    <ContactForm />
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 mt-4 border-secondary">
                <div className="text-center text-lg font-semibold">
                  Галлерея
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 m-2">
                  <img
                    src="https://pechataem35.ru/wp-content/uploads/2017/05/EiaJptjm45Q-270x197.jpg"
                    alt=""
                    className="w-full h-autotransform hover:scale-150 transition-transform duration-100 ease-in-out"
                  />
                  <img
                    src="https://pechataem35.ru/wp-content/uploads/2017/05/KjCGgGkkfNI-270x197.jpg"
                    alt=""
                    className="w-full h-autotransform hover:scale-150 transition-transform duration-100 ease-in-out"
                  />
                  <img
                    src="https://pechataem35.ru/wp-content/uploads/2017/05/mNDpTXwREXA-270x197.jpg"
                    alt=""
                    className="w-full h-autotransform hover:scale-150 transition-transform duration-100 ease-in-out"
                  />
                  <img
                    src="https://pechataem35.ru/wp-content/uploads/2017/05/PfkyN3MwF0E-270x197.jpg"
                    alt=""
                    className="w-full h-autotransform hover:scale-150 transition-transform duration-100 ease-in-out"
                  />
                  <img
                    src="https://pechataem35.ru/wp-content/uploads/2017/05/wAUOMGIWhGs-270x197.jpg"
                    alt=""
                    className="w-full h-autotransform hover:scale-150 transition-transform duration-100 ease-in-out"
                  />
                  <img
                    src="https://pechataem35.ru/wp-content/uploads/2017/05/ZsxrWNLLP1M-270x197.jpg"
                    alt=""
                    className="w-full h-autotransform hover:scale-150 transition-transform duration-100 ease-in-out"
                  />
                  <img
                    src="https://pechataem35.ru/wp-content/uploads/2017/05/b25O_rZhvWw-270x197.jpg"
                    alt=""
                    className="w-full h-autotransform hover:scale-150 transition-transform duration-100 ease-in-out"
                  />
                  <img
                    src="https://pechataem35.ru/wp-content/uploads/2017/05/DQlwah9mwKE-270x197.jpg"
                    alt=""
                    className="w-full h-autotransform hover:scale-150 transition-transform duration-100 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default ProductPage;
