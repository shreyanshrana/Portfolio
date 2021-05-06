
import './App.css';
import { ApplicationBar } from './components/ApplicationBar/ApplicationBar';
import { Panel } from './components/Panel/Panel';
import { WindowSpace } from './components/WindowSpace/WindowSpace';
import AppContextProvider from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <div id="App" className="App w-screen h-screen" style={{ backgroundImage:'url("./img/bg.png")', backgroundSize:'cover', backgroundPosition:'top'}}>
        <Panel/>
        <ApplicationBar/>
        <WindowSpace/>
      </div>
    </AppContextProvider>
  );
}

export default App;
