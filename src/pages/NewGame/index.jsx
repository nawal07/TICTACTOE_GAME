import Board from '../../components/Board';
import './newgame.css';

const NewGame = () => {
  return (
    <>
      <div className="gamewindow">
        <div className="game-board">
          <Board />
        </div>
      </div>
    </>
  );
};

export default NewGame;
