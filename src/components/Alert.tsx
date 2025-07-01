//pass the ticks a prop in a dynamic way

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

//alert component
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
