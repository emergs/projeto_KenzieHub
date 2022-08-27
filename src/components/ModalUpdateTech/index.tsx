import FormUpdateTech from "../FormUpdateTech";
import Modal from "react-modal"
import { useContext } from "react";
import { UserContext } from "../../Providers/user";

const ModalUpdateTech = ()=>{
  const {modalUpdateIsOpen,closeModalUpdate} = useContext(UserContext)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
    background: 'none',
    transform: 'translate(-50%, -50%)',
    },
  };

  return(

    <Modal
    isOpen={modalUpdateIsOpen}
    onRequestClose={closeModalUpdate}
    style={customStyles}
    contentLabel="Example Modal"
    >
      <FormUpdateTech/>
    </Modal>
  )
}

export default ModalUpdateTech;