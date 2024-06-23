"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

import { Button, Card, CardBody, Link, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { link } from "fs";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="relative bg-left-bottom h-screen px-4 sm:px-16 bg-[url('/slider2.jpg')]">
        <div className="flex flex-col items-center justify-center pb-30 w-full max-w-3xl h-full">
          <div className="gap-4 pb-24">
            {/* <h1 className="flex flex-col text-4xl text-balance text-white text-center font-semibold ">
              Печатаем для бизнеса и дома
            </h1> */}
            <h1 className="font-bold sm:text-left text-center text-white uppercase text-5xl sm:text-6xl">
              печатаем натурально, завидует даже природа
            </h1>
          </div>
          <div className="flex mx-auto-none sm:mr-auto gap-4">
            <Button
              color="primary"
              as={Link}
              href="/category "
              className="text-lg font-semibold"
            >
              Заказать печать
            </Button>
            <Button
              color="default"
              as={Link}
              href="#about"
              variant="ghost"
              className="text-lg text-white font-bold "
            >
              О нас
            </Button>
          </div>
        </div>
      </section>
      <section id="about" className="bg-gray-200">
        <div className="pt-12 pb-12 flex justify-between px-4 items-center flex-col lg:flex-row m-auto max-w-5xl">
          <div className="gap-4 flex flex-col items-center p-4">
            <img src="/logo-p.png" alt="" className="" />
            <h1 className="text-xl tracking-widest pb-4">
              Декларация о намерениях
            </h1>
          </div>
          <h1 className="text-lg font-semibold max-w-2xl">
            Центр печати “ПЕЧАТАЕМ” специализируется на наружной и интерьерной
            печати. Печатаем на баннерной ткани, сетке, пленке, бумаге, холсте и
            других материалах. Рады видеть на нашем сайте. Уверен, что Ваше
            появление здесь не случайно. Вы в поиске решений для своих задач, а
            мы ищем интересные и амбициозные проекты, реализацией которых будем
            гордиться вместе. Гарантирую, что наш подход к работе оставит только
            положительные эмоции. Смотрите в разделе услуги возможности ,
            которые будут полезны в решении задач бизнеса.
          </h1>
        </div>
      </section>
      <section className="bg-white">
        <div className="flex items-center justify-center pt-4">
          <h1 className="text-2xl font-bold">Наши приемущества</h1>
        </div>
        <div className="flex px-4 justify-between mx-auto gap-4 h-[300px] items-center max-w-[1024px] ">
          <div className="max-w-sm">
            <h1 className="text-lg font-semibold">11 лет на рынке</h1>
            <h2>
              Каждый пройденный год — это новый опыт, который работает на Вас
            </h2>
          </div>
          <div className="max-w-sm">
            <h1 className="text-lg font-semibold">2 офиса</h1>
            <h2>Нас легко найти в Вологде и Череповце</h2>
          </div>
          <div className="max-w-sm">
            <h1 className="text-lg font-semibold">2000+ клиентов</h1>
            <h2>Нас рекомендуют друзьям и знакомым для развития бизнеса </h2>
          </div>
        </div>
      </section>
      <section className="h-[300px] bg-primary">
        <div className="flex justify-center">
          <Button
            color="secondary"
            as={Link}
            href="/category"
            className="text-lg font-semibold mt-32 scale-150"
          >
            Заказать печать →
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
