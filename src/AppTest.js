import React, { Component } from "react";

import MDAlert from "components/MDAlert";
import { ThemeProvider } from "@mui/private-theming";


class AppTest extends Component {

    render() { 
        return (
            <MDAlert>This is an alert!</MDAlert>
        );
  };
}
 
export default AppTest;