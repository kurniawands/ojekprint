import { Schema, model, models } from "mongoose";

const ShopSchema = new Schema({
  shopname: {
    type: String,
    required: [true, "Username is required!"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Shop = models.Shop || model("Shop", ShopSchema);

export default Shop;
