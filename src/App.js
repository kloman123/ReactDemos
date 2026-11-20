import logo from './logo.svg';
import './App.css';
import Createform from './Form';
import Listchk from './List';
import CreateDropdownform from './Dropdown';
import CheckboxFrom from './checkbox';


function App() {
  return (
    <div className="App">
   <CheckboxFrom/>
    <div>
      <Listchk/>
    </div>
    <CreateDropdownform/>
    </div>
  );
}

export default App;
