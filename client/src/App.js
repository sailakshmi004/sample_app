import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Welcome } from './components/welcome/welcome';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Welcome/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
    
}

export default App;

