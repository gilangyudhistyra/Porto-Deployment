import './App.css'
// import Logo from './components/logo'
import Navbar from './components/navbar'
import Avatar from './components/avatar'
import Deskripsi from './components/deskripsi'
import Contact from './components/contact'
function App() {

  return (
    <>
    <Navbar/>
    {/* <Logo /> */}
    <div className='flex flex-col justify-center  h-[800px]'>
    <Avatar/>
    <Deskripsi/>
        <div className='flex flex-col justify-center h-[100px]'>
        <Contact/>
        </div>
    </div>
    </>
  )
}

export default App
