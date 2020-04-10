import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Box, Button, Menu, IconButton, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

// import Link from "next/link";
import Link from "@material-ui/core/Link";

import { AuthUserStore } from "../../store/AuthUserStore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      color: theme.palette.primary.contrastText,
      "&:hover": {
        cursor: "pointer"
      }
    },
    grow: {
      flexGrow: 1
    },
    select: {
      marginRight: theme.spacing(2),
      color: theme.palette.background.default,
      "&:before": {
        borderColor: "#ffffff"
      },
      "&:after": {
        borderColor: "#ffffff"
      }
    },
    icon: {
      fill: "#ffffff"
    },
    selectField: {
      "&:focus": {
        backgroundColor: "unset"
      }
    },
    input: {
      paddingLeft: theme.spacing(1)
    }
  })
);

interface Props {
  workspaces?: any;
}
const Header: React.FC<Props> = ({ }) => {
  const classes = useStyles();
  const authStore = AuthUserStore.useContainer();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const renderWorkspaces = () => {
    // if (authStore.workspaces.length) {
    //   return (
    //     <Select
    //       disableUnderline
    //       className={classes.select}
    //       value={authStore.workspaces[0].id}
    //       inputProps={{
    //         classes: {
    //           icon: classes.icon,
    //           select: classes.selectField
    //         }
    //       }}
    //     >
    //       {authStore.workspaces.map((workspace: any) => {
    //         return (
    //           <MenuItem key={workspace.id} color="inherit" value={workspace.id}>
    //             {workspace.name}
    //           </MenuItem>
    //         );
    //       })}
    //     </Select>
    //   );
    // }
    return null;
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>{authStore.user ? authStore.user.name : "No user"}</MenuItem>
      <MenuItem onClick={() => authStore.signOut()}>ログアウト</MenuItem>
    </Menu>
  );
  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <Link href="/" as="/" shallow passHref>
            <Typography variant="h6" className={classes.title}>
              FastLabel
            </Typography>
          </Link> */}
          <Link href="/">
            <Typography variant="h6" color="inherit" className={classes.title}>
              FastLabel
            </Typography>
          </Link>
          <Box className={classes.grow} />
          {renderWorkspaces()}
          {authStore.loading ? null : authStore.user ? (
            // <Button color="inherit" onClick={() => authStore.signOut()}>
            //   ログアウト
            // </Button>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          ) : (
              <Box>
                <Box component="span" mr={1}>
                  {/* <Link href="/signin" as="/signin" shallow passHref>
                    <Button color="inherit">ログイン</Button>
                  </Link> */}
                  <Link href="/signin">
                    <Button color="inherit">ログイン</Button>
                  </Link>
                </Box>
                <Box component="span">
                  {/* <Link href="/signup" as="/signup" shallow passHref>
                    <Button color="inherit">アカウント登録</Button>
                  </Link> */}
                  <Link href="/signup">
                    <Button color="inherit">アカウント登録</Button>
                  </Link>
                </Box>
              </Box>
            )}
        </Toolbar>
        {renderMenu}
      </AppBar>
    </header>
  );
};

export default Header;
