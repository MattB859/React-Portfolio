import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting.js';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <StatefulGreeting greeting="Matthew"/>
    </div>
  );
}

export default App;
