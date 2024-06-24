import { db } from "..";

export async function getUserByWalletAddress(walletAddress: string) {
  try {
    const data = await db("users")
      .select("*")
      .where("walletAddress", walletAddress)
      .first();
    return data;
  } catch (error) {
    console.error(error);
    throw Error("error in getUserByWalletAddress query function");
  }
}

export async function addUser(walletAddress: string) {
  try {
    const data = await db("users")
      .insert({
        walletAddress: walletAddress,
      })
      .returning("*");
    return data[0];
  } catch (error) {
    console.error(error);
    throw Error("error in addUser query function");
  }
}
