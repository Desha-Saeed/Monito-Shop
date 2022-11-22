//express framework
import Express from 'express';
//database connection
import dbConnect from './utils/database.config';
//env config package
import { config } from 'dotenv';
//routes
import productsRoutes from './routes/products';

const app = Express();
//read env files
config();

//adding routes
app.use('/api/products', productsRoutes);

//connecting to database
dbConnect(process.env.MONGO_CONNECTION);

//listening to the server
app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
