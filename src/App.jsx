
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import VideoFeed from './Components/VideoFeed';
function App() {
  return (
    <>
      <Navbar className="md-4" />
      <div className='flex mt-16'>  {/* so that we can use sibar along with cart */}
        <Sidebar />
       
        <div className='relative mt'>
        <VideoFeed/>
        <VideoFeed/>
        <VideoFeed/>
        <VideoFeed/>
        <VideoFeed/>
        </div>
        
      </div>
      <h1>this is base file </h1>
    </>
  );
}

export default App;











