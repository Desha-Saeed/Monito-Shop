//import Bootstrap components
import { Card } from 'react-bootstrap';
//import Link
import { Link } from 'react-router-dom';
//import components
import Ratings from './Ratings';

interface ProductProps {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  InStock: number;
  avgRating: number;
  numReviews: number;
}

const Product: React.FC<ProductProps> = (props: ProductProps) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${props._id}`}>
        <Card.Img
          src={props.image}
          variant='top'
        />
      </Link>
      <Card.Body className='p-3'>
        <Link to={`/product/${props._id}`}>
          <Card.Title as='div'> {props.name}</Card.Title>
        </Link>

        <Card.Text
          as='div'
          className='py-2'>
          <Ratings
            value={props.avgRating}
            text={`${props.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text
          className='py-2'
          as='h4'>
          ${props.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
