import { Button } from "@/components/ui/button";
import "./nav-button.css";

type NavButtonProps = {
  className?: string;
  children?: React.ReactNode;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavButton(props: NavButtonProps) {

  const color = props.color ? props.color : "black";

  const underlineStyle = {
    backgroundImage: `linear-gradient(${color}, ${color}), linear-gradient(transparent, transparent)`,
    color: color,
  }

  return (
    <Button
      onClick={props.onClick}
      variant={"link"} 
      className={`linkbtn bg-no-repeat bg-bottom transition-all rounded-none h-5 px-0 hover:no-underline 
        ${props.className}`} 
      style={underlineStyle}
    >{props.children}</Button>
  );
}