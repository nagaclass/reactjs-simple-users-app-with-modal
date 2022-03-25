const UserItem = ({ selectUser, user }) => {
  const { id, name, email, username } = user;

  return (
    <div className="box" onClick={() => selectUser(user)}>
      <p className="mb-8">
        <span className="bold">ID: </span>
        {id}
      </p>
      <p className="mb-8">
        <span className="bold">Name: </span>
        {name}
      </p>
      <p className="mb-8">
        <span className="bold">Username: </span>
        {username}
      </p>
      <p className="mb-8">
        <span className="bold">Email: </span>
        {email}
      </p>
    </div>
  );
};

export default UserItem;
