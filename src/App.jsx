import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex ">
        <Sidebar />
        hello i am here 
        <Feed/>
      </div>
    </>
  );
}

export default App;
