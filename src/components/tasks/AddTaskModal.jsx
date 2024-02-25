import Modal from "../ui/Modal";


const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <Modal 
        isOpen={isOpen}
         setIsOpen={setIsOpen}
          title={'Programming Hero'}>
        <p>I Love You</p>
        </Modal>
    );
};

export default AddTaskModal;