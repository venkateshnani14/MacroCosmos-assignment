import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
     <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/home" element = {<Home />} />
      </Routes>
  );
}

export default App;