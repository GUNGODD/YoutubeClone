
import './App.css'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
function App() {
  
  return (
    <>
      <Navbar />
      <div className='flex '>  {/* so that we can use sibar along with cart */}
        <Sidebar />
        <p className='p-2'>video will render here </p>
      </div>
    </>
  )
}

export default App
