import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
<<<<<<< HEAD
import VideoFeed from './Components/VideoFeed';
=======
import Feed from './Components/Feed';
import VideoContainer from './Components/VideoContainer';

>>>>>>> main
function App() {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <div className='flex'>  {/* so that we can use sibar along with cart */}
        <Sidebar />
       
        <div className='relative'>
        <VideoFeed/>
        <VideoFeed/>
        </div>
        
      </div>
      <h1>this is base file </h1>
=======
      <div className="flex mt-16">
        <Sidebar />

        <Feed />
        {/* <VideoContainer /> */}
      </div>
      
>>>>>>> main
    </>
  );
}

export default App;
