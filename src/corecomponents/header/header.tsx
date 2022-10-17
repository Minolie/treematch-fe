import { Avatar, Box, Grid, IconButton } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";

import "../index.scss";
import CustomMenu from "../menu/menu";
import Logo from "../logo/logo";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCustomMenuClick = () => {};

  return (
    <Grid container px={[1, 1, 1, 4, 6]} className="header">
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Grid
          item
          xs={12}
          sm={2.5}
          md={2.5}
          lg={2.5}
          xl={2.5}
          py={1.5}
          className="header-logo"
        >
          <Logo fontSize={24} text="TreeMatch" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2.5}
          md={2.5}
          lg={2.5}
          xl={2.5}
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <Box
            className="header-profile"
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <KeyboardArrowDownIcon sx={{ ml: 1 }} />
            <IconButton size="small" sx={{ ml: 0.5, p: 0.4 }} />
            <Avatar sx={{ width: "2em", height: "2em" }}>
              <PersonIcon />
            </Avatar>
          </Box>
          <CustomMenu
            anchorEl={anchorEl}
            open={open}
            handleClose={handleClose}
            handleClick={handleCustomMenuClick}
            options={[{ value: "Log out", label: "Log out" }]}
          />
        </Grid>
      </Box>
    </Grid>
  );
};

export default Header;
