import { OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextFieldStyle = styled(OutlinedInput)({
  textAlign: "left",
  marginTop: "0 !important",
  fontFamily: "Lexend",
  height: "48px",
  borderRadius: "5px !important",
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #CECFD5",
    },
    "&:hover fieldset": {
      border: "1px solid #C4CCFD",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #889AFB",
    },
  },
  "&&.MuiInputBase-root": {
    border: "none !important",
  },
  "&&.MuiOutlinedInput-input": {
    padding: "9.5px 14px !important",
    borderRadius: "5px !important",
  },
});

export default CustomTextFieldStyle;
