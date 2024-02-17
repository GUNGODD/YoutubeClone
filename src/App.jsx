import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import VideoContainer from './Components/VideoContainer';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex mt-16">
        <Sidebar />

        <Feed />
        {/* <VideoContainer /> */}
      </div>
      
    </>
  );
}

export default App;
