import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewGame from './pages/NewGame';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newgame" element={<NewGame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
