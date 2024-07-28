import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Explore from './pages/Explore';
import Account from './pages/Account';
import Favourite from './pages/Favourite';
import Cart from './pages/Cart';
import BottomNav from './components/BottomNav';
import TopNav from './components/TopNav';

function App() {

  return (
    <>
      <Router>
        <TopNav/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/my-account" element={<Account />} />
        </Routes>
        <BottomNav/>
      </Router>
    </>
  )
}

export default App
