import React, {useEffect, useState} from "react";
import UsersHeader from "../components/users/UsersHeader";
import UsersList from "../components/users/UsersList";


function UsersView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setUsers(result);
    }
    fetchData();
  }, []);

  return <>
    <table>
      <UsersHeader/>
      <UsersList users={users}/>
    </table>
    </>;
}

export default UsersView;
