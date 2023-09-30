import { connectToDB } from "@/utils/database";
import Shop from "@/models/shop";

export const POST = async (req) => {
  const { shopname, email, address, phone, image } = await req.json();

  try {
    await connectToDB();
    const newShop = new Shop({
      shopname,
      email,
      address,
      phone,
      image,
    });

    await newShop.save();

    return new Response(JSON.stringify(newShop), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
