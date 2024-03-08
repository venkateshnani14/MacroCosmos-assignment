import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import DataLog from './components/DataLog';
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
     <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/home" element = {<Home />} />
        <Route path="/datalog" element = {<DataLog />} />
      </Routes>
  );
}

export default App;