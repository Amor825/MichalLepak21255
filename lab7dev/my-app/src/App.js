import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import HelloWithProps from './HelloWithProps';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';
import TodoList from './TodoList';
import LoginForm from './LoginForm';

function App() {
  const todos = ['Zrobić zakupy', 'Umyć auto', 'Napisać React'];

  return (
    <div>
      <h2>Ćwiczenie 1: <Hello/></h2>
      <h2>Ćwiczenie 2: HelloWithProps</h2>
      <HelloWithProps name="Anna" />
      <HelloWithProps name="Bartek" />
      <HelloWithProps name="Celina" />

      <h2>Ćwiczenie 3: Counter</h2>
      <Counter />

      <h2>Ćwiczenie 4: InputTracker</h2>
      <InputTracker />

      <h2>Ćwiczenie 5: LoginStatus</h2>
      <LoginStatus isLoggedIn={true} />
      <LoginStatus isLoggedIn={false} />

      <h2>Ćwiczenie 6: TodoList</h2>
      <TodoList todos={todos} />

      <h2>Ćwiczenie 7: LoginForm</h2>
      <LoginForm />
    </div>
  );
}

export default App;

