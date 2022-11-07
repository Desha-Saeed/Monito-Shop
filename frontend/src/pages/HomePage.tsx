//import bootstrap
import { Col, Row } from 'react-bootstrap';
//import routeprops
import {} from 'react-router-dom';

//import products
import products from '../products';
import { Product } from '../components';

const HomePage = () => {
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
