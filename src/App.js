/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import MDAlert from "components/MDAlert";

// Material Dashboard 2 React routes
import routes from "routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";


// OUR IMPORTS!!!!!!!!!


import styled from "styled-components";
import CustomLineChart from "./components/CustomLineChart";
import CustomNavbar from "components/CustomNavbar";
import CustomBarChart from "components/CustomBarChart";
import CustomInfoCard from "components/CustomInfoCard";
import esg_data from "Data/esg_data";
import PredictionLineChart from "components/PredictionLineChart";
import InvestorInfoCard from "components/InvestorInfoCard";
import InvestorsInfoCard2 from "components/InvestorsInfoCard2";


const GridTemplateArea = styled.div `
    display: grid;
    grid-template-areas: 
            "header header header"
            "left-side middle right-side"
            "left-side-middle left-side-middle right-side-middle"
            ;

    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 20px;
    margin-right: 20px;
    gap: 20px;
    /* margin-left: 20px;
    margin-right: 20px; */
`
const LeftSide = styled.div`
  display: grid;  
  grid-area: left-side;
`
const RightSide = styled.div`
  display: grid;  
  grid-area: right-side;
`


const Middle = styled.div`
  display: grid;  
  grid-area: middle;
`


const Header = styled.div`
  display: grid;  
  grid-area: header;
`

const LeftSideMiddle = styled.div`
  display: grid;  
  grid-area: left-side-middle;
`
const RightSideMiddle = styled.div`
  display: grid;
  grid-area: right-side-middle;
`




export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [rtlCache, setRtlCache] = useState(null);
  



  const [viewType, setViewType] = useState({
    industry: "Automotive",
    company: "BMW",
    view: "analytics"
  })

  const viewTypeHandler = (industry = "Automotive",company = "BMW",view="analytics")=>{
    setViewType({industry: industry, company: company, view:view})
  }

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        div
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      

        
        {viewType.view=="analytics" ? 
          <GridTemplateArea>

            <Header>
            <CustomNavbar viewTypeHandler = {viewTypeHandler} viewType = {viewType} JsonData={esg_data}/>
            </Header>
    
            <LeftSide>
              <CustomInfoCard letter="E" JsonData = {esg_data} viewType={viewType}/>
            </LeftSide>

            
            <Middle>
              <CustomInfoCard letter="S" JsonData = {esg_data} viewType={viewType}/>
            </Middle>
    
            <RightSide>
              <CustomInfoCard letter="G" JsonData = {esg_data} viewType={viewType}/>
            </RightSide>
            
          
            <LeftSideMiddle>
              <CustomLineChart company={viewType.company}/>
            </LeftSideMiddle>
    
            <RightSideMiddle>
              <CustomBarChart JsonData = {esg_data} viewType={viewType}/>
            </RightSideMiddle>
          </GridTemplateArea>

          :
          
            <GridTemplateArea>
              <Header>
                <CustomNavbar viewTypeHandler = {viewTypeHandler} viewType = {viewType} JsonData={esg_data}/>
            </Header>

          <LeftSideMiddle>
          <PredictionLineChart JsonData = {esg_data} viewType={viewType}/>
          </LeftSideMiddle>
          <RightSideMiddle>
            {/* <InvestorInfoCard viewType={viewType} /> */}
            <InvestorsInfoCard2 viewType={viewType} />
          </RightSideMiddle>
          </GridTemplateArea>
          }
      

    </ThemeProvider>
  );
}
