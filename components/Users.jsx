import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import UserModal from "./UserModal";
import UserItem from "./UserItem";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Handlers
  const getUsers = async () => {
    setIsLoading(true);
    const results = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
    setUsers(results);
    setIsLoading(false);
  };

  const selectUser = data => {
    setSelectedUser(data);
    setModalIsOpen(true);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div className="boxes-wrapper">
        <UserModal initialState={modalIsOpen} closeModalHandler={setModalIsOpen} data={selectedUser} />

        {users.map(user => (
          <UserItem user={user} key={user.id} selectUser={selectUser} />
        ))}
      </div>
    );
  }
};

export default Users;
