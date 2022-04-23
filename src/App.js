import './App.css';
import logo from "./assets/879864.png"
import { BiHomeAlt, BiListUl, BiPlusCircle, BiEditAlt, BiTrashAlt} from "react-icons/bi";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Formulario } from './components/Formulario';
import { Eliminar } from './components/Eliminar';
import { Lista } from './components/Lista';
import { Modificar } from './components/Modificar';

function App() {
  return (
    <div className="App">
      <aside>
            <Router>
                <div className="aside">
                  <div className="conetenorLogo"><img src={logo} alt="cajero" className="logo"/></div>
                  <ul>
                      <NavLink to="/" activeClassName="active"><li><a className="icons" href="google.com"><BiHomeAlt/>Inicio</a></li></NavLink>
                      <NavLink to="agregar"><li><a className="icons" href="google.com"><BiPlusCircle/>Agregar</a></li></NavLink>
                      <NavLink to="listar"><li><a className="icons" href="google.com"><BiListUl/>Listar</a></li></NavLink>
                      <NavLink to="modificar"><li><a className="icons" href="google.com"><BiEditAlt/>Modificar</a></li></NavLink>
                      <NavLink to="eliminar"><li><a className="icons" href="google.com"><BiTrashAlt/>Eliminar</a></li></NavLink>
                  </ul>
                </div>
                <div className='mostrador'>
                  <Routes>
                      <Route path="/" element={ <Formulario/>} /> 
                      <Route path='/agregar' element={ <Formulario/>}/>
                      <Route path='/listar' element={ <Lista /> }/>
                      <Route path='/modificar' element={ <Modificar /> }/>
                      <Route path='/eliminar' element={ <Eliminar/>}/>
                  </Routes>
                </div>
            </Router>
      </aside>
      <div>

      </div>
    </div>
  );
}

export default App;
