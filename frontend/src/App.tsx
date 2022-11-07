//import styles
import { Container } from 'react-bootstrap';
import './App.css';
//import componenets
import { Header, Footer } from './components';
import { HomePage, ProductPage } from './pages';
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
          </Routes>
        </main>
      </Container>

      <Footer />
    </Router>
  );
};

export default App;
