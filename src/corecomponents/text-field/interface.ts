import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface CustomTextFieldProps {
  className?: string;
  label: string;
  subLabel?: string;
  onBlur: any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  placeholder?: string;
  isPassword: boolean;
  disabled: boolean;
  type: HTMLInputTypeAttribute;
  ref: any;
  rows: number;
  multiline: boolean;
  field?: any;
}
