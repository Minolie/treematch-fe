import { Button } from "@mui/material";
import { ButtonProps } from "./interface";

export const PrimaryButton = ({
  buttonName,
  onClick,
  color,
  type,
  fullWidth
}: ButtonProps) => {
  return (
    <Button
      type={type}
      sx={{
        background: color ?? '#16103F',
        color: 'white',
        textAlign: 'center',
        borderRadius: '5px',
        fontSize: '16px',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        textTransform: 'none',
        padding: '9px 20px',
        // '&:hover': {
        //   backgroundColor: PrimaryButtonHover,
        //   color: White,
        // },
        // '&:active': {
        //   backgroundColor: PrimaryButtonClicked,
        //   color: White,
        // },
        // '&.Mui-disabled': {
        //   backgroundColor: PrimaryButtonDisabled,
        //   color: White,
        // },
      }}
      // disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {buttonName}
    </Button>
  )
};
