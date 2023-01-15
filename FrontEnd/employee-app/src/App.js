import './App.css';
import AddEmployee from './components/AddEmployee';
import AppNav from './components/AppBar';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      < AppNav />
      < Employee />
      < AddEmployee />
    </div>
  );
}

export default App;
