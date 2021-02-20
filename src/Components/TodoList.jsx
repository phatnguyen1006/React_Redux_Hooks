import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import Todo from "../Features/Todo";
import { toggleTodo } from "../Action/Action";


const TodoList = () => {

  // Get_ Filter:
  const getVisibilityFilter = (todos, filter) => {
    switch(filter) {
      case "SHOW_ALL":
        return todos;
      case "SHOW_ACTIVE":
        return todos.filter(t => !t.completed);
      case "SHOW_COMPLETED":
        return todos.filter(t => t.completed);
      default:
        return todos;
    }
  }

  // mapState:
  const t = useSelector(state => state.todos);
  const filter = useSelector(state => state.visibilityFilter);
  // Func handle Toggle:
  const todos = getVisibilityFilter(t,filter);

  // mapDispatch:
  const dispatch = useDispatch();
  const onTodoClick = (id) => {
    dispatch(toggleTodo(id));
  }

  // test:
  console.log(todos);
  // console.log("re-render");

  // return 
  return (
    <ul>
      {todos.map( todo =>(
        <Todo key={todo.id} {...todo} onClick={ () => onTodoClick(todo.id) }/>
      ))}
    </ul>
  );
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired),
  onTodoClick: PropTypes.func
}

export default TodoList;