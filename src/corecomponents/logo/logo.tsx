import "../index.scss";
import { LogoProps } from "../typography/interface";

const Logo = (props: LogoProps) => {
  const { fontSize, text } = props;
  return (
    <>
      <h1 className="home-welcome-text-radiant" style={{ fontSize: fontSize }}>
        {text}
      </h1>
    </>
  );
};

export default Logo;
