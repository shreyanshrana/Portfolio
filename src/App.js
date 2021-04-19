import './App.css';
import { Panel } from './components/Panel';

function App() {
  return (
    <div className="App" style={{ backgroundImage:'url("../img/bg.png")', height:'100vh', backgroundSize:'cover', backgroundPosition:'top'}}>
      <Panel/>
    </div>
  );
}

export default App;
