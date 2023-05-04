import { BrowserRouter, Route, Routes , Link } from 'react-router-dom';
import Playground_Page from './pages/playground/playground';
import Home_Page from './pages/home/home';
import Createproject_Page from './pages/createproject/createproject';
import Nf_Page from './pages/404/nf';
import Download_Page from './pages/download/download';
import Exemple_Page from './pages/exemple/exemple';
import News from './pages/news/news';
import NavBar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="*" element={<Nf_Page/>} />
        <Route path="/" element={<Home_Page/>} />
        <Route path='/home' element={<Home_Page/>}/>
        <Route path="/playground" element={<Playground_Page/>} />
        <Route path='/create-project' element={<Createproject_Page/>}/>
        <Route path='/exemple' element={<Exemple_Page/>}/>
        <Route path='/download' element={<Download_Page/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;