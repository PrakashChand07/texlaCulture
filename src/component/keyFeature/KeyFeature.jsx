import React from "react";
import "./KeyFeature.css";
import PieChart from "../pie chart/PieChart";
import CompanyTable from "../companyTable/Companytable";
import { Box } from "@mui/material";
export default function KeyFeature() {
  return (
    <>
      <Box className="keyfeature">
        <h3>Client Management</h3>
        <Box sx={{ display: "flex",justifyContent:"space-around"}}>
          <h4>Key Performance Indicator</h4>
          <h4>Companies status</h4>
          <h4>Active user</h4>
        </Box>

        <Box className="feature_container">
          <Box className="performance">
            <Box sx={{ borderLeft: "5px solid blue", paddingLeft: "8px" }}>
              <p className="headingMain">Client Retention Rate</p>
              <p className="number blue">55%</p>
            </Box>
            <Box sx={{ borderLeft: "5px solid green", paddingLeft: "8px" }}>
              <p className="headingMain">Client Satisfaction</p>
              <p className="number green">55%</p>
            </Box>
            <Box
              sx={{
                borderLeft: "5px solid rgb(12, 237, 241)",
                marpaddingLeftginLeft: "8px",
              }}
            >
              <p className="headingMain">Revenue Generated</p>
              <p className="number skyblue">55%</p>
            </Box>
          </Box>
          <Box className="performance">
            <Box sx={{ borderLeft: "5px solid blue", paddingLeft: "8px" }}>
              <p className="headingMain">Client Retention Rate</p>
              <p className="number blue">55%</p>
            </Box>
            <Box sx={{ borderLeft: "5px solid red", paddingLeft: "8px" }}>
              <p className="headingMain">Client Satisfaction</p>
              <p className="number  red">55%</p>
            </Box>
            <Box
              sx={{
                borderLeft: " 5px solid rgb(12, 237, 241)",
                paddingLeft: "8px",
              }}
            >
              <p className="headingMain">Revenue Generated</p>
              <p className="number skyblue">55%</p>
            </Box>
          </Box>
          <Box className="performance">
            <Box sx={{ borderLeft: "5px solid orange", paddingLeft: "8px" }}>
              <p className="headingMain">Client Retention Rate</p>
              <p className="number orange">65%</p>
            </Box>
            <Box sx={{ borderLeft: "5px solid green", paddingLeft: "8px" }}>
              <p className="headingMain">Client Satisfaction</p>
              <p className="number green">35%</p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="bottom_data">
        <CompanyTable /> <PieChart />
      </Box>
    </>
  );
}
