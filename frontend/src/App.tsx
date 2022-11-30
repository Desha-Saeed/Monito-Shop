//import styles
import { Container } from 'react-bootstrap';
import './App.css';
//import componenets
import { Header, Footer } from './components';
import { HomePage, ProductPage, CartPage } from './pages';
//import router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Container className='py-5'>
        <main>
          <Routes>
            <Route
              path={'/'}
              element={<HomePage />}
            />
            <Route
              path={'/product/:id'}
              element={<ProductPage />}
            />
            <Route
              path={'/cart'}
              element={<CartPage />}>
              <Route
                path={':id'}
                element={<CartPage />}
              />
              <Route
                path={'?qty=:qty'}
                element={<CartPage />}
              />
            </Route>
          </Routes>
        </main>
      </Container>

      <Footer />
    </Router>
  );
};

export default App;
