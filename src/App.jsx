
import './App.css'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
function App() {
  
  return (
    <>
      <Navbar />
      <div className='flex mt-16'>
        <Sidebar />
      </div>
    </>
  )
}

export default App
