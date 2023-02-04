import Header from "./components/Header";  
import {FaPlus} from 'react-icons/fa';
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="inputBlock">
        <input placeholder="Add new item"/> 
        <button className="inputBlock__button">
          <FaPlus className="inputBlock__icon"/>
        </button>
      </div>
      <Tasks />
    </div>
  );
}

export default App;
