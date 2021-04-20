
import './App.css';
import { ApplicationBar } from './components/ApplicationBar/ApplicationBar';
import { Browser } from './components/Browser/Browser';
import { Panel } from './components/Panel/Panel';
import { useDrop } from 'react-dnd'
import { ItemTypes } from './DraggableItems';
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
