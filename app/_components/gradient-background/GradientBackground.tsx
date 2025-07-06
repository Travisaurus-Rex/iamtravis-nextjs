import { ReactNode } from "react";
import "./GradientBackground.css";

const GradientBackground = (props: { children: ReactNode }) => {
  return <div className="gradient-background">{props.children}</div>;
};

export default GradientBackground;