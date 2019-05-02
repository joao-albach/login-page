import React from "react";

interface Props {
  children?: React.ReactNode;
}

function Button(props: Props) {
  return <button>{props.children}</button>;
}

export default Button;
