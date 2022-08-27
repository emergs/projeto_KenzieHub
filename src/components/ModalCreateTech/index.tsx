import FormCreateTech from "../FormCreateTech";
import Modal from "react-modal";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";

const ModalCreateTech = ()=>{
  const {modalCreateIsOpen, closeModalCreate} = useContext(UserContext)

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
    isOpen={modalCreateIsOpen}
    onRequestClose={closeModalCreate}
    style={customStyles}
    contentLabel="Example Modal"
    >
      <FormCreateTech/>
    </Modal>
  )
}

export default ModalCreateTech;