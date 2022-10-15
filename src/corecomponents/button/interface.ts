type ButtonType = 'submit' | 'reset' | 'button';

export interface ButtonProps {
    buttonName: string;
    onClick: (val:any) => void;
    color?: string;
    type: ButtonType;
    fullWidth?: boolean;
}