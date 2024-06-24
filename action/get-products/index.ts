"use server";
import prisma from "@/lib/prisma";
import type { Category } from "@prisma/client";

const getProducts = ({ category }: { category: Category }) => {
  console.log(category);
  const products = prisma.product.findMany({
    include: {
      imageUrl: true,
    },
    where: { category: { id: 1  } },
  });
  return products;
};

export { getProducts };
