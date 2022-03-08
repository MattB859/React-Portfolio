import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting.js';


function App() {
  return (
    <div className="App">
      <FunctionalGreeting/>
      <FunctionalGreetingWithProps greeting="Nice to meet you!" />
      <StatefulGreeting greeting="from the stateful class Component"/>
    </div>
  );
}

export default App;
