const UserItem = ({ selectUser, user }) => {
  const { id, name, email, username } = user;

  return (
    <div className="box" onClick={() => selectUser(user)}>
      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserItem;
