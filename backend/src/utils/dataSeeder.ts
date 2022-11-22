import mongoose from 'mongoose';
import users from './userData';
import products from './productsData';
import { config } from 'dotenv';
import User from '../models/userModel';
import Product from '../models/productModel';
import dbConnect from './database.config';
import Order from '../models/orderModel';

config();

dbConnect(process.env.MONGO_CONNECTION);

const importData = async () => {
  try {
    //delete all data
    await User.deleteMany();
    await Order.deleteMany();
    await Product.deleteMany();

    //inser users
    await User.insertMany(users);
    //grab the admin
    const adminUser = await User.findOne({ isAdmin: true });

    //generate the sample products
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser?._id };
    });

    await Product.insertMany(sampleProducts);

    //exit the console
    console.log(`Data imported `);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    //destroy all data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
