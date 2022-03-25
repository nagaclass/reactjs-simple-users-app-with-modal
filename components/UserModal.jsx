import Modal from "react-modal";

// Styles
const styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
};

const UserModal = ({ initialState, closeModalHandler, data }) => {
  // Handler
  const closeModal = () => {
    closeModalHandler(false);
  };

  return (
    <Modal isOpen={initialState} onRequestClose={closeModal}>
      <div style={styles.content}>
        <h1>Box ID: {data?.id}</h1>
        <h3>Username: {data?.username}</h3>
        <h3>Name: {data?.name}</h3>
        <h3>Email: {data?.email}</h3>
      </div>
    </Modal>
  );
};

export default UserModal;
