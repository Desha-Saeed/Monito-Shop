import { useState, useEffect } from 'react';
import {
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Image,
  Form,
  Button
} from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { Ratings } from '../components';
import {
  fetchProductById,
  selectProduct
} from '../redux/slices/productDetails-slice';

type Props = {};

const ProductPage = (props: Props) => {
  //grab id
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useAppSelector(selectProduct);
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchProductById(id!));
  }, [id, dispatch]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${quantity}`);
  };

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
              {product.InStock > 0 ? (
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

            {/* Quantity selector */}
            {product.InStock > 0 && (
              <ListGroupItem>
                <Row>
                  <Col>Quantity</Col>
                  <Col>
                    <Form.Control
                      as='select'
                      value={quantity}
                      onChange={(e) => {
                        setQuantity(Number(e.target.value));
                      }}>
                      {[...Array.from(Array(product.InStock).keys())].map(
                        (number) => (
                          <option
                            key={number + 1}
                            value={number + 1}>
                            {number + 1}{' '}
                          </option>
                        )
                      )}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroupItem>
            )}

            <div className='my-3 d-grid gap-2 col-6 mx-auto'>
              <Button
                type='button'
                variant='outline-dark'
                className='btn-block'
                disabled={product.InStock === 0}
                onClick={addToCartHandler}>
                Add to Cart
              </Button>
            </div>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
