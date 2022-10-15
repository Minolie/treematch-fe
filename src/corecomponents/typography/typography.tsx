import { Typography } from "@mui/material";
import { TypographyProps } from "./interface";

export const HeadingOne = (props: TypographyProps) => {
  const { color, text, gradient } = props;
  return (
    <Typography
      sx={{
        color: {color},
//         background: 'linear-gradient(to right, #7d8ef7 0%, #ff3841 100%)',
//         webkitbackgroundClip: 'text',
//   webkitTextFillColor: 'transparent',
        textAlign: "left",
        fontSize: ["32px", "32px", "32px", "32px", "34px"],
        fontWeight: "bold",
        fontFamily: "Raleway",
        textTransform: "none",
        // ...sx,
      }}
    >
      {text}
    </Typography>
  );
};
