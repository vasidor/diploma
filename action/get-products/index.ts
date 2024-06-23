"use server";
import prisma from "@/lib/prisma";

const getProducts = () => {
  const products = prisma.product.findMany({
    include: {
      imageUrl: true,
    },
  });
  return products;
};

export { getProducts };
