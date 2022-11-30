import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { fetchCartProduct } from '../redux/slices/cart-slice';
import { useParams, useLocation } from 'react-router-dom';

const CartPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const quantity = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchCartProduct({ id, quantity }));
    }
  }, [id, dispatch, quantity]);

  return (
    <div>
      <h1>Hello from the cart</h1>
    </div>
  );
};

export default CartPage;
