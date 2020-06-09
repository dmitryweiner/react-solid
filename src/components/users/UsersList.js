import React from "react";

export default function UsersList({users}) {
  return <>
    {users.map(user => (
      <tr>
        <td>{user.name}</td>
        <td>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </td>
      </tr>
    ))}
    </>;
}
