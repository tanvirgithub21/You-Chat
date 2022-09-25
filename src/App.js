import './App.css';
import ChatBox from './Component/ChatBox/ChatBox';
import SideBar from './Component/SideBar/SideBar';

function App() {
  return (
    <div className="App grid place-items-center h-screen">
      <div className='flex h-screen w-screen'>
        <SideBar />
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
