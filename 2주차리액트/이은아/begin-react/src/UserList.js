import React from "react";

const User = ({ user, onRemove }) => {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      {/* jsx 외부에서 정의되어진 event handler 나 callback로 parm를 pass할때 arrow function을 쓴다. */}
      <button onClick={() => onRemove(user.id)}>삭제 </button>
    </div>
  );
};

const UserList = ({ users, onRemove }) => {
  return (
    <div>
      <div>
        {users.map((user) => (
          <User user={user} key={user.id} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
