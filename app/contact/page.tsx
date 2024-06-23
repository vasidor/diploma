"use cleint";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button, Card, CardBody, Link, Skeleton } from "@nextui-org/react";

const contacts = () => {
  return (
    <main>
      <Header />
      <section className="flex h-screen pt-48 gap-6 justify-berween mx-auto pb-20 max-w-3xl">
        <div className="flex">
          <img className="h-40 w-40" src="/logo.png" alt="" />
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-lg font-semibold">Контакты</h1>
          <div className="flex flex-col p-4 gap-4">
            <h2>Телефон: +7 (8172) 507-501</h2>
            <h2>Email: info@pechataem35.ru</h2>
            <h2>Адрес: г. Вологда, ул. Зосимовская, д. 9Б, офис 11</h2>
          </div>
        </div>
      </section>
      <Footer />
      
    </main>
  );
};

export default contacts;
