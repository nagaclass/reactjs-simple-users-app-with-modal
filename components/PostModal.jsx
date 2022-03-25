import Modal from "react-modal";

// Styles
const styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    textAlign: "center",
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
        <h3>Title: {data?.title}</h3>
        <p style={{ padding: "20px", maxWidth: 700 }}>Body: {data?.body}</p>
      </div>
    </Modal>
  );
};

export default UserModal;
