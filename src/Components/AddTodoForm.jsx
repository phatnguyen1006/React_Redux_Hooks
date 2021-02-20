import { useDispatch } from "react-redux";
import { addTodo } from "../Action/Action";

const AddTodoForm = () => {
  // Func onSubmit to Dispatch action:
  const dispatch = useDispatch();
  const onSubmit = (text) => {
    dispatch(addTodo(text));
  }

  let input = "";

  return (
    <form
      onSubmit={ e => {
        e.preventDefault()
        onSubmit(input.value)
        input.value = ""
      }}
    >
      <input
      ref={(node) => {
        input = node
      }}
      placeholder="ADD TODO"
      />
      <button type="submit">ADD</button>
    </form>
  );

}


 // Non_PropTypes Check => Not contain State.

export default AddTodoForm;