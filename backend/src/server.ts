import Express, { Request, Response } from 'express';
import { config } from 'dotenv';
import productsRoutes from './routes/products';

const app = Express();
//read env files
config();

//adding routes
app.use('/api/products', productsRoutes);

//listening to the server
app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
