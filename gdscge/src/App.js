import SignUp from './Components/WelcomePage/SignUp/SignUp';
import './App.css';
import LogIn from './Components/WelcomePage/LogIn/LogIn';
import WelcomePage from './Components/WelcomePage/WelcomePage'
import {Route , Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/LogIn" element={<LogIn/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>

    </div>
  );
}

export default App;
