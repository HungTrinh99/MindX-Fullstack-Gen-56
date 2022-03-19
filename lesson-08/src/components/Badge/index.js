import React from "react";

const Badge = (props) => {
  const { title, type, ...rest } = props;
  const classes = `bagde bagde-${type}`;
  return (
    <div className={classes} {...rest}>
      {title}
    </div>
  );
};

export default Badge;
