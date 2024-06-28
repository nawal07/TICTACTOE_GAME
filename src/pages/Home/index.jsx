import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();
  onclick = () => {
    navigate('/newgame');
  };
  return (
    <>
      <div className="gameHome">
        <h1>WELCOME TO TICTACTOE</h1>
        <button onClick={onclick} className="playgame">
          PLAY GAME
        </button>
      </div>
    </>
  );
};

export default Home;
