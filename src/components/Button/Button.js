import { Link } from "react-router-dom";
import style from "./button.module.css";

const Button = ({ children, href }) => {
  return (
    <div className={style.btn}>
      <Link to={href}>
        <button>{children}</button>
      </Link>
    </div>
  );
};

export default Button;
