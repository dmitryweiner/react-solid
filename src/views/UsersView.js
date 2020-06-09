import React, {useEffect, useState} from "react";


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
      <tr>
        <th>Username</th>
        <th>Email</th>
      </tr>
      {users.map(user => (
        <tr>
          <td>{user.name}</td>
          <td>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </td>
        </tr>
      ))}
    </table>
    </>;
}

export default UsersView;
