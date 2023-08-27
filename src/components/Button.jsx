/* eslint-disable react/prop-types */
import "../components/Button.css";

const Button = ({ text, category }) => {
  return <button className={`btn ${category}`}>{text}</button>;
};

export default Button;
