import { Typography } from "@mui/material";
import { TypographyProps } from "./interface";

export const HeadingOne = (props: TypographyProps) => {
  const { color, text, align } = props;
  return (
    <Typography
      sx={{
        color: {color},
        textAlign: {align},
        fontSize: ["81px", "81px", "81px", "81px", "91px"],
        fontWeight: 600,
        fontFamily: "Lexend",
        textTransform: "none",
        // ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

export const RegularText = (props: TypographyProps) => {
  const { color, text, align } = props;
  return (
    <Typography
      sx={{
        color: {color},
        textAlign: {align},
        display: 'flex',
        fontSize: ["14px", "14px", "14px", "14px", "16px"],
        fontWeight: "normal",
        fontFamily: "Lexend",
        textTransform: "none",
        // ...sx,
      }}
    >
      {text}
    </Typography>
  );
}

export const TitleText =  (props: TypographyProps) => {
  const { color, text, align } = props;
  return (
    <Typography
      sx={{
        color: {color},
        textAlign: {align},
        display: 'flex',
        fontSize: ["24px", "24px", "24px", "24px", "28px"],
        fontWeight: "normal",
        fontFamily: "Lexend",
        textTransform: "none",
        // ...sx,
      }}
    >
      {text}
    </Typography>
  );
}
