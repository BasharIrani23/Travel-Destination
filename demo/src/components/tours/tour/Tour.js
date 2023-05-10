import { Link } from "react-router-dom";

function Tour(props) {
  console.log(props.Tour.id);

  return (
    <div>
      <h1>
        <Link to={`/city/${props.Tour.id}`}>{props.Tour.name}</Link>
      </h1>
      <img src={props.Tour.image} />
      <hr />
    </div>
  );
}
export default Tour;
