
import './App.css'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
function App() {
  
  return (
    <>
      <Navbar />
      <div className='flex '>  {/* so that we can use sibar along with cart */}
        <Sidebar />
         video render here..
      </div>
    </>
  )
}

export default App
