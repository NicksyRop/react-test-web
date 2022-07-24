import React from "react";

export const User = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
};
