import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css'
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Success from './pages/Success';
import Topbar from './components/Topbar';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Topbar />
      <Menu showMenu={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/:language" element={<Homepage/>} />
          <Route index path="/:language/login" element={<Login />}/>
          <Route path='/:language/success' element={<Success />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
