import React from "react";
import PropTypes from "prop-types";

const PRIMARY_BUTTON = "primary";
const SECONDARY_BUTTON = "secondary";

const Button = (props) => {
  const {
    label,
    buttonType,
    fullWidth,
    children,
    onClick,
    className,
    type,
    ...rest
  } = props;
  let classes = "button " + className;

  if (fullWidth) {
    classes += " button-full-width";
  }

  if (buttonType === PRIMARY_BUTTON) {
    classes += "";
  } else if (buttonType === SECONDARY_BUTTON) {
    classes += " button-secondary";
  }
  return (
    <button className={classes} onClick={onClick} type={type} {...rest}>
      {label ? label : children}
    </button>
  );
};

Button.defaultProps = {
  label: "Button",
  fullWidth: false,
  onClick: () => {},
  type: "button",
};
Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
