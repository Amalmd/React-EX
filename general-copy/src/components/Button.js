import "./Button.css";

function Button({ innerText, style }) {
  return <button style={style}> {innerText} </button>;
}

export default Button;
