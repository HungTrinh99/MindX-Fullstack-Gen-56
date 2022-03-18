const Button = (props) => {
  return <button className="btn btn-primary">{props.children}</button>;
};

const ButtonSecondary = (props) => {
  return <button className="btn btn-secondary">{props.children}</button>;
};

const ButtonSuccess = (props) => {
  return <button className="btn btn-success">{props.children}</button>;
};

export default Button;
export { ButtonSecondary, ButtonSuccess };
