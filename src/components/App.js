import { Home, Login, Signup } from '../pages';
import { Navigationbar, Footer } from '../components/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navigationbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
