import { Button } from "@mui/material";
import {
  White,
  PrimaryButtonHover,
  PrimaryButtonClicked,
  PrimaryButtonDisabled,
  GhostButtonHover,
  GhostButtonClicked,
  GhostButtonDisabledTextColor,
} from "../color-constants";
import { ButtonProps, GhostMainProps } from "./interface";

export const PrimaryButton = ({
  buttonName,
  onClick,
  color,
  type,
  fullWidth,
}: ButtonProps) => {
  return (
    <Button
      type={type}
      sx={{
        background: color ?? "#16103F",
        color: White,
        textAlign: "center",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "bold",
        fontFamily: "Lexend",
        textTransform: "none",
        padding: "9px 20px",
        "&:hover": {
          backgroundColor: PrimaryButtonHover,
          color: White,
        },
        "&:active": {
          backgroundColor: PrimaryButtonClicked,
          color: White,
        },
        "&.Mui-disabled": {
          backgroundColor: PrimaryButtonDisabled,
          color: White,
        },
      }}
      // disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {buttonName}
    </Button>
  );
};

export const GhostButton = ({
  buttonName,
  disabled,
  color,
  fullWidth,
  onClick,
}: GhostMainProps) => {
  return (
    <Button
      sx={{
        color: color,
        textAlign: "center",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "medium",
        fontFamily: "Lexend",
        textTransform: "none",
        "&:hover": {
          background: "transparent",
          color: GhostButtonHover,
        },
        "&:active": {
          background: "transparent",
          color: GhostButtonClicked,
        },
        "&.Mui-disabled": {
          background: "transparent",
          color: GhostButtonDisabledTextColor,
        },
      }}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {buttonName}
    </Button>
  );
};
