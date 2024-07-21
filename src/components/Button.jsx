const Button = ({ text, color, a, children }) => {
  const onclick = (e) => {
    console.log(e);
  };

  return (
    <button style={{ color: color }} 
    onClick={onclick}
    
    >
      {text} - {color.toUpperCase()} - {a} {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
  a: "몰라",
};

export default Button;
