import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  OutlinedInput,
  FormControl,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Grey, OxfordBlue } from "../color-constants";
import { useState } from "react";
import { CustomTextFieldProps } from "./interface";

import CustomTextFieldStyle from "./style";
import { RegularText } from "../typography/typography";

const CustomTextField = (props: CustomTextFieldProps) => {
  const {
    label,
    subLabel,
    value,
    isPassword,
    onChange,
    onBlur,
    name,
    ref,
    placeholder,
    rows,
    multiline,
    disabled,
    type,
    field,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box>
      <RegularText text={label} color={OxfordBlue} transform={true} />
      <RegularText text={subLabel ?? ""} color={Grey} />
      <FormControl
        variant="standard"
        fullWidth
        sx={{
          marginTop: "0.5rem !important",
          marginBottom: "0.5rem !important",
        }}
      >
        {isPassword ? (
          <CustomTextFieldStyle
            onChange={onChange ?? undefined}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            type={showPassword ? "text" : "password"}
            onBlur={onBlur ?? undefined}
            value={value ?? undefined}
            name={name ?? undefined}
            placeholder={placeholder ?? undefined}
            ref={ref}
            fullWidth
          />
        ) : (
          <CustomTextFieldStyle
            {...field}
            onChange={onChange ?? undefined}
            onBlur={onBlur ?? undefined}
            value={value ?? undefined}
            name={name}
            placeholder={placeholder ?? undefined}
            rows={rows ?? undefined}
            multiline={multiline ?? undefined}
            type={type ?? undefined}
            fullWidth
            disabled={disabled ?? undefined}
          />
        )}
      </FormControl>
    </Box>
  );
};
export default CustomTextField;
