
import './App.css';
import Header from './components/header';
import MainUi from './components/mainUi';
import Tweets from './components/tweets';
import Login from './components/login';
import {
  BrowserRouter as Router,
  
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    <Header></Header>
    <Router>
      <div className="App">

      
        <Routes>
          
          <Route path="/login" element={<Login />}>

          </Route>
          
          <Route path="/home" element={<MainUi />}>

          </Route>

        </Routes>

      </div>
    </Router>
  </>

  );
}

export default App;
