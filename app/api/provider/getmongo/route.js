import { connectToDB } from "@/utils/database";
import Shop from "@/models/shop";

export const GET = async (request) => {
  try {
    await connectToDB();

    const shops = await Shop.find();

    return new Response(JSON.stringify(shops), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
