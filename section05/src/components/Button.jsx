const Button = ({ text, color, children }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    // 버튼 이벤트 전달시 함수이면 안됨
    <button
      onClick={onClickButton}
      //   onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};
Button.defaultProps = {
  color: "black",
};
export default Button;
