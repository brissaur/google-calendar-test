import './App.css';
import Agenda from './business/agenda/components/Agenda';

function App() {
  return (
    <div className="App" id="yourAppElement">
      <h1>Google-like agenda</h1>
      <p>To create a meeting, please drag & drop on a day as you would in a google agenda</p>
      <Agenda />
    </div>
  );
}

export default App;
