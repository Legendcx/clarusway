import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import useAuthCalls from "../hooks/useAuthCalls";
import { useSelector } from "react-redux";
import { toastErrorNotify } from "../helper/ToastNotify";

function Dashboard() {
  const { logout } = useAuthCalls();
  const { currentUser, error } = useSelector((state) => state.auth);

  useEffect(() => {
    error && toastErrorNotify("Logout Failed");
  }, [currentUser, error]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STOCK APP
          </Typography>
          {currentUser && (
            <Button color="inherit" onClick={() => logout()}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Dashboard;
