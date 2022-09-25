import './App.css';
import ChatBox from './Component/ChatBox/ChatBox';
import SideBar from './Component/SideBar/SideBar';

function App() {
  return (
    <div className="App grid place-items-center h-screen w-screen bg-gray-200">
      <div className='flex h-[97%] w-[98%] bg-white'>
        <SideBar />
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
