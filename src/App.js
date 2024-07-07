import './App.css';
import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';

function App() {
  const user = true;
  return (
    <div className="app">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : 
          <Login />
          
       }
        <Notification />
    </div>
  );
}

export default App;
