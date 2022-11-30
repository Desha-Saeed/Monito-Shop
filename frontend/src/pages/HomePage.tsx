//import hooks
import { useEffect } from 'react';
//import bootstrap
import { Col, Row } from 'react-bootstrap';
//import components
import { Product, Loader } from '../components';
import { fetchProductList } from '../redux/slices/productList-slice';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { selectProducts } from '../redux/slices/productList-slice';
import { RootState } from '../redux/store';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const { status } = useAppSelector((state: RootState) => state.productList);

  //fetch products
  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  const productList = products.map((product) => (
    <Col
      sm={12}
      md={6}
      lg={4}
      xl={3}
      key={product._id}>
      <Product {...product} />
    </Col>
  ));

  return (
    <>
      <h1>Latest Products</h1>
      <Row>{status === 'idle' ? productList : <Loader />}</Row>
    </>
  );
};

export default HomePage;
