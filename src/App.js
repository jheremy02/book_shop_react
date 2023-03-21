import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router , Route ,Routes} from "react-router-dom";
import Home from './pages/Home';
import Create from './pages/Create';
import Store from './store/store';
import View from './pages/View';

function App() {
  return (
    <div className="App">
      <Store>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/create' element={<Create></Create>}/>
          <Route path='/view/:bookId' element={<View></View>}/>
        </Routes>
      </Router>
      </Store>
      
    </div>
  );
}

export default App;
