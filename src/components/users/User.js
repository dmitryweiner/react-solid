import React from "react";

export default function User({user}) {
  return <>
    <tr>
      <td>{user.name}</td>
      <td>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </td>
    </tr>
  </>;
}
