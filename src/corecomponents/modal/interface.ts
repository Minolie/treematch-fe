export interface CustomModalProps {
  open: boolean;
  onModalClose: (val: boolean) => void;
  title: string;
  message: string;
  children?: any;
  actions?: any;
  footer?: any;
}
