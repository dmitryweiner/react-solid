import React from 'react';
import './App.css';
import UsersView from "./views/UsersView";
import {fetchUsers} from "./services/users";

function App() {
  return (
    <div className="App">
      <UsersView fetchUsers={fetchUsers}/>
    </div>
  );
}

export default App;
