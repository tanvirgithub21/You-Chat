import './App.css';
import ChatBox from './Component/ChatBox/ChatBox';
import SideBar from './Component/SideBar/SideBar';

function App() {
  return (
    <div className="app grid place-items-center h-screen w-screen bg-gray-200">
      <div className='flex h-[95%] w-[97%] bg-white shadow-xl'>
        <SideBar />
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
