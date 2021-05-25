
import './App.css';
import { ApplicationBar } from './components/ApplicationBar/ApplicationBar';
import { Panel } from './components/Panel/Panel';
import { WindowSpace } from './components/WindowSpace/WindowSpace';
import AppContextProvider from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <div id="App" className="App w-full h-full">
        <div className="h-7 w-full">
          <Panel/>
        </div>
        <div className="w-full" style={{ height:"calc(100% - 1.75rem)" }}>
          <ApplicationBar/>
          <WindowSpace/>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
