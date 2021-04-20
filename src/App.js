
import './App.css';
import { ApplicationBar } from './components/ApplicationBar/ApplicationBar';
import { Panel } from './components/Panel/Panel';
import { WindowSpace } from './components/WindowSpace/WindowSpace';

function App() {
  return (
    <div className="App w-screen h-screen" style={{ backgroundImage:'url("../img/bg.png")', backgroundSize:'cover', backgroundPosition:'top'}}>
      <Panel/>
      <ApplicationBar/>
      <WindowSpace/>
    </div>
  );
}

export default App;
