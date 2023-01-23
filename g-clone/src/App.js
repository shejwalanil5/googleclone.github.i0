import './App.css';
import Home from './Component/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SearchPage from './Component/SearchPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/search' element={<SearchPage />}/>
          <Route exact path='/'  element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
