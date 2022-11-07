import React from 'react';
import { Col, Row, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { Ratings } from '../components';
import products from '../products';

type Props = {};

const ProductPage = (props: Props) => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
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
            src={product?.image}
            alt={product?.name}
            fluid
          />
        </Col>
        <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroupItem as='h3'>{product?.name}</ListGroupItem>
            <div className='mx-3 my-1'>
              <Ratings
                value={product!.rating}
                text={`${product?.numReviews} reviews`}
              />
            </div>
            <ListGroupItem
              as='h4'
              className='my-3 text-xl-start text-primary '>
              ${product!.price}
            </ListGroupItem>
            <ListGroupItem
              as='h5'
              className='my-3 text-xl-start text-dark '>
              Availabillity -{' '}
              {product!.countInStock > 0 ? (
                <span className='text-primary'>In Stock</span>
              ) : (
                <span className='text-primary'>Out of Stock</span>
              )}
            </ListGroupItem>
            <ListGroupItem
              as='p'
              className='my-3 text-xl-start text-primary '>
              {product!.description}
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
