import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import ToggleDetails from './ToggleDetails.js'
import ScoreDisplay from './ScoreDisplay.js'
import TaskList from './TaskList.js'
import UserList from './UserList.js';
import TimerCounter from './TimerCounter.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Hello/>
          <ToggleDetails/>
          <ScoreDisplay/>
          <TaskList/>
          <UserList/>
          <TimerCounter/>
        </p>
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
