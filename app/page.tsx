"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import Icon from "@/lib/IconSprite";

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
      <section id="about" className="bg-gray-100">
        <div className="pt-12 pb-12 flex justify-between px-4 items-center flex-col lg:flex-row m-auto max-w-5xl">
          <div className="gap-4 flex flex-col items-center p-4">
            <img src="/logo-p.png" alt="" className="" />
            <h1 className="text-lg tracking-widest pb-4">
              Декларация о намерениях
            </h1>
          </div>
          <h1 className="text-lg text-justify font-semibold max-w-2xl">
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
      <div className="sec-title text-center py-12 mb-8">
            <h2 className="text-3xl font-bold">Наши приемущества</h2>
            <div className="separator mt-2 mb-6 w-24 h-1 bg-gray-800 mx-auto"></div>
          </div>
        <div className="flex md:flex-row flex-col flex-none text-center px-4 justify-between mx-auto gap-4 min-h-[300px] max-w-[1024px] ">
          <div className="flex-1 flex flex-col items-center">
            <Icon name="star" size={70} className="fill-secondary" />
            <h1 className="text-xl font-semibold ">11 лет на рынке</h1>
            <h2>
              Каждый пройденный год — это новый опыт, который работает на Вас
            </h2>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <Icon name="star" size={70} className="fill-secondary" />
            <h1 className="text-xl font-semibold">2 офиса</h1>
            <h2>Нас легко найти в Вологде и Череповце</h2>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <Icon name="star" size={70} className="fill-secondary" />
            <h1 className="text-xl font-semibold">2000+ клиентов</h1>
            <h2>Нас рекомендуют друзьям и знакомым для развития бизнеса </h2>
          </div>
        </div>
      </section>

      <section className="testimonials-section py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="sec-title text-center mb-8">
            <h2 className="text-3xl font-bold">Отзывы партнеров</h2>
            <div className="separator mt-2 mb-6 w-24 h-1 bg-gray-800 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="slide-header mb-4 text-center">
                <a
                  href="http://www.drim.ru/"
                  target="_blank"
                  className="block mx-auto w-48"
                >
                  <img
                    src="https://pechataem35.ru/wp-content/uploads/2017/04/drim.jpg"
                    alt="Рекламная группа «Дрим» г. Вологда"
                    className="rounded-md w-full h-auto object-cover"
                  />
                </a>
                <h4 className="mt-4 text-xl font-semibold">
                  Рекламная группа «Дрим» г. Вологда
                </h4>
                <div className="text-gray-500">
                  Начало сотрудничества - 2008 г.
                </div>
              </div>
              <div className="slide-content text-center">
                Главное, в нашей работе, взаимопонимание, и это одно из лучших
                качеств менеджеров компании “ПЕЧАТАЕМ”, которые всегда владеют
                ситуацией, на протяжении всего выполнения заказа, и готовы
                решить любую внештатную ситуацию. А это и называется
                профессионализмом. Спасибо!
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="slide-header mb-4 text-center">
                <a
                  href="http://vologda.mts.ru"
                  target="_blank"
                  className="block mx-auto w-48"
                >
                  <img
                    src="https://pechataem35.ru/wp-content/uploads/2017/05/mts.jpg"
                    alt="Филиал ПАО «МТС» в Вологодской области"
                    className="rounded-md w-full h-auto object-cover"
                  />
                </a>
                <h4 className="mt-4 text-xl font-semibold">
                  Филиал ПАО «МТС» в Вологодской области
                </h4>
                <div className="text-gray-500">
                  Начало сотрудничества - 2008 г.
                </div>
              </div>
              <div className="slide-content text-center">
                Компания МТС особое внимание уделяет качеству рекламы.
                Сотрудничество с компанией “ПЕЧАТАЕМ” позволяет нам быть
                полностью уверенными в соблюдении самых высоких требований к
                качеству печати любых рекламных материалов. Спасибо коллективу
                компании за их профессионализм, за то, что они выполняют свою
                работу на самом высоком уровне и выполняют ее на отлично!
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="slide-header mb-4 text-center">
                <a
                  href="http://vologda.tele2.ru"
                  target="_blank"
                  className="block mx-auto w-48"
                >
                  <img
                    src="https://pechataem35.ru/wp-content/uploads/2016/11/tele2.jpg"
                    alt="Вологодский филиал ОАО «Теле2-Санкт-Петербург»"
                    className="rounded-md w-full h-auto object-cover"
                  />
                </a>
                <h4 className="mt-4 text-xl font-semibold">
                  Вологодский филиал ОАО «Теле2-Санкт-Петербург»
                </h4>
                <div className="text-gray-500">
                  Начало сотрудничества - 2010 г.
                </div>
              </div>
              <div className="slide-content text-center">
                Вологодский филиал ОАО «Теле2-Санкт-Петербург» выражает
                искреннюю благодарность и признательность компании «ПЕЧАТАЕМ» за
                успешное сотрудничество. За время работы Ваша команда проявила
                себя надежным и добросовестным партнером в области печати.
                Высокая оперативность решения задач, индивидуальный подход, а
                также качественное и своевременное выполнение принятых
                обязательств полностью соответствует требованиям компании Tele2.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="flex justify-center">
          <Button
            color="secondary"
            as={Link}
            href="/category"
            className="text-lg font-semibold m-16 scale-150"
          >
            Заказать печать
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
