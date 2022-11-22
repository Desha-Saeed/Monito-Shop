import mongoose from 'mongoose';

const dbConnect = async (url?: string) => {
  try {
    await mongoose.connect(url!, () => {
      console.log(`App connected to Database successfully`);
    });
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
