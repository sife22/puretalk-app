import './App.css';
import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';
import Login from './components/login/Login';

function App() {
  const user = false;
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
          // {/* <Register /> */}
       }
    </div>
  );
}

export default App;
