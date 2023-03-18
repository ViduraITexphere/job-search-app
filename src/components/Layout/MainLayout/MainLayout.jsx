import { Grid } from "@mui/material";
import DrawerBrower from "../../UI/Drawer/Drawer";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import NavBar from "../../UI/NavigationBar/NavBar";

function MainLayout() {
  return (
    <Grid container className="container">
      <Grid className="container-sidebar">
        <DrawerBrower />
      </Grid>
      <Grid container className="container-right-side">
        <Grid item xs={12} className="container-right-header">
            <NavBar />
        </Grid>
        <Grid item xs={12} className="container-right-body">
        <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MainLayout;
