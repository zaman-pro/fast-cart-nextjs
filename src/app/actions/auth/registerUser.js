"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

const registerUser = async (payload) => {
  try {
    //  Need to check if unique username was given

    const result = await dbConnect(collectionNames.USERS).insertOne(payload);
    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(),
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default registerUser;
