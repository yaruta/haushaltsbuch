import Modal from '../UI/Modal';

/**
 * This is a component for displaying user data displayed after adding a login form. To do.
 */

const UserInfo = (props) => {
  // const data = JSON.parse(localStorage.getItem("userData"));
  return (
    <Modal>
      <p>{data.email}</p>
      <button onClick={props.onUnlogin}>Abmelden</button>
    </Modal>
  );
};

export default UserInfo;
