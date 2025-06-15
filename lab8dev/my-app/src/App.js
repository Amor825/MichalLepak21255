import logo from './logo.svg';
import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2> Ćwiczenie 1:</h2> <ToggleDetails />
          <h2> Ćwiczenie 2:</h2> <ScoreDisplay score={75} />
          <h2> Ćwiczenie 3:</h2> <TaskList />
          <h2> Ćwiczenie 4:</h2> <UserList />
          <h2> Ćwiczenie 5:</h2> <TimerCounter />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
