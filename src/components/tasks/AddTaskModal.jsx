import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const onCancel = ()=>{
    reset();
    setIsOpen(false);
  }

  const onSubmit = (data) => {
    console.log(data);
    onCancel();
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Programming Hero"}>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Title
            </label>
            <input
              className="w-full rounded-md"
              type="text"
              placeholder="name"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Description
            </label>
            <textarea
              className="w-full rounded-md"
              type="text"
              placeholder="Description"
              {...register("description")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              DealLine
            </label>
            <input
              className="w-full rounded-md"
              type="date"
              placeholder="name"
              {...register("date")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Assign to
            </label>
            <select className="w-full rounded-md" {...register("assignTo")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Priority
            </label>
            <select className="w-full rounded-md" {...register("priority")}>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

        <div className="flex justify-end gap-3">
        <button onClick={onCancel} type="button" className="btn btn-danger">Cancel</button>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddTaskModal;
