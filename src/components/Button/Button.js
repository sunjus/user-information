import { Link } from "react-router-dom";
import style from "./button.module.css";

const Button = ({ id }) => {
  return (
    <div className={style.btn}>
      <Link to={`/${id}`}>
        <button>More Details</button>
      </Link>
    </div>
  );
};

export default Button;
