import './App.css';
import ClassCounter from './components/ClassCounter';
import { HookCounter } from './components/HookCount';
import HookCounterFive from './components/HookCounterFive';
import HookCounterFour from './components/HookCounterFour';
import { HookCounterTwo } from './components/HookCounterTwo';
import { InputNameChange } from './components/InputNameChange';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <InputNameChange />
      <HookCounterFour />
      <HookCounterFive />
    </div>
  );
}

export default App;
