import './App.css';
import Cursor from './components/cursor/Cursor';
import Home from './components/home/Home';
import LoginForm from './components/login/login';
import Navbar from './components/home/navbar/Navbar'
import Divs from './components/divs/Divs.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormuleF from './components/filetraitement/formule/FormuleF.jsx';
import Scan from './components/scan/Scan.jsx';
import Sous from './components/Sous/Sous.jsx';
import Document from './components/Document/Document.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Dossiers' element={<Divs/>}/>
          <Route path='/FileTraitement' element={<FormuleF/>}/>
          <Route path='/scan' element={<Scan/>}/>
          <Route path='/sousDossiers' element={<Sous/>}/>
          <Route path='/Documents' element={<Document/>}/>
        </Routes>
      </BrowserRouter>
      <Cursor/>
    </>
  );
}

export default App;
