import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/containers/Home';
import Header from './common/components/Header';
import Signup from './auth/containers/Signup';
import Signin from './auth/containers/Signin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
