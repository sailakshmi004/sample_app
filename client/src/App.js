import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Start } from './components/welcome/welcome';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Start/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
    
}

export default App;

