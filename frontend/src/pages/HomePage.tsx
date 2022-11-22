//import hooks
import { useState, useEffect } from 'react';
import axios from 'axios';
//import bootstrap
import { Col, Row } from 'react-bootstrap';
//import components
import { Product } from '../components';

type product = {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  avgRating: number;
  numReviews: number;
};

const HomePage = () => {
  //products state
  const [products, setProducts] = useState<product[]>([]);

  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('./api/products');

      setProducts(data.data.products);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            key={product._id}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
