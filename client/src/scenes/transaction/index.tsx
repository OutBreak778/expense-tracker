/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import DashboardBox from "../../components/DashboardBox";
import BoxHeader from "../../components/BoxHeader";
import { useGlobalContext } from "../../context/GlobalContext";
import HistoryPage from "../../components/HistoryPage";
import DashboardChart from "../../components/DashboardChart";

const gridTemplateLarge = `
"a a b"
"a a b"
"a a b"
"a a b"
"a a c"
"a a c"
"a a c"
"a a c"
`;

const gridTemplateSmall = `
"a"
"a"
"a"
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"c"
`;

const index = () => {
  const isAboveMedium = useMediaQuery("(min-width: 1024px)");
  const { palette } = useTheme();

  return (
    <Box
      width="100%"
      display="grid"
      gap="0.9rem"
      position="relative"
      sx={
        isAboveMedium
          ? {
              gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
              gridTemplateRows: "repeat(7, minmax(48px, 1fr))",
              gridTemplateAreas: gridTemplateLarge,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmall,
              gap: "1.2em",
            }
      }
    >
      <DashboardBox gridArea="a" overflow="scroll" height="90vh">
        <BoxHeader
          title="All Transactions"
          subTitle="All the Income and Expense data is stored here"
          sideText="Transaction"
        />
        <Box mx={10}>
          <HistoryPage />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="b">
        <BoxHeader
          title="All Transactions"
          subTitle="All the Income and Expense data is stored here"
          sideText="Transaction"
        />
        <DashboardChart />
      </DashboardBox>
      <DashboardBox gridArea="c">
        <BoxHeader
          title="Transaction Text"
          subTitle="Some Written text about transaction Page"
          sideText="Details"
        />

        <Box
          height="20px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem"
        >
          <Box
            height="20px"
            bgcolor={palette.primary[600]}
            borderRadius="1rem"
            width="40%"
          ></Box>
          <Typography paddingTop="10px" margin="0 1rem" variant="h5">
            <ul style={{listStyle: "disc"}}>
              <li >
                All the Transaction is shown in Data-Grid is Income and Expense Transaction
                which is connected through the backend
              </li>
              <li>
                The Website is Connected through Server and Client page which
                will be helpful to see the real time changes which are occur in
                Page.
              </li>
              <li>
                All the Project is Developed by{" "}
                <b>
                  <u>Nikhil Mishra and Raghuvansh Gupta</u>
                </b> by taking reference from different projects and websites
              </li>
            </ul>
          </Typography>
        </Box>
      </DashboardBox>
    </Box>
  );
};

export default index;
