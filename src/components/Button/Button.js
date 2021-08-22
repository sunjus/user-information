import { Link } from "react-router-dom";

const Button = ({ id }) => {
  return (
    <div>
      <Link to={`/${id}`}>
        <button>More Details</button>
      </Link>
    </div>
  );
};

export default Button;
