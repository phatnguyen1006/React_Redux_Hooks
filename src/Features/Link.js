import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../Action/Action";

const Link = (props) => {
  
  // mapState:
  const filter = useSelector(state => state.visibilityFilter);
  // State
  const active = (filter === props.filter);

  // mapDispatch:
  const dispatch = useDispatch();
  // Func to Handle:
  const onClick = (filter) => {
    dispatch(setFilter(filter));
  }

  // test:
  // console.log(props);
  // console.log(active);


// return:
  if (active) {
    return <span>{props.children}</span>
  }

  return (
    <a
      href="#"
      onClick={ e => {
        e.preventDefault()
        onClick(props.filter)
      }}
    >
      {props.children}
    </a>
  );
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Link;