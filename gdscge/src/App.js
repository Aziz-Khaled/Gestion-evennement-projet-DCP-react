import SignUp from './Components/WelcomePage/SignUp/SignUp';
import './App.css';
import LogIn from './Components/WelcomePage/LogIn/LogIn';
import WelcomePage from './Components/WelcomePage/WelcomePage'
import {Route , Routes} from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'

function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route extact path="/" element={<WelcomePage/>}/>
      <Route path="/LogIn" element={<LogIn/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path ="/HomePage" element = {<HomePage/>}/>
    </Routes>

    </div>
  );
}

export default App;
