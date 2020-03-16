import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";

const Layout = props => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    {/* <div><strong>Anchal's Burgers</strong></div> */}
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>
);

export default Layout;
