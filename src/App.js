import './App.css';
import ClassCounter from './components/ClassCounter';
import { HookCounter } from './components/HookCount';
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
    </div>
  );
}

export default App;
