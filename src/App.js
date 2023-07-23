
import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './container/Home';
import About from './container/About';
import Contact from './container/contact';
import Portfolio from './container/Portfolio';
import Resume from './container/Resume';
import Skills from './container/Skills';
import Navbar from './components/navbar';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import particles from './utils/particles';
function App() {
  const location = useLocation();
  console.log(location);
  const handleInit = async (main) => {
    await loadFull(main);
  }
  const renderparticleInHomePage = location.pathname == '/';
  return (
    <div className="App">
      {
        renderparticleInHomePage && (<Particles id="particles" options={particles} init={handleInit}></Particles>)
      }
      {/**partcles js */}

      {/**navbar */}
      <Navbar></Navbar>
      {/**main page contact */}
      <div className='App_main-page-content'>
        <Routes>
          <Route index path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
          <Route path='/resume' element={<Resume></Resume>}></Route>
          <Route path='/skills' element={<Skills></Skills>}></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
