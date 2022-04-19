import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../img/logo1.png";
import Typography from "@mui/material/Typography";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import RecommendIcon from "@mui/icons-material/Recommend";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          style={{ color: "black" }}
          size="large"
          aria-label="show 4 new mails"
        >
          <PersonIcon />
        </IconButton>
        <span style={{ color: "black" }}>About</span>
      </MenuItem>
      <MenuItem>
        <IconButton
          style={{ color: "black" }}
          size="large"
          aria-label="show 4 new mails"
        >
          <EqualizerIcon />
        </IconButton>
        <span style={{ color: "black" }}>Skills</span>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          style={{
            backgroundColor: "black",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: "block" }, backgroundColor: "white" }}
          >
            <img src={logo} width="70px" alt="" />
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                mx: 1,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
            >
              <a
                class="nav-link"
                href="#about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </a>
            </Button>
            <Button
              sx={{
                mx: 1,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
            >
              <a
                class="nav-link"
                href="#skill"
                style={{ textDecoration: "none", color: "white" }}
              >
                Skills
              </a>
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
