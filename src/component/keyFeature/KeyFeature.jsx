import React from "react";
import './KeyFeature.css'
import PieChart from "../pie chart/PieChart";
import CompanyTable from "../companyTable/Companytable";
import { Box } from "@mui/material";
export default function KeyFeature() {
  return (
  <>
    <Box className="keyfeature">
      <h3>Client Management</h3>
      <h4>Key Performance Indicator</h4>
      <Box className="feature_container">
        <Box className="performance">
          <Box>
            <p className="headingMain">Client Retention Rate</p>
            <p className="number voilet">55%</p>
          </Box>
          <Box>
            <p className="headingMain">Client Satisfaction</p>
            <p className="number green">55%</p>
          </Box>
          <Box>
            <p className="headingMain">Revenue Generated</p>
            <p className="number skyblue">55%</p>
          </Box>
        </Box>
        <Box className="performance">
         
          <Box>
            <p className="headingMain">Client Retention Rate</p>
            <p className="number voilet">55%</p>
          </Box>
          <Box>
            <p className="headingMain">Client Satisfaction</p>
            <p className="number  red">55%</p>
          </Box>
          <Box>
            <p className="headingMain">Revenue Generated</p>
            <p className="number skyblue">55%</p>
          </Box>
        </Box>
        <Box className="performance">
         
         <Box>
           <p className="headingMain">Client Retention Rate</p>
           <p className="number orange">65%</p>
         </Box>
         <Box>
           <p className="headingMain">Client Satisfaction</p>
           <p className="number green">35%</p>
         </Box>
       </Box>
      </Box>
    </Box>
    <Box className="bottom_data">
      <CompanyTable/> <PieChart/>
    </Box>
  </>
  );
}
