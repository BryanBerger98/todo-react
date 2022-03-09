import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/containers/Home';
import Header from './common/components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
