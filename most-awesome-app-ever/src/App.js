import './App.css';
import './components/display/header.css'
import './components/display/body.css'
import {DisplayHeader} from './components/display/header'
import {DisplayBody} from './components/display/body'

function App() {
  return (
    <div className="App">
      <div>
        <DisplayHeader />
      </div>
      <div>
        <DisplayBody />
      </div>
    </div>
  );
}

export default App;
