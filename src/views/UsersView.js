import React, {useEffect, useState} from "react";
import UsersHeader from "../components/users/UsersHeader";
import UsersList from "../components/users/UsersList";


function UsersView({fetchUsers}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const users = await fetchUsers();
      setUsers(users);
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
