import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/containers/Home';
import Header from './common/components/Header';
import Signup from './auth/containers/Signup';
import Signin from './auth/containers/Signin';
import Account from './account/containers/Account';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
