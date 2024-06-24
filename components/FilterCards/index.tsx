"use client";

import {
  Button,
  Slider,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";
import { Category } from "@prisma/client";
import { getCategories } from "@/action/get-categories";

const FilterCards = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await getCategories();
        setCategories(res);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCategory();
  }, []);

  return (
    <header className="relative z-20 flex flex-col gap-2 rounded-medium bg-default-50 px-4 pb-3 pt-2 md:pt-3 my-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-row gap-2">
          <div className="hidden items-center gap-1 md:flex">
            <h2 className="text-lg font-medium">
              {
                categories.find(
                  (category) =>
                    category.id === Number(searchParams.get("category") ?? 1)
                )?.name
              }
            </h2>
            <span className="text-small text-default-400">(8)</span>
          </div>
        </div>
        <div className="-ml-2 flex w-full flex-wrap items-center justify-start gap-2 md:ml-0 md:justify-end">
          <DropDownPriceRange />
          <DropDownColors />
          <DropDownRating />
          <DropDownSort />
        </div>
      </div>
    </header>
  );
};

const DropDownSort = () => {
  const [selectedKeys, setSelectedKeys] = useState<string>("popular_desc");
  const sortMethod = [
    { key: "popular_desc", title: "По популярности" },
    
    { key: "price_asc", title: "По возрастанию цены" },
    { key: "price_desc", title: "По убыванию цены" },
    { key: "reviews_desc", title: "По отзывам" },
  ];

  return (
    <Dropdown
      showArrow
      classNames={{
        base: "before:bg-default-200",
        content:
          "border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
      }}
      backdrop="blur"
    >
      <DropdownTrigger>
        <Button color="primary" variant="ghost">
          {sortMethod.find((method) => method.key === selectedKeys)?.title}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection sort"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(e: any) => setSelectedKeys(e.currentKey)}
      >
        <DropdownSection>
          {sortMethod.map((data) => (
            <DropdownItem key={data.key}>{data.title}</DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

const DropDownRating = () => {
  return (
    <Popover
      key="rating"
      showArrow
      offset={10}
      placement="bottom"
      backdrop="blur"
    >
      <PopoverTrigger>
        <Button color="primary" variant="ghost" className="capitalize">
          Рейтинг
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-4 px-4 py-2">
          
          <div className="flex justify-end gap-2">
            <Button variant="flat" size="sm">
              Отмена
            </Button>
            <Button color="primary" size="sm">
              Применить
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const DropDownPriceRange = () => {
  return (
    <Popover
      key="rating"
      showArrow
      offset={10}
      placement="bottom"
      backdrop="blur"
    >
      <PopoverTrigger>
        <Button color="primary" variant="ghost" className="capitalize">
          Цена
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-3 px-4 py-2 max-w-xs">
          <div>
            <h3 className="font-medium leading-8 text-default-600 text-large">
              Цена
            </h3>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
              <Slider
                label="Ценовой диапазон"
                formatOptions={{ style: "currency", currency: "RUB" }}
                step={1}
                maxValue={1000}
                minValue={0}
                value={[100, 800]}
                className="max-w-md"
              />
            </div>
          </div>
          <div className="flex items-center">
            <Input
              type="number"
              placeholder="0.00"
              labelPlacement="outside"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">₽</span>
                </div>
              }
            />
            <hr
              className="shrink-0 bg-divider border-none h-divider mx-2 w-2"
              role="separator"
            />
            <Input
              type="number"
              placeholder="0.00"
              labelPlacement="outside"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">₽</span>
                </div>
              }
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="flat" size="sm">
              Отмена
            </Button>
            <Button color="primary" size="sm">
              Применить
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const DropDownColors = () => {
  const colors = ["white", "black", "yellow-400", "blue-400", "green-400"];
  return (
    <Popover
      key="rating"
      showArrow
      offset={10}
      placement="bottom"
      backdrop="blur"
    >
      <PopoverTrigger>
        <Button color="primary" variant="ghost" className="capitalize">
          Цвет
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-3 px-4 py-2 max-w-xs">
          <div>
            <h3 className="font-medium leading-8 text-default-600 text-large">
              Цвет
            </h3>
          </div>
          <div className="flex items-center">
            <RadioGroup orientation="horizontal">
              {colors.map((color, index) => (
                <Radio
                  key={index}
                  value={color}
                  className="ring-transparent"
                  classNames={{
                    wrapper: `pointer-events-none h-8 w-8 rounded-full border border-black border-opacity-10 transition-transform group-data-[pressed=true]:scale-90 bg-${color}`,
                    control: "!opacity-0",
                    labelWrapper: "!m-0",
                  }}
                />
              ))}
            </RadioGroup>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="flat" size="sm">
              Отмена
            </Button>
            <Button color="primary" size="sm">
              Применить
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterCards;
