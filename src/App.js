import './App.css';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import ReadytoDrive from './Pages/ReadytoDrive';
import Post from './Pages/Post';
import LetSupport from './Pages/LetSupport';
import Footer from './Pages/Footer';
import FooterTwo from './Pages/FooterTwo';

function App() {
  return (
    <div className='pt-4'>
      <Navbar className=""/>
      <Herosection/>
      <ReadytoDrive/>
      <Post/>
      <LetSupport/>
      <Footer/>
      <FooterTwo/>
    </div>
  );
}

export default App;
