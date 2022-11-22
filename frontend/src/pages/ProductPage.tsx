import React, { useEffect, useState } from 'react';
import { Col, Row, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Ratings } from '../components';

type Props = {};

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

const ProductPage = (props: Props) => {
  //grab id
  const { id } = useParams();
  const [product, setProduct] = useState<product>({} as product);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${id}`);

      setProduct(data.data.product);
    };

    fetchProducts();
  }, [id]);

  return (
    <>
      <Link
        className='btn btn-light my-2'
        to={'/'}>
        Go back
      </Link>

      <Row>
        <Col md={6}>
          <Image
            src={product.image}
            alt={product.name}
            fluid
            className='rounded-4'
          />
        </Col>
        <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroupItem as='h3'>{product?.name}</ListGroupItem>
            <div className='mx-3 my-1'>
              <Ratings
                value={product.avgRating}
                text={`${product.numReviews} reviews`}
              />
            </div>
            <ListGroupItem
              as='h4'
              className='my-3 text-xl-start text-primary '>
              ${product.price}
            </ListGroupItem>
            <ListGroupItem
              as='h5'
              className='my-3 text-xl-start text-dark '>
              Availabillity -{' '}
              {product.countInStock > 0 ? (
                <span className='text-primary'>In Stock</span>
              ) : (
                <span className='text-primary'>Out of Stock</span>
              )}
            </ListGroupItem>
            <ListGroupItem
              as='p'
              className='my-3 text-xl-start text-primary '>
              {product.description}
            </ListGroupItem>
            <div className='my-3 d-grid gap-2 col-6 mx-auto'>
              <button className='btn btn-outline-primary fluid'>
                Add to Cart
              </button>
            </div>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
