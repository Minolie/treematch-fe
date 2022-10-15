import { Menu, MenuItem } from "@mui/material";

interface CustomMenuProps {
  open: boolean;
  handleClose: (val: boolean) => void;
  anchorEl: HTMLElement | null;
  handleClick: (val: any) => void;
  options: any;
}

const CustomMenu = ({
  open,
  handleClose,
  anchorEl,
  handleClick,
  options,
}: CustomMenuProps) => (
  <Menu
    id="header-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    onClick={handleClick}
    PaperProps={{
      elevation: 0,
      sx: {
        overflow: "visible",
        boxShadow: "0px 8px 24px #0B102D29",
        mt: 1.5,
        "& .MuiAvatar-root": {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
      },
    }}
    transformOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
  >
    {options.map((item: any) => (
      <MenuItem key={item.value} onClick={handleClick}>
        {item.value}
      </MenuItem>
    ))}
  </Menu>
);

export default CustomMenu;
