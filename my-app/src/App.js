import './App.css';
import StatefulGreeting from './components/StatefulGreeting.js';
import Header from './components/Header';
import Form from './components/Form';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Header logo="React Portfolio"/>
      <Home/>
      <StatefulGreeting greeting="Matthew"/>
      <Form/>
    </div>
  );
}


export default App;
