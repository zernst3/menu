import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { Home, Dehaze } from "@material-ui/icons";

import { useStyles } from "./NavbarStyles";

interface listItem {
  listIcon: any;
  listText: string;
  link: string;
}

const menuItems: Array<listItem> = [
  {
    listIcon: <Home />,
    listText: "Home",
    link: "/",
  },
];

export const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    if (event.currentTarget.value === "mobileMenu") {
      setMobileMenu(true);
    }
  };

  const handleClose = () => {
    setMobileMenu(false);
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box component='nav' className={classes.Nav}>
        <AppBar position='relative' className={classes.appBarStyles}>
          <Toolbar className={classes.toolbarStyles}>
            {/* Desktop Navbar */}
            <div className={classes.navbarContainer}>
              {menuItems.map((item, idx) => {
                return (
                  <NavLink
                    exact={item.link !== "/myprojects"}
                    activeClassName={classes.navbarActive}
                    to={item.link}
                    key={idx}
                  >
                    <ListItem>
                      {item.listIcon && (
                        <ListItemIcon className={classes.listItem}>
                          {item.listIcon}
                        </ListItemIcon>
                      )}
                      <ListItemText
                        className={classes.listItem}
                        primary={item.listText}
                      />
                    </ListItem>
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Navbar */}
            <div className={classes.toggleSlider}>
              <IconButton
                aria-controls='simple-menu'
                className={classes.toggleSlider}
                onClick={handleClick}
                value='mobileMenu'
              >
                <ListItemIcon className={classes.toggleButton}>
                  <Dehaze />
                </ListItemIcon>

                <ListItemText
                  className={classes.toggleButton}
                  primary={"Nav"}
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                PaperProps={{
                  style: {
                    backgroundColor: "black",
                    backdropFilter: "blur(5px)",
                    borderRadius: "10px",
                  },
                }}
                keepMounted
                open={mobileMenu}
                onClose={handleClose}
              >
                {menuItems.map((item, idx) => {
                  return (
                    <MenuItem key={idx} onClick={handleClose}>
                      <NavLink
                        exact
                        className={classes.menuLink}
                        activeClassName={classes.sidebarActive}
                        to={item.link}
                      >
                        <div className='MuiListItem-root MuiListItem-gutters'>
                          <ListItemIcon className={classes.listItem}>
                            {item.listIcon}
                          </ListItemIcon>
                          <ListItemText
                            className={classes.listItem}
                            primary={item.listText}
                          />
                        </div>
                      </NavLink>
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};
