import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarComp from './componets/NavBarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
        <NavBarComp/>
        <Routes>
          {/*rutas publicas */}
          <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
