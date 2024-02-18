
import './App.css'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import VideoFeed from './Components/VideoFeed';
function App() {
  
  return (
    <>
      <Navbar />
      <div className='flex'>  {/* so that we can use sibar along with cart */}
        <Sidebar />
       
        <div className='relative'>
        <VideoFeed/>
        <VideoFeed/>
        </div>
        
      </div>
      <h1>this is base file </h1>
    </>
  )
}

export default App
