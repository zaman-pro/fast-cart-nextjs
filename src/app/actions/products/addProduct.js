"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export default async function addProduct(productData) {
  try {
    const collection = dbConnect(collectionNames.PRODUCTS);

    const result = await collection.insertOne({
      ...productData,
      createdAt: new Date(),
    });

    return { success: true, insertedId: result.insertedId };
  } catch (error) {
    console.error("Error adding product:", error);
    throw new Error("Failed to add product");
  }
}
