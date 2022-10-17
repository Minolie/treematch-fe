type ButtonType = "submit" | "reset" | "button";

export interface ButtonProps {
  buttonName: string;
  onClick: (val: any) => void;
  color: string;
  type: ButtonType;
  fullWidth?: boolean;
}

export interface GhostMainProps {
  buttonName: string;
  disabled?: boolean;
  color: string;
  fullWidth?: boolean;
  onClick?: (val: any) => void;
  type?: "submit" | "reset" | "button";
}
