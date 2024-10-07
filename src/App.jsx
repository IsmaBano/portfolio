import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Projects from './Pages/Projects'
import Aboutme from './Pages/Aboutme'
import Contact from './Pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <div className='dark:text-white dark:bg-black '>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<Aboutme />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App